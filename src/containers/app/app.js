import React from 'react';
import VideoPlayer from '../landing/video/videoPlayer'
import logo from '../../logo.svg';
import './app.css';

function App() {
  return (
    <div className="app">
      <h3>This is the home page broseidon.</h3>
      <VideoPlayer
        poster="http://res.cloudinary.com/banyan-codecamp/video/upload/v1571618221/171124_H1_006_tg2l2g.jpg"
        url="https://res.cloudinary.com/banyan-codecamp/video/upload/v1571618221/171124_H1_006_tg2l2g.mp4"
      />
    </div>
  );
}

export default App;
