import React from "react";
import Image from "next/image";

export default function Navbar() {
  const date = new Date();

  const day = () => {
    let d;
    switch (date.getDay()) {
      case 0:
        d = "Sunday";
        break;
      case 1:
        d = "Monday";
        break;
      case 2:
        d = "Tuesday";
        break;
      case 3:
        d = "Wednesday";
        break;
      case 4:
        d = "Thursday";
        break;
      case 5:
        d = "Friday";
        break;
      case 6:
        d = "Saturday";
    }
    return d;
  };
  const month = () => {
    let m;
    switch (date.getMonth() + 1) {
      case 0:
        m = "January";
        break;
      case 1:
        m = "February";
        break;
      case 2:
        m = "Tuesday";
        break;
      case 3:
        m = "Wednesday";
        break;
      case 4:
        m = "Thursday";
        break;
      case 5:
        m = "Friday";
        break;
      case 6:
        m = "Saturday";
      case 7:
        m = "January";
        break;
      case 8:
        m = "February";
        break;
      case 9:
        m = "Tuesday";
        break;
      case 10:
        m = "Wednesday";
        break;
      case 11:
        m = "Thursday";
        break;
      case 12:
        m = "December";
        break;
    }
    return m;
  };
  return (
    <nav>
      <div className="nav-section">
        <div className="date">
          <div className="day">{day()}</div>
          <div>{`${month()} ${date.getDate()}, ${date.getFullYear()}`}</div>
        </div>
        <div className='logo'>
          <span className="logo-color-letters">Ne</span>vie
          <span className="logo-color-letters">ws</span>
        </div>
        <div className="searchbar-container">
          <Image
            src={"/icons/search_white_18dp.svg"}
            alt="Search icon"
            width={18}
            height={18}
            className="searchbar-icon"
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <input
            type={"text"}
            placeholder="Search titles, topics or anything"
          />
        </div>
      </div>
      <ul className="nav-section categories">
        <li className="category selected-category">Books</li>
        <li className="category">Science</li>
        <li className="category">Business</li>
        <li className="category">Tech</li>
        <li className="category">Health</li>
        <li className="category">Sports</li>
        <li className="category">World</li>
        <li className="category">Politics</li>
        <li className="category">Food</li>
        <li className="category">Travel</li>
        <li className="category">Art</li>
        <li className="category">Style</li>
        <li className="category">Food</li>
      </ul>
    </nav>
  );
}
