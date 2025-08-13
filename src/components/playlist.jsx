const SpotifyPlaylistEmbed = ({ playlistId }) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/playlist/${playlistId}`}
      width="900"
      height="380"
      frameBorder="0"
      allow="encrypted-media"
      allowTransparency="true"
      title="Spotify Playlist"
    ></iframe>
  );
};

export default SpotifyPlaylistEmbed;
