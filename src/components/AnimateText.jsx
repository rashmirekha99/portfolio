import React, { useState, useEffect } from "react";
import "./animateText.css"; // We'll define the animations here

const TextChanger = () => {
  const [currentText, setCurrentText] = useState("Software Engineer");
  const [index, setIndex] = useState(0);
  const texts = ["Software Engineer", "Frontend Engineer", "Mobile Developer"];
  //   let index = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Update the index safely
      setCurrentText(texts[index]); // Set the new text based on the updated index
    }, 2000); // Change text every 4 seconds

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, [index, texts]);

  return (
    <div className="text-container">
      <h1 className="animated-text"> &nbsp;{currentText}</h1>
    </div>
  );
};

export default TextChanger;
