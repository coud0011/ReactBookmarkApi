import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function Rating({value}){
  let icons=[];
  value=Math.round(value)
  for (let i = 0; i < value; i++) {
    icons[i]=(<FontAwesomeIcon icon={faStar} rotation={180} style={{color: "#e5a50a",}} />)
  }
  for (let i = value+1; i < 11; i++) {
    icons[i]=(<FontAwesomeIcon icon={faStar} rotation={180} style={{color: "#9a9996",}} />)
  }
  return (
  <span className="bookmark__rating">
    {icons}
  </span>
  );
}

export default Rating;