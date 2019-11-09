import React from "react";
import SignupForm from "components/signupForm/signupForm"
import LandingInfo from "components/landingInfo/landingInfo"

import "./videoPlayer.scss";

const videoPlayer = ({ url, poster }) => (
  <div className="video-player">
    <div className="landing-information">
      <LandingInfo />
      <SignupForm />
    </div>
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
