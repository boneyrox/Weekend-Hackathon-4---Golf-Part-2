import React, { Component, useState } from "react";
import "../styles/App.css";
import { render } from "enzyme";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {};
  const renderChoice = () => {};

  const start=()=>{
    setRenderBall(true);
  }

  return (
    <div className="playground">
       <div className="ball" hidden={!renderBall} ></div>
          <button onClick={start} hidden={renderBall} className="start">
        Start
      </button>
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
