// DisplayHomes.jsx
import SpotifyPlaylistEmbed from "./SpotifyPlaylistEmbed";

const DisplayHomes = () => {
    // https://open.spotify.com/playlist/37i9dQZF1E4oJSdHZrVjxD
  const playlistId = "37i9dQZF1E4oJSdHZrVjxD"; // Example Spotify playlist ID

  return (
    <div>
      {/* Your existing DisplayHomes content */}
      <h2>Welcome to Home</h2>

      {/* Spotify Playlist */}
      <SpotifyPlaylistEmbed playlistId={playlistId} />
    </div>
  );
};

export default DisplayHomes;
