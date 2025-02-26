import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [retryCount, setRetryCount] = useState(0);

  const fetchDeploymentStatus = async () => {
    try {
      const owner = 'Ankit512';
      const repo = 'Portfolio';

      console.log('Fetching deployment status for:', `${owner}/${repo}`);
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/deployments`
      );

      console.log('Deployment API response status:', response.status);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Repository or deployments not found. Please check the repository settings and ensure GitHub Pages is enabled.');
        }
        throw new Error(`Failed to fetch deployment status: ${response.statusText}`);
      }

      const deployments = await response.json();
      console.log('Found deployments:', deployments.length);

      if (deployments.length === 0) {
        throw new Error('No deployments found. Please check GitHub Actions tab for deployment status.');
      }

      // Get the latest deployment status
      const latestDeployment = deployments[0];
      console.log('Latest deployment:', latestDeployment.id);

      const statusResponse = await fetch(latestDeployment.statuses_url);
      console.log('Status API response:', statusResponse.status);

      if (!statusResponse.ok) {
        throw new Error('Failed to fetch deployment status details');
      }

      const statusData = await statusResponse.json();
      console.log('Deployment status:', statusData[0]?.state);

      if (statusData.length > 0) {
        setStatus(statusData[0]);
        setError(null);
      } else {
        throw new Error('Deployment status not available yet. Please check GitHub Actions tab.');
      }
    } catch (err) {
      console.error('Error fetching deployment status:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch deployment status');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeploymentStatus();
    // Fetch status every 30 seconds
    const interval = setInterval(fetchDeploymentStatus, 30000);
    return () => clearInterval(interval);
  }, [retryCount]);

  if (loading) {
    return (
      <Card className="w-full border-border bg-card/20">
        <CardContent className="p-4">
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full border-border bg-card/20">
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <AlertCircle className="h-5 w-5" />
              <p className="text-sm">{error}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setRetryCount(c => c + 1)}
              >
                Retry
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a
                  href="https://github.com/Ankit512/Portfolio/deployments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  View Deployments
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
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
          {status && (
            <>
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
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}