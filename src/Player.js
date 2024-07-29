import React from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
import qala from "./assets/sound1.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons

export default function Payer() {
  return (
    <div className="Player">
      <h2>music</h2>
    </div>
  );
}
