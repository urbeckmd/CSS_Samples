import React, { useState } from "react";
import "./Day103.css";

function Day103() {
    const [firstShown, setFirstShown] = useState(false);
    const [secondShown, setSecondShown] = useState(true);
    const [firstActive, setFirstActive] = useState(false);
    const [secondActive, setSecondActive] = useState(false);

    const handleFirstClick = () => {
        setFirstActive(true);
        setTimeout(() => {
            setFirstShown(!firstShown);
            setSecondShown(!secondShown);
        }, 2000);
    }

    const handleSecondClick = () => {
        setSecondActive(true);
        setTimeout(() => {
            setFirstShown(!firstShown);
            setSecondShown(!secondShown);
        }, 2000);
    }

    const handleTransitionEnd = () => {
        setFirstActive(false);
        setSecondActive(false);
    }

  return (
    <div className="frame__day103">
      <button className={`button__day103 firstButton__day103 ${firstActive && "active"} ${firstShown && "show"}`} onClick={handleFirstClick}>click me</button>
      <button className={`button__day103 secondButton__day103 ${secondActive && "active"} ${secondShown && "show"}`} onClick={handleSecondClick}>go back</button>
      <div className="seashell__day103">
        <svg height="100" width="120">
          <path
            d="M 57 83 
                    C 30 64 -7 40 14 31 
                    Q 17 24 25 24 
                    Q 30 17 37 20 
                    Q 42 13 50 17 
                    Q 58 10 66 17 
                    Q 73 14 79 19 
                    Q 87 18 91 24 
                    Q 100 23 101 31 
                    C 123 40 85 66 64 83 
                    Q 60.824 85.524 57 83 
                    M 50 78 
                    Q 60 72 70 78 
                    M 14 31 
                    L 52 77 
                    M 25 24 
                    L 54 76 
                    M 37 20 
                    L 56.196 75.415 
                    M 50 17 
                    L 58.523 75.023 
                    M 66 17 
                    L 60.807 74.995 
                    M 79 19 
                    L 63.224 75.246 
                    M 91 24 
                    L 65.622 75.916 
                    M 101 31 
                    L 68.13 76.996 
                    M 41.629 72.299 
                    C 41.155 83.675 41.223 83.743 55.849 82.186 
                    M 78.019 71.994 
                    C 78.767 83.366 80.787 84.114 65.226 82.094"
            fill="#FFEAC6"
            stroke="#C18C15"
          />
        </svg>
      </div>
      <div className="waveBack__day103" onTransitionEnd={handleTransitionEnd}>
        <svg height="500" width="500">
          <path
            d="M -1 40 
                    Q 55 20 150 50
                    Q 200 70 230 60
                    Q 280 40 300 40 
                    Q 330 40 350 20
                    Q 370 0 401 0
                    L 900 900
                    L 0 900"
            fill="white"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="waveFront__day103" onTransitionEnd={handleTransitionEnd}>
        <svg height="500" width="500">
          <path
            d="M -1 75
                    Q 20 60 55 60
                    Q 120 65 150 50
                    Q 200 20 260 50
                    Q 335 80 380 50
                    Q 394 40 401 40
                    L 900 900
                    L 0 900"
            fill="#32BFD0"
            stroke="#32BFD0"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
}

export default Day103;
