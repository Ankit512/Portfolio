import express from "express";
import SpotifyWebApi from "spotify-web-api-node";

const router = express.Router();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.error('Missing Spotify credentials. Please ensure SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET are set.');
  process.exit(1);
}

const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret,
});

async function refreshAccessToken() {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body.access_token);
    console.log('Spotify access token refreshed successfully');
  } catch (error) {
    console.error('Error refreshing Spotify access token:', error);
    throw error; // Propagate the error to trigger a retry
  }
}

// Refresh token every 50 minutes (tokens expire after 1 hour)
setInterval(refreshAccessToken, 50 * 60 * 1000);

// Initial token refresh
refreshAccessToken().catch(error => {
  console.error('Initial token refresh failed:', error);
  process.exit(1);
});

router.get("/playlists", async (req, res) => {
  try {
    const userId = "6oauivyjugmc8akmeekrkeezg"; // Your Spotify user ID

    // Ensure we have a valid token
    if (!spotifyApi.getAccessToken()) {
      await refreshAccessToken();
    }

    const data = await spotifyApi.getUserPlaylists(userId, { limit: 20 });

    if (!data.body || !data.body.items) {
      console.error('No playlist data received from Spotify API');
      return res.status(500).json({ error: 'Failed to fetch playlists - No data received' });
    }

    const playlists = data.body.items.map(playlist => ({
      id: playlist.id,
      name: playlist.name,
      description: playlist.description,
      imageUrl: playlist.images[0]?.url || '',
      tracksTotal: playlist.tracks.total,
      spotifyUrl: playlist.external_urls.spotify,
    }));

    console.log(`Successfully fetched ${playlists.length} playlists`);
    res.json(playlists);
  } catch (error) {
    console.error('Error fetching playlists:', error);

    // Check if token expired
    if (error.statusCode === 401) {
      try {
        await refreshAccessToken();
        // Retry the request once after refreshing token
        const data = await spotifyApi.getUserPlaylists(userId);
        const playlists = data.body.items.map(playlist => ({
          id: playlist.id,
          name: playlist.name,
          description: playlist.description,
          imageUrl: playlist.images[0]?.url || '',
          tracksTotal: playlist.tracks.total,
          spotifyUrl: playlist.external_urls.spotify,
        }));
        return res.json(playlists);
      } catch (retryError) {
        console.error('Error after token refresh:', retryError);
        return res.status(500).json({ error: 'Failed to fetch playlists after token refresh' });
      }
    }

    res.status(500).json({ error: 'Failed to fetch playlists', details: error.message });
  }
});

export default router;