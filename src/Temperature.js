import React, { useState } from "react";
import "./styles.css";

const Temperature = (props) => {
  const [temp, setTemp] = useState("");
  const [inputValue, setValue] = useState("");
  let city = inputValue;

  const handleClick = () => {
    console.log("dbjd");
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=d177a77aaeebaa40956b9a1b547d4002"
    )
      .then((response) => response.json())
      .then((data) => {
        setTemp(data.main);
      });
  };

  return (
    <div className=" temp-card">
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/146/146174.svg"
        height="120px"
        width="100px"
        alt="sun"
      />
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/414/414927.svg"
        height="120px"
        width="100px"
        alt="cloud"
      />
      <h1 className="mb-5">Get Current Temperature</h1>

      <div className="d-flex input_area mb-11">
        <input
          id="temp_input"
          className="mb-5 "
          value={inputValue}
          type="text"
          placeholder="Enter any City"
          onChange={(e) => setValue(e.target.value)}
        />

        <button className="btn mb-5" onClick={() => handleClick()}>
          Search
        </button>
      </div>
      <h1>
        {inputValue} is {temp.temp} *C
      </h1>
    </div>
  );
};
export default Temperature;
