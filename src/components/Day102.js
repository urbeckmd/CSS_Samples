import React, { useState } from "react";
import "./Day102.css";

function Day102() {
    const [isActive, setIsActive] = useState(false);
    const [wasActive, setWasActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        setWasActive(true);
    }

    const netsY = [];
    for (let i=0; i<15; i++) {
        netsY.push(<div className="netY__day102" key={i} style={{left: `calc(20*${i}px - 40px)`, top: "-30px", transform: "rotateZ(45deg)"}}></div>)
    }

    const netsX = [];
    for (let i=0; i<15; i++) {
        netsX.push(<div className="netY__day102" key={i} style={{left: `calc(20*${i}px - 40px)`, top: "-30px", transform: "rotateZ(-45deg)"}}></div>)
    }

  return (
    <div className="frame__day102">
      <div className="grass__day102"></div>
      <div className="goal__day102">
        {netsY}
        {netsX}
      </div>
      <div className={`soccerBall__day102 ${isActive && "active"}`} onClick={handleClick}>
        <svg height="90" width="90">
            <polygon points="40 27, 57 20, 67 33, 57 48, 40 43" fill="black" stroke="black" stroke-width="1" />
            <polygon points="65 70, 80 70, 80 85, 68 90, 58 82" fill="black" stroke="black" stroke-width="1" />
            <polygon points="25 65, 30 80, 25 85, 10 90, 8 67" fill="black" stroke="black" stroke-width="1" />
            <polygon points="20 20, 5 25, 0 0, 0 0, 23 0" fill="black" stroke="black" stroke-width="1" />
        </svg>
      </div>
    </div>
  );
}

export default Day102;
