import React from "react";
import "./css/educlass.css";
import card_bg from "./assets/card-bg.jpg";

const Card = ({ prop }) => {
  console.log(prop);
  return (
    <div onClick={prop}>
      <div className="card card-link">
        <div
          className="card-header"
          style={{ backgroundImage: `url(${card_bg})` }}
        >
          <h2>React Q</h2>
        </div>

        <div className="card-content"></div>

        <div className="card-footer">
          <span className="icon">
            <i className="fa-solid fa-address-card"></i>
          </span>
          <span className="icon">
            <i className="fa-solid fa-folder"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
