import React from "react";
import "./aboutus.css";

function LangContainer(props) {
  return (
    <div className="lang-container">
      <img src={props.img}></img>
      <p>{props.lang}</p>
    </div>
  );
}

export default LangContainer;
