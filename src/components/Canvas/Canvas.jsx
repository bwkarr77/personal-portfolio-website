import React, { useEffect } from "react";
import { useCanvas } from "./useCanvas.jsx";

import "./canvas.css";

const Canvas = () => {
  const [
    coordinates,
    setCoordinates,
    canvasRef,
    canvasWidth,
    canvasHeight,
  ] = useCanvas();

  const handleCanvasClick = (event) => {
    //on click, retrieve mouse location
    // const currentCoord = { x: event.clientX, y: event.clientY };
    const currentCoord = { x: event.offsetLeft, y: event.offsetTop };
    console.log("coords: ", currentCoord);
    // add the location to an array of locations in state:
    setCoordinates([...coordinates, currentCoord]);
  };

  const handleClearCanvas = (event) => {
    setCoordinates([]);
  };

  const getCanv = (el) => {
    // var _x = el.screenX + "px";
    // var _y = el.screenY + "px";
    var _x = el.offsetLeft;
    var _y = el.offsetTop;
    console.log("getCanv: ", el, _x, _y);
    return _x, _y;
  };
  useEffect(() => {
    const location = getCanv(document.getElementById("canvasId"));
    console.log("canvas: ", location);
  }, []);

  return (
    <main className="canvas-main">
      <canvas
        className="canvas"
        id="canvasId"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick}
      />

      <div className="button">
        <button onClick={handleClearCanvas}>CLEAR</button>
      </div>
    </main>
  );
};

export default Canvas;
