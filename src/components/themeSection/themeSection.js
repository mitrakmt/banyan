import React, { useEffect, useState } from "react";
import NavigationItem from "components/navigationItem/navigationItem"

import "./themeSection.scss";

const ThemeSection = ({ section: { title, subtitle, sellingPoints = [] } }) => {
  const [selectedNavigation, setSelectedNavigation] = useState(0);
  // useEffect(() => {
  //   const scroll = window.scrollY;
    
  // })

  const changeNavigation = (event) => {
    setSelectedNavigation(parseInt(event.target.id))
  }

  return(
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
    </div>
  )
}

export default ThemeSection;
