import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DeploymentStatus {
  state: 'pending' | 'in_progress' | 'success' | 'failure';
  description: string;
  environment_url: string;
  created_at: string;
}

export default function DeploymentStatus() {
  const [status, setStatus] = useState<DeploymentStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeploymentStatus = async () => {
      try {
        // Replace with your GitHub repository details
        const owner = 'your-github-username';
        const repo = 'your-repo-name';
        
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/deployments/latest/statuses`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch deployment status');
        }

        const data = await response.json();
        if (data.length > 0) {
          setStatus(data[0]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchDeploymentStatus();
    // Fetch status every 30 seconds
    const interval = setInterval(fetchDeploymentStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse">
        <Card className="w-full max-w-md">
          <CardContent className="p-4">
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-md bg-destructive/10">
        <CardContent className="p-4">
          <p className="text-sm text-destructive">Error: {error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!status) {
    return null;
  }

  const statusColors = {
    pending: 'bg-yellow-500',
    in_progress: 'bg-blue-500',
    success: 'bg-green-500',
    failure: 'bg-red-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant={status.state === 'success' ? 'default' : 'secondary'}>
              {status.state.replace('_', ' ')}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {new Date(status.created_at).toLocaleString()}
            </span>
          </div>
          <p className="text-sm">{status.description}</p>
          {status.environment_url && (
            <a
              href={status.environment_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline mt-2 block"
            >
              View Deployment →
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
