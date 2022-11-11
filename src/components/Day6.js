import React from "react";

function Day6() {
  return (
    <div class="frame__day6">
      <div class="center__day6">
        <div class="profile__day6">
          <div class="image__day6">
            <div class="circle-1__day6"></div>
            <div class="circle-2__day6"></div>
            <img
              src="./day6.jpg"
              alt="Matt Urbeck"
              width="70"
              height="70"
            ></img>
          </div>
          <div class="name__day6">Matt Urbeck</div>
          <div class="job__day6">Engineer</div>
          <div class="actions__day6">
            <button class="btn__day6">Follow</button>
            <button class="btn__day6">Message</button>
          </div>
        </div>
        <div class="stats__day6">
          <div class="box__day6">
            <span class="value__day6">523</span>
            <span class="parameter__day6">Posts</span>
          </div>
          <div class="box__day6">
            <span class="value__day6">1387</span>
            <span class="parameter__day6">Likes</span>
          </div>
          <div class="box__day6">
            <span class="value__day6">146</span>
            <span class="parameter__day6">Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day6;
