import React from "react";
import "./css/educlass.css";
import educlass from "./assets/educlass.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-part">
        <span className="icon">
          <i className="fa-solid fa-bars"></i>
        </span>

        <div className="logo">
          <img src={educlass} alt="logo" />
        </div>

        <div className="educlass">EduClass</div>
      </div>

      <div className="right-part">
        <span className="icon">
          <i className="fa-solid fa-plus"></i>
        </span>

        <span className="icon" style={{ marginTop: "4px" }}>
          <img
            src="https://ssl.gstatic.com/gb/images/bar/al-icon.png"
            alt="apps"
          />
        </span>

        <span className="profile">
          <p>V</p>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
