import React from "react";
import "./css/educlass.css";
import cardBg from "./assets/card-bg.jpg";

const Card = ({ onClick, title = "React Q" }) => {
  return (
    <div className="card-wrapper" onClick={onClick}>
      <div className="card card-link">
    
        <div
          className="card-header"
          style={{ backgroundImage: `url(${cardBg})`  }}
        >
          <h2>{title}</h2>
        </div>

       
        <div className="card-content"></div>

        {/* Card footer with icons */}
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
