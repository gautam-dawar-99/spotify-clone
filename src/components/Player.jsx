import { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const audioRef = useRef(null);
  const {
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    track,
    time,
    setTime,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muted ? 0 : volume;
    }
  }, [volume, muted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setTime((prev) => ({
        ...prev,
        totalTime: {
          minute: String(Math.floor(audio.duration / 60)).padStart(2, "0"),
          second: String(Math.floor(audio.duration % 60)).padStart(2, "0"),
        },
      }));
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, [setTime]);

  const toggleMute = () => {
    setMuted(!muted);
  };

  const handleVolumeChange = (e) => {
    const bar = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const width = bar.clientWidth;
    const newVol = x / width;
    setVolume(newVol);
    if (muted && newVol > 0) {
      setMuted(false);
    }
  };

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      {/* Left Section */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="song_Data" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 43)}</p>
        </div>
      </div>

      {/* Middle Section - Controls */}
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="shuffle" />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="previous"
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt="pause"
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt="play"
            />
          )}
          <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="next" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="loop" />
        </div>

        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>

      {/* Right Section - Volume and Icons */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="plays" />
        <img className="w-4" src={assets.mic_icon} alt="mic" />
        <img className="w-4" src={assets.queue_icon} alt="queue" />
        <img className="w-4" src={assets.speaker_icon} alt="speaker" />

        <img
          className="w-4 cursor-pointer"
          src={muted ? assets.volume_mute_icon : assets.volume_icon}
          alt={muted ? "Muted" : "Volume"}
          onClick={toggleMute}
        />

        <div
          onClick={handleVolumeChange}
          className="w-20 bg-slate-50 h-1 rounded cursor-pointer relative"
        >
          <div
            style={{ width: `${muted ? 0 : volume * 100}%` }}
            className="bg-green-700 h-full absolute left-0 top-0 rounded"
          />
        </div>

        <img className="w-4" src={assets.mini_player_icon} alt="mini player" />
        <img className="w-4" src={assets.zoom_icon} alt="zoom" />
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={track.src}></audio>
    </div>
  );
};

export default Player;
