import React, { useState } from "react";
import Button from "./button";
import Gallery from "./gallery";
import "./app.css";

const App = () => {
  const imgArr = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];
  const [current, setCurrent] = useState(0);
  const onPrev = () => {
    setCurrent(current === 0 ? imgArr.length - 1 : current - 1);
  };
  const onNext = () => {
    setCurrent(current === imgArr.length - 1 ? 0 : current + 1);
  };
  return (
    <>
      <h1>Carosuel</h1>
      <div className="body-wrapper">
        <div className="button-wrapper">
          <Button click={onPrev} text={"prev"} />
        </div>
        <div>
          <Gallery imgArr={imgArr} current={current} />
        </div>
        <div className="button-wrapper">
          <Button click={onNext} text={"next"} />
        </div>
      </div>
    </>
  );
};

export default App;
