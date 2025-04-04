import React from "react";
import "../Styles/books.css";

const AudioBooks = () => {
  return (
    <div className="books">
      <h2>Audio Books</h2>
      <div className="books_container">
        <div className="book">
          <div className="book_img_cont">
            <img
              className="book_img"
              src="https://www.suzannecollinsbooks.com/images/Sunrise-on-the-Reaping-cover-large--1-.jpg"
            />
            <p>Coming March 18 this year!</p>
          </div>
          <div className="book_desc">
            <h4>SUNRISE ON THE REAPING</h4>
            <p>
            Jefferson White reads Sunrise on the Reaping! Check out his interview with CBS News
            </p>
          </div>
        </div>


        <div className="book">
          <div className="book_img_cont">
            <img
              className="book_img"
              src="https://www.suzannecollinsbooks.com/images/ballad-book-cover.jpg"
            />
            <p>Snow lands on top... or does he?</p>
          </div>
          <div className="book_desc">
            <h4>THE BALLAD OF SONGBIRDS AND SNAKES</h4>
            <p>
            Santino Fontana reads The Ballad of Songbirds and Snakes! Check out his interview with Entertainment Weekly            </p>
          </div>
        </div>



        </div>
    </div>
  );
};

export default AudioBooks;
