import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SpotifyWebApi from "spotify-web-api-node";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const spotifyApi = new SpotifyWebApi({
  clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  clientSecret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
});

interface CurrentTrack {
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  previewUrl: string | null;
  spotifyUrl: string;
}

export default function SpotifyPlayer() {
  const { data: currentTrack, isLoading } = useQuery({
    queryKey: ['spotify-current-track'],
    queryFn: async () => {
      const response = await fetch('/api/spotify/now-playing');
      if (!response.ok) throw new Error('Failed to fetch current track');
      return response.json() as Promise<CurrentTrack>;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  if (isLoading) {
    return (
      <section className="section-spacing bg-secondary/5">
        <div className="container">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-muted rounded mb-4"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!currentTrack) {
    return (
      <section className="section-spacing bg-secondary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-xl text-muted-foreground mb-4">SPOTIFY</h2>
            <h3 className="heading-lg">Not Playing</h3>
            <p className="text-muted-foreground">Nothing is currently playing on Spotify.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-spacing bg-secondary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-xl text-muted-foreground mb-4">SPOTIFY</h2>
          <h3 className="heading-lg">Now Playing</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card/20 border border-border overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={currentTrack.albumArt}
                  alt={`${currentTrack.album} cover`}
                  className="w-48 h-48 rounded-lg shadow-lg"
                />
                <div className="flex flex-col gap-2">
                  <h4 className="text-2xl font-semibold">{currentTrack.name}</h4>
                  <p className="text-lg text-muted-foreground">{currentTrack.artist}</p>
                  <p className="text-muted-foreground">{currentTrack.album}</p>
                  <a
                    href={currentTrack.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
                  >
                    Open in Spotify
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}