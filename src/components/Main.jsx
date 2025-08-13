import { useState } from "react";
import Sidebar from "./Sidebar";

const Main = () => {
  const [playlists, setPlaylists] = useState([]);

  const addNewPlaylist = () => {
    const newPlaylist = {
      id: Date.now(),
      name: `My Playlist #${playlists.length + 1}`,
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  return (
    <div className="flex h-screen">
      <Sidebar onCreatePlaylist={addNewPlaylist} />

      {/* Show playlist names here */}
      <div className="flex-1 p-6 text-white bg-black overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Your Playlists</h1>
        {playlists.map((playlist) => (
          <div key={playlist.id} className="mb-2 bg-[#1e1e1e] p-2 rounded">
            🎵 {playlist.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
