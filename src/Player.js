import React from "react";
import "./Player.css";

import { useEffect, useState } from "react";
import useSound from "use-sound";
import music from "./assets/sound1.mp3";
import bgimage from "./assets/bgsound.jpg";
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

  const playButton = () => {
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
        <img src="https://picsum.photos/400" />
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
      <div className="buttons">
        <button className="playButton">
          <IconContext.Provider value={{ className: "styleButton" }}>
            <SlControlStart />
          </IconContext.Provider>
        </button>
        {!playing ? (
          <button className="playButton">
            <IconContext.Provider value={{ className: "styleButton" }}>
              <SlControlPlay />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton">
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
