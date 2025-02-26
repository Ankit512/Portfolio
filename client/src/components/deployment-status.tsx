import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

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
        const owner = 'Ankit512'; // Your GitHub username
        const repo = 'portfolio'; // Your repository name

        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/deployments`
        );

        if (response.status === 404) {
          setError('No deployments found. The first deployment will be created when you push to the main branch.');
          setLoading(false);
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch deployment status');
        }

        const deployments = await response.json();

        if (deployments.length === 0) {
          setError('No deployments found yet. The first deployment will be created when you push to the main branch.');
          setLoading(false);
          return;
        }

        // Get the latest deployment status
        const latestDeployment = deployments[0];
        const statusResponse = await fetch(latestDeployment.statuses_url);
        const statusData = await statusResponse.json();

        if (statusData.length > 0) {
          setStatus(statusData[0]);
        } else {
          setError('Deployment status not available yet');
        }
      } catch (err) {
        console.error('Error fetching deployment status:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch deployment status');
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
        <Card className="w-full">
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
      <Card className="w-full border-border bg-card/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm">{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!status) {
    return null;
  }

  const statusVariants = {
    pending: 'bg-yellow-500/10 text-yellow-500',
    in_progress: 'bg-blue-500/10 text-blue-500',
    success: 'bg-green-500/10 text-green-500',
    failure: 'bg-red-500/10 text-red-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full border-border bg-card/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge 
              variant="secondary"
              className={statusVariants[status.state]}
            >
              {status.state.replace('_', ' ')}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {new Date(status.created_at).toLocaleString()}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{status.description}</p>
          {status.environment_url && (
            <a
              href={status.environment_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-600 hover:text-purple-500 hover:underline mt-2 block"
            >
              View Deployment →
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}