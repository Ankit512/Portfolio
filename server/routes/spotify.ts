import express from "express";
import SpotifyWebApi from "spotify-web-api-node";

const router = express.Router();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

// Refresh the access token
async function refreshAccessToken() {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body.access_token);
    console.log('Spotify access token refreshed');
  } catch (error) {
    console.error('Error refreshing Spotify access token:', error);
  }
}

// Refresh token every 50 minutes (tokens expire after 1 hour)
setInterval(refreshAccessToken, 50 * 60 * 1000);
refreshAccessToken(); // Initial token refresh

router.get("/playlists", async (req, res) => {
  try {
    const userId = "6oauivyjugmc8akmeekrkeezg"; // Your Spotify user ID
    const data = await spotifyApi.getUserPlaylists(userId);

    if (!data.body || !data.body.items) {
      return res.json([]);
    }

    const playlists = data.body.items.map(playlist => ({
      id: playlist.id,
      name: playlist.name,
      description: playlist.description,
      imageUrl: playlist.images[0]?.url,
      tracksTotal: playlist.tracks.total,
      spotifyUrl: playlist.external_urls.spotify,
    }));

    res.json(playlists);
  } catch (error) {
    console.error('Error fetching playlists:', error);
    res.status(500).json({ error: 'Failed to fetch playlists' });
  }
});

export default router;