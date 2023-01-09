import { useState } from "react";
import classes from "./App.module.css";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const getRandomColor = () => {
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
  };

  const onBgButtonClick = () => {
    setBackgroundColor(getRandomColor());
  };

  return (
    <div
      className={classes.MainContainer}
      style={{ backgroundColor: backgroundColor }}
    >
      <button className={classes.BgButton} onClick={onBgButtonClick}>
        Change Background
      </button>
    </div>
  );
}
