import React from "react";

import "./navigationItem.scss";

const NavigationItem = ({ selected, onclick, index }) => {
    return(
      <div className="navigationItem" onClick={onclick} id={index} style={selected ? { backgroundColor: '#67ddbf' } : {}}></div>
    )
}

export default NavigationItem;
