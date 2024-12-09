import React, { useState } from "react";

const TrafficLight = () => {
  const ROJO = "🔴";
  const AMARILLO = "🟡";
  const VERDE = "🟢";

  const [color, setColor] = useState(ROJO);

  const changeColor = () => {
    if (color === ROJO) setColor(AMARILLO);
    if (color === AMARILLO) setColor(VERDE);
    if (color === VERDE) setColor(ROJO);
  };

  return (
    <div className="traffic">
      <div className="color">{color}</div>

      <button className="buttonColor" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default TrafficLight;
