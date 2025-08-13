import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const naviagte = useNavigate()
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="Go Back"
            onClick={() => navigate(-1)}
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="Go Forward"
            onClick={() => navigate(1)}
          />

        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.spotify.com/premium"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer inline-block"
          >
            Explore Premium
          </a>
          <a
            href="https://www.spotify.com/download"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer inline-block"
          >
            Install App
          </a>

          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
            G
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-1 rounded-2xl"
        >
          All
        </a>
        <a
          href="https://open.spotify.com/genre/music-page"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#242424] text-white cursor-pointer px-4 py-1 rounded-2xl"
        >
          Music
        </a>
        <a
          href="https://open.spotify.com/genre/podcasts-web"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#242424] text-white cursor-pointer px-4 py-1 rounded-2xl"
        >
          Podcasts
        </a>

      </div>
    </>
  );
};

export default Navbar;
