import React from "react";
import "./skills.css";

function LangContainer(props) {
  return (
    <div className="lang-container">
      <img src={props.img}></img>
      <p>{props.lang}</p>
    </div>
  );
}

export default LangContainer;
