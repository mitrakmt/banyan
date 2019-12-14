import React from "react";
import Header from "components/header/header";
import VideoPlayer from "containers/landing/video/videoPlayer";
import ThemeSection from "components/themeSection/themeSection";
import "./app.scss";

function App() {
  const sections = [
    {
      title: "Eat",
      sellingPoints: [
        `We believe the best code is written when your mind and body are "full".`,
        `We believe the best code is written when your m"full".`,
        `We believe the best code is writand body are "full".`
      ]
    },
    {
      title: "Code",
      sellingPoints: [
        `We believe the best code is written when your mind and body are "full".`,
        `We believe the best code is written when your m"full".`,
        `We believe the best code is writand body are "full".`
      ]
    },
    {
      title: "Love",
      sellingPoints: [
        `We believe the best code is written when your mind and body are "full".`,
        `We believe the best code is written when your m"full".`,
        `We believe the best code is writand body are "full".`
      ]
    }
  ]

  return (
    <div className="app">
      <Header />
      <VideoPlayer
        poster="http://res.cloudinary.com/banyan-codecamp/video/upload/v1571618221/171124_H1_006_tg2l2g.jpg"
        url="https://res.cloudinary.com/banyan-codecamp/video/upload/v1571618221/171124_H1_006_tg2l2g.mp4"
      />
      {
        sections.map((section, index) => (
          <ThemeSection section={section} key={`app-ThemeSection-${section.title}`} />
        ))
     }
    </div>
  );
}

export default App;
