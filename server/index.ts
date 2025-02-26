import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// In production, serve static files from the dist directory
if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');
  const distPath = path.join(process.cwd(), 'dist');

  // Check if dist directory exists
  if (!fs.existsSync(distPath)) {
    console.error('Error: dist directory not found. Please build the project first.');
    process.exit(1);
  }

  console.log('Serving static files from:', distPath);
  app.use(express.static(distPath));
}

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Error handling middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // Development vs Production setup
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    // Production mode
    console.log('Setting up production server');

    // Handle all routes in production
    app.get('*', (req, res, next) => {
      if (req.path.startsWith('/api')) {
        next(); // Let API routes be handled by the API router
      } else {
        const indexPath = path.join(process.cwd(), 'dist', 'index.html');
        console.log('Attempting to serve:', indexPath);

        // Check if index.html exists
        if (!fs.existsSync(indexPath)) {
          console.error('Error: index.html not found in dist directory');
          return res.status(500).send('Error: Application not built properly');
        }

        res.sendFile(indexPath, (err) => {
          if (err) {
            console.error('Error serving index.html:', err);
            res.status(500).send('Error loading page');
          }
        });
      }
    });
  }

  // Server setup
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
  });
})();