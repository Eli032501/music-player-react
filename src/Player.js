import React from "react";
import "./Player.css";

import { useEffect, useState } from "react";
import useSound from "use-sound";
import music from "./assets/sound1.mp3";

import {
  SlControlStart,
  SlControlPause,
  SlControlPlay,
  SlControlEnd,
} from "react-icons/sl";

import { IconContext } from "react-icons";

export default function Player() {
  const [playing, setPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(music);
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState();

  const sec = duration / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const timeRemain = {
    min: min,
    sec: secRemain,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingBtn = () => {
    if (playing) {
      pause();
      setPlaying(false);
    } else {
      play();
      setPlaying(true);
    }
  };

  return (
    <div className="Player">
      <h2>musify</h2>
      <figure className="musicCover">
        <img src="https://picsum.photos/400" alt=" " />
      </figure>
      <div>
        <h3 className="title">Sunrise Sips</h3>
        <a
          href="https://stocktune.com/"
          className="subTitle"
          target="_blank"
          rel="noreferrer"
        >
          stocktune
        </a>
      </div>
      <div className="timeline">
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="time-range"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
        <div className="time">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {timeRemain.min}:{timeRemain.sec}
          </p>
        </div>
      </div>

      <div className="buttons">
        <button className="playButton">
          <IconContext.Provider value={{ className: "styleButton" }}>
            <SlControlStart />
          </IconContext.Provider>
        </button>
        {!playing ? (
          <button className="playButton" onClick={playingBtn}>
            <IconContext.Provider value={{ className: "styleButton" }}>
              <SlControlPlay />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingBtn}>
            <IconContext.Provider value={{ className: "styleButton" }}>
              <SlControlPause />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ className: "styleButton" }}>
            <SlControlEnd />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

// reference of project - https://dev.to/documatic/building-a-music-player-in-react-2aa4
