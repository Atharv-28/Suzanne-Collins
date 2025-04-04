import React from "react";
import "../Styles/scrollbooks.css";

const ScrollBooks = () => {
  return (
    <div className="home_content_scroll_container">
      <div className="home_book">
        <div className="home_book_imgContainer">
          <h4>SUNRISE ON THE REAPING</h4>
          <img
            className="home_book_img"
            src="https://www.suzannecollinsbooks.com/images/Sunrise-on-the-Reaping-cover-large--1-.jpg"
            alt="Sunrise on the Reaping"
          />
          <p>#1 TRENDING IN USA</p>
        </div>
        <div className="home_book_desc">
          <p>
            Sunrise on the Reaping revisits the world of Panem twenty-four years
            before the events of The Hunger Games, starting on the morning of
            the reaping of the Fiftieth Hunger Games, also known as the Second
            Quarter Quell. (Scholastic Press, 2025)
          </p>
          <p>
            "With Sunrise on the Reaping, I was inspired by David Hume's idea of
            implicit submission and, in his words, 'the easiness with which the
            many are governed by the few.' The story also lent itself to a
            deeper dive into the use of propaganda and the power of those who
            control the narrative. The question 'Real or not real?' seems more
            pressing to me every day."--S.C.
          </p>
        </div>
      </div>

      <div className="home_book">
        <div className="home_book_imgContainer">
          <h4>The Deluxe Hunger Games Collection!</h4>

          <img
            className="home_book_img"
            src="https://www.suzannecollinsbooks.com/images/Deluxe-Boxed-Set-3.jpg"
            alt="Sunrise on the Reaping"
          />
          <p>Now Available</p>
        </div>
        <div className="home_book_desc">
          <p>
            "A Propulsive, Brutal 'Hunger Games' Is Here. And It's
            Great...Collins paints a shrewd portrait of the machinery of
            propaganda and how authoritarism takes root.''--The New York Times
          </p>
          <p>
            "...it's as if Collins is asking us to reflect on how much we really
            know of our history, and how much power we have in ensuring that our
            current truths have a place in the future."--NPR "It's a life-giving
            book, no matter what you think of the world we're living in now.
            Because it reminds us that unity is worth something. In some cases,
            it's worth everything."--People
          </p>
        </div>
      </div>

      <div className="home_book">
        <div className="home_book_imgContainer">
          <h4>Catching Fire Illustrated Edition</h4>

          <img
            className="home_book_img"
            src="https://www.suzannecollinsbooks.com/images/Catching-Fire-Illustrated-Cover.jpg"
            alt="Sunrise on the Reaping"
          />

          <p>Now Available</p>
        </div>
        <div className="home_book_desc">
          <p>
            "...the star of this edition is Delort, whose scratchboard art
            deftly imagines memorable scenes throughout the story while avoiding
            influences from the film series...Vivid and well worth a look from
            new and returning fans alike."--Kirkus Reviews,
          </p>
          <p>
            "Certain illustrations made an indelible impression on me growing
            up, and the images are forever linked to books I love, including
            John Tenniel's classic drawings for Alice's Adventures in Wonderland
            and Fritz Eichenberg's wood engravings for Wuthering Heights. I'm
            thrilled with Nico Delort's striking black-and-white scratchboard
            artwork for The Hunger Games and feel it will have the same lasting
            influence on a new generation of Panem readers."--S.C.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollBooks;
