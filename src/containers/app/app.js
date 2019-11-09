import React from "react";
import Header from "../../components/header/header";
import VideoPlayer from "../landing/video/videoPlayer";
import RotatingText from '../../components/rotatingText/rotatingText'
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div>
        <RotatingText textArray={['test1', 'test2', 'test3']} />
        <VideoPlayer
          poster="http://res.cloudinary.com/banyan-codecamp/video/upload/v1571618221/171124_H1_006_tg2l2g.jpg"
          url="https://res.cloudinary.com/banyan-codecamp/video/upload/v1571618221/171124_H1_006_tg2l2g.mp4"
        />
      </div>
    </div>
  );
}

export default App;
