import React from "react";
import SignupForm from "../../../components/signupForm/signupForm"

import "./videoPlayer.css";

const videoPlayer = ({ url, poster }) => (
  <div className="video-player">
    <SignupForm />
    <video
      className="vid-insert bg-black"
      id="ocean"
      autoPlay
      loop
      muted
      poster={poster}
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default videoPlayer;
