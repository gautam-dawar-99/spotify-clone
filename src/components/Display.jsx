// import { Route, Routes, useLocation } from "react-router-dom"
// import DisplayHome from "./DisplayHome"
// import DisplayAlbum from "./DisplayAlbum"
// import { useEffect, useRef } from "react"
// import { albumsData } from "../assets/assets"

// const Display = () => {
//   const displayRef = useRef();
//   const location = useLocation();
//   const isAlbum = location.pathname.includes("album");
//   const albumId = isAlbum ? location.pathname.slice(-1) : "";
//   const bgColor = albumsData[Number(albumId)].bgColor;


//   useEffect(()=>{
//     if(isAlbum) {
//       displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
//     }
//     else{
//       displayRef.current.style.background = "#121212";
//     }
//   })
//   return (
//     <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
//         <Routes>
//             <Route path="/" element={<DisplayHome/>}/>
//             <Route path="/album/:id" element={<DisplayAlbum/>}/>
//         </Routes>
//     </div>
//   )
// }

// export default Display

import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useEffect, useRef } from "react";
import { albumsData } from "../assets/assets";
import SpotifyPlaylistEmbed from "./SpotifyPlaylistEmbed";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)]?.bgColor || "#121212";

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  }, [bgColor, isAlbum]);

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
      style={{ minHeight: "100vh" }}
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>

      {/* Show playlists only on home page */}
      {!isAlbum && (
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold">Spotify Playlists</h3>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex-1">
              <SpotifyPlaylistEmbed playlistId="37i9dQZF1E4oJSdHZrVjxD" />
            </div>
            <div className="flex-1">
              <SpotifyPlaylistEmbed playlistId="37i9dQZF1E4AnYVmEEo8ws" />
            </div>
            <div className="flex-1">
              <SpotifyPlaylistEmbed playlistId="37i9dQZF1E4vqXjPu7Hg0z" />
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default Display;
