import React from "react";

import "./videoPlayer.css";

const videoPlayer = ({ url, poster }) => (
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
);

export default videoPlayer;
