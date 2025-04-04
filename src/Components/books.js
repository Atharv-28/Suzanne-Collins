import React from "react";
import "../Styles/books.css";

const Books = () => {
  return (
    <div className="books">
      <h2>Books & Interviews</h2>
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
              As the day dawns on the fiftieth annual Hunger Games, fear grips
              the districts of Panem. This year, in honor of the Quarter Quell,
              twice as many tributes will be taken from their homes. Back in
              District 12, Haymitch Abernathy is trying not to think too hard
              about his chances. All he cares about is making it through the day
              and being with the girl he loves.
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
            It is the morning of the reaping that will kick off the tenth annual Hunger Games. In the Capitol, eighteen-year-old Coriolanus Snow is preparing for his one shot at glory as a mentor in the Games. The once-mighty house of Snow has fallen on hard times, its fate hanging on the slender chance that Coriolanus will be able to outcharm, outwit, and outmaneuver his fellow students to mentor the winning tribute. (Scholastic Press, 2020)
            </p>
          </div>
        </div>



        <div className="book">
          <div className="book_img_cont">
            <img
              className="book_img"
              src="https://www.suzannecollinsbooks.com/images/YOTJ_Cover.jpg"
            />
            <p>An autobiographical picture book!</p>
          </div>
          <div className="book_desc">
            <h4>YEAR OF THE JUNGLE</h4>
            <p>
            When Suzy's father is called to war in a faraway jungle, she struggles to deal with his absence. (Scholastic Press, 2013)
            </p>
          </div>
        </div>



        <div className="book">
          <div className="book_img_cont">
            <img
              className="book_img"
              src="https://www.suzannecollinsbooks.com/images/Mockingjaycover.jpg"
            />
            <p>The final installment!</p>
          </div>
          <div className="book_desc">
            <h4>MOCKINGJAY</h4>
            <p>
            Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. There are rebels. There are new leaders. A revolution is unfolding. (Scholastic Press, 2010) 
            </p>
          </div>
        </div>


        <div className="book">
          <div className="book_img_cont">
            <img
              className="book_img"
              src="https://www.suzannecollinsbooks.com/images/Catching_fire_c.jpg"
            />
            <p>Sparks will fly!</p>
          </div>
          <div className="book_desc">
            <h4>CATCHING FIRE</h4>
            <p>
            Much to her shock, Katniss has fueled an unrest she's afraid she cannot stop. And what scares her more is that she's not entirely convinced she should try. As time draws near for Katniss and Peeta to visit the districts on the Capitol's cruel Victory Tour, the stakes are higher than ever. If they can't prove, without a shadow of a doubt, that they are lost in their love for each other, the consequences will be horrifying. (Scholastic Press, 2009)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
