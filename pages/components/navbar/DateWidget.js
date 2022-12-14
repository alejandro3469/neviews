import React from "react";

export default function DateWidget() {
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
    <div className="date">
      {<div className="day">{day()}</div>}
      <div>{`${month()} ${date.getDate()}, ${date.getFullYear()}`}</div>
    </div>
  );
}
