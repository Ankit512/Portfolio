import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import spotifyRouter from "./routes/spotify";

export async function registerRoutes(app: Express) {
  // Register Spotify routes
  app.use("/api/spotify", spotifyRouter);

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const message = await storage.createContactMessage(data);
      res.json(message);
    } catch (error) {
      res.status(400).json({ error: "Invalid form data" });
    }
  });

  return createServer(app);
}