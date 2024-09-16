import React, { useState, useEffect } from "react";
import "./animateText.css"; // We'll define the animations here

const TextChanger = () => {
  const [currentText, setCurrentText] = useState("Software Engineer");
  const [index, setIndex] = useState(0);
  const texts = ["Software Engineer", "Frontend Engineer", "Mobile Developer"];
  //   let index = 0;

  return (
    <div className="text-container">
      <h1>
        <span class="text_1"> &nbsp;Software Engineer</span>
        <span class="text_2">&nbsp;Mobile Developer</span>
      </h1>
    </div>
  );
};

export default TextChanger;
