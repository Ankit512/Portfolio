import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

interface Playlist {
  id: string;
  name: string;
  description: string | null;
  imageUrl: string;
  tracksTotal: number;
  spotifyUrl: string;
}

export default function SpotifyPlayer() {
  const { data: playlists, isLoading, error } = useQuery({
    queryKey: ['spotify-playlists'],
    queryFn: async () => {
      const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
      if (!clientId) {
        throw new Error('Spotify client ID not found');
      }

      // Use the implicit grant flow
      const authEndpoint = 'https://accounts.spotify.com/authorize';
      // Get the full URL including any base path from GitHub Pages
      const redirectUri = window.location.href.split('#')[0];
      // Use a more permissive scope
      const scope = 'playlist-read-public';

      // Check if we already have a token in session storage
      let accessToken = sessionStorage.getItem('spotify_access_token');

      if (!accessToken) {
        // If no token exists, initiate the auth flow
        const authUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&response_type=token&show_dialog=true`;
        window.location.href = authUrl;
        return [];
      }

      // Fetch playlists using the access token
      const userId = "6oauivyjugmc8akmeekrkeezg";
      const response = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists?limit=20`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          // Token expired or invalid, clear it and reload to trigger new auth flow
          console.log('Token expired, clearing and refreshing...');
          sessionStorage.removeItem('spotify_access_token');
          window.location.reload();
          return [];
        }
        throw new Error('Failed to fetch playlists');
      }

      const data = await response.json();
      console.log('Playlists fetched successfully:', data.items.length);

      return data.items.map((playlist: any) => ({
        id: playlist.id,
        name: playlist.name,
        description: playlist.description,
        imageUrl: playlist.images[0]?.url || '',
        tracksTotal: playlist.tracks.total,
        spotifyUrl: playlist.external_urls.spotify,
      }));
    },
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
  });

  // Handle access token from URL hash if present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get('access_token');
      if (accessToken) {
        console.log('Access token obtained, saving to session storage');
        sessionStorage.setItem('spotify_access_token', accessToken);
        // Clean up the URL
        window.location.hash = '';
        // Reload to trigger a new fetch with the token
        window.location.reload();
      }
    }
  }, []);

  if (isLoading) {
    return (
      <section id="spotify" className="section-spacing bg-secondary/5">
        <div className="container">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-muted rounded mb-4"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-64 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!playlists?.length) {
    return (
      <section id="spotify" className="section-spacing bg-secondary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-xl text-muted-foreground mb-4">SPOTIFY</h2>
            <h3 className="heading-lg">My Playlists</h3>
            <p className="text-muted-foreground">
              {error ? 'Error loading playlists. Please try again later.' : 'No playlists found.'}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="spotify" className="section-spacing bg-secondary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-xl text-muted-foreground mb-4">SPOTIFY</h2>
          <h3 className="heading-lg">My Playlists</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {playlists.map((playlist: Playlist) => (
            <motion.div
              key={playlist.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a
                href={playlist.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="bg-card/20 border border-border overflow-hidden hover:bg-card/30 transition-colors">
                  <CardContent className="p-3">
                    <div className="aspect-square mb-2 overflow-hidden rounded-md">
                      <img
                        src={playlist.imageUrl}
                        alt={`${playlist.name} cover`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-sm font-semibold mb-0.5 line-clamp-1">{playlist.name}</h4>
                    {playlist.description && (
                      <p className="text-muted-foreground text-xs mb-1 line-clamp-1">
                        {playlist.description}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {playlist.tracksTotal} {playlist.tracksTotal === 1 ? 'track' : 'tracks'}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}