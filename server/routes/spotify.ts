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

router.get("/now-playing", async (req, res) => {
  try {
    const userId = "6oauivyjugmc8akmeekrkeezg"; // Your Spotify user ID
    const data = await spotifyApi.getMyCurrentPlayingTrack();
    
    if (!data.body || !data.body.item) {
      return res.json(null);
    }

    const track = data.body.item;
    
    res.json({
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      albumArt: track.album.images[0].url,
      previewUrl: track.preview_url,
      spotifyUrl: track.external_urls.spotify,
    });
  } catch (error) {
    console.error('Error fetching current track:', error);
    res.status(500).json({ error: 'Failed to fetch current track' });
  }
});

export default router;
