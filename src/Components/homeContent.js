import React from "react";
import "../Styles/homeContent.css";
import ScrollBooks from "./scrollBooks";

const HomeContent = () => {
  return (
    <div className="home_content">
      <div className="intro_home">
        <div className="intro_home_left">
          <div className="intro_home_left_imgContainer">
            <img
              className="intro_left_img"
              src="https://www.suzannecollinsbooks.com/images/central-park-ii-small.jpg"
            />
          </div>
          <p>FLY YOU HIGH!</p>
        </div>
        <div className="intro_home_right">
          <h2>WELCOME</h2>
          <p>
            Hi! Thanks for visiting my website. Here’s a picture of me with a
            rat in Central Park. If you’ve read my fantasy series, The Underland
            Chronicles, you will have a clue as to why I chose this photo. If
            not, and you'd like to learn more, please explore my site.
          </p>
        </div>
      </div>
      <div className="home_content_scroll">
        <h3>Trending Books ...</h3>
        <ScrollBooks />
      </div>
      <div className="selected_works"></div>
    </div>
  );
};

export default HomeContent;
