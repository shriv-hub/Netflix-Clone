import React from "react";

import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div>
      <header>
        <div class="banner">
          <div class="banner__contents">
            <h1 class="banner__title">The Monkey King</h1>
            <div class="banner__buttons">
              <button class="banner__button">Play</button>
              <button class="banner__button">My List</button>
            </div>
            <div class="banner__description">
              As king of the monkeys it is his duty to keep track of and protect
              every monkey. Sun Wukong also acquires the 72 Earthly
              Transformations, which allow him to access 72 unique powers...
            </div>
          </div>
          <div class="banner--fadebottom"></div>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;