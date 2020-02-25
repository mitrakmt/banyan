import React, { useState } from "react";
import NavigationItem from "components/navigationItem/navigationItem";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./themeSection.scss";

const ThemeSection = ({ section: { title, subtitle, sellingPoints = [] } }) => {
  const [selectedNavigation, setSelectedNavigation] = useState(0);
  const themeStyle = {
    backgroundImage: `url(${sellingPoints[selectedNavigation].backgroundImage})`,
    ":before": {
      filter: `brightness(0.1) !important`,
      zIndex: -1,
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "none",
      display: "block",
      position: "absolute",
      content: ""
    }
  };

  const changeNavigation = (event, index) => {
    // Hacked in adding index to minimize changes here. This is used by the arrows.
    if (index !== undefined) {
      if (index < 0) {
        setSelectedNavigation(sellingPoints.length - 1);
      } else if (index > sellingPoints.length - 1) {
        setSelectedNavigation(0);
      } else {
        setSelectedNavigation(index);
      }
      // When there's no index provided, use the elements id. This is used by the bottom selectors.
    } else {
      setSelectedNavigation(parseInt(event.target.id));
    }
  };

  return (
    <div className="themeSection" style={themeStyle}>
      <h3 className="themeSection-title">{title}</h3>
      <h5 className="themeSection-subtitle">
        {sellingPoints[selectedNavigation].subtitle}
      </h5>
      <div className="themeSection-sellingPoints">
        <div>
          {sellingPoints[selectedNavigation].text.map((textItem, index) => (
            <h4
              key={`themeSection-textItem-${textItem}-${index}`}
              className="themeSection-sellingPoints-text"
            >
              {textItem}
            </h4>
          ))}
        </div>
      </div>
      <div className="themeSection-sellingPoints-navigation">
        {sellingPoints.map((item, index) => (
          <NavigationItem
            selected={selectedNavigation === index}
            index={index}
            onclick={changeNavigation}
            key={`themeSection-${item.subtitle}-${index}`}
          />
        ))}
      </div>
      <span
        className="themeSection-navigation themeSection-navigation-left"
        onClick={() => {
          changeNavigation(null, selectedNavigation - 1);
        }}
      >
        <ArrowBackIosIcon className="themeSection-arrow" />
      </span>
      <span
        className="themeSection-navigation themeSection-navigation-right"
        onClick={() => {
          changeNavigation(null, selectedNavigation + 1);
        }}
      >
        <ArrowForwardIosIcon className="themeSection-arrow" />
      </span>
    </div>
  );
};

export default ThemeSection;
