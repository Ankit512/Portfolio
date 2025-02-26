import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Static playlist data
const playlists = [
  {
    id: "37i9dQZF1DX0XUsuxWHRQd",
    name: "RapCaviar",
    description: "New music from Lil Baby, Gunna and Lil Durk.",
    imageUrl: "https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15",
    tracksTotal: 50,
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd"
  },
  {
    id: "37i9dQZEVXcJZyENOWj7v6",
    name: "Work From Home",
    description: "Lofi beats for focus and productivity.",
    imageUrl: "https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5",
    tracksTotal: 100,
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZEVXcJZyENOWj7v6"
  },
  {
    id: "37i9dQZF1DWWQRwui0ExPn",
    name: "Lo-Fi Beats",
    description: "Beats to relax and focus.",
    imageUrl: "https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1",
    tracksTotal: 800,
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn"
  },
  {
    id: "37i9dQZF1DX8NTLI2TtZa6",
    name: "Tea Time",
    description: "Soft instrumental covers of your favorite songs.",
    imageUrl: "https://i.scdn.co/image/ab67706f00000002c414e7daf34690c9f983f76e",
    tracksTotal: 150,
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX8NTLI2TtZa6"
  }
];

export default function SpotifyPlayer() {
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
          <h3 className="heading-lg">Featured Playlists</h3>
          <p className="text-muted-foreground">Check out some of my favorite playlists on Spotify.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {playlists.map((playlist) => (
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