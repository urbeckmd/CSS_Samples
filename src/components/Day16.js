import React from "react";
import "./Day16.css";

function Day16() {
  return (
    <div class="frame__day16">
      <div class="blobb__day16"></div>
      <div class="blobb-ring__day16"></div>
      <svg class="octagon__day16">
        <polygon points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" />
      </svg>
      <svg class="triangle__day16">
        <polygon points="53,0 106,90 0,90" />
      </svg>
      <div class="octa-sparkles__day16">
        <div class="sparkle__day16 s1__day16"></div>
        <div class="sparkle__day16 s2__day16"></div>
        <div class="sparkle__day16 s3__day16"></div>
        <div class="sparkle__day16 s4__day16"></div>
      </div>
      <div class="triangle-sparkles__day16">
        <div class="sparkle__day16 s1__day16"></div>
        <div class="sparkle__day16 s2__day16"></div>
        <div class="sparkle__day16 s3__day16"></div>
      </div>
    </div>
  );
}

export default Day16;
