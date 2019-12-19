import React, { useEffect, useState } from "react";
import NavigationItem from "components/navigationItem/navigationItem"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import "./themeSection.scss";

const ThemeSection = ({ section: { title, subtitle, sellingPoints = [] } }) => {
  const [selectedNavigation, setSelectedNavigation] = useState(0);

  const changeNavigation = (event, index) => {
    if (index !== undefined) {
      if (index < 0) {
        setSelectedNavigation(sellingPoints.length - 1)
      } else if (index > sellingPoints.length - 1) {
        setSelectedNavigation(0)
      } else {
        setSelectedNavigation(index)
      }
    } else {
      setSelectedNavigation(parseInt(event.target.id))
    }
  }

  return (
    <div className="themeSection">
      <h3 className="themeSection-title">{title}</h3>
      <h5 className="themeSection-subtitle">{sellingPoints[selectedNavigation].subtitle}</h5>
      <div className="themeSection-sellingPoints">
        <p>{sellingPoints[selectedNavigation].text}</p>
        <div className="themeSection-sellingPoints-navigation">
          {
            sellingPoints.map((item, index) => (
              <NavigationItem selected={selectedNavigation === index} index={index} onclick={changeNavigation} key={`themeSection-${item.subtitle}-${index}`} />
            ))
          }
        </div>
      </div>
      <span className="themeSection-navigation themeSection-navigation-left" onClick={() => { changeNavigation(null, (selectedNavigation - 1)) }}>
        <ArrowBackIosIcon />
      </span>
      <span className="themeSection-navigation themeSection-navigation-right" onClick={() => { changeNavigation(null, (selectedNavigation + 1)) }}>
        <ArrowForwardIosIcon />
      </span>
    </div>
  )
}

export default ThemeSection;
