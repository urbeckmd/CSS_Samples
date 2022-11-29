import React from "react";
import "./Day6.css";
import image from "./Day6.jpg";

function Day6() {
  return (
    <div className="frame__day6">
      <div className="center__day6">
        <div className="profile__day6">
          <div className="image__day6">
            <div className="circle-1__day6"></div>
            <div className="circle-2__day6"></div>
            <img
              className="img__day6"
              src={image}
              alt="Matt"
              width="70"
              height="70"
            ></img>
          </div>
          <div className="name__day6">Matt Urbeck</div>
          <div className="job__day6">Engineer</div>
          <div className="actions__day6">
            <button className="btn__day6">Follow</button>
            <button className="btn__day6">Message</button>
          </div>
        </div>
        <div className="stats__day6">
          <div className="box__day6">
            <span className="value__day6">523</span>
            <span className="parameter__day6">Posts</span>
          </div>
          <div className="box__day6">
            <span className="value__day6">1387</span>
            <span className="parameter__day6">Likes</span>
          </div>
          <div className="box__day6">
            <span className="value__day6">146</span>
            <span className="parameter__day6">Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day6;
