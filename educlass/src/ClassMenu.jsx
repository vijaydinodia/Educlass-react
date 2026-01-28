import React, { useState } from "react";
import "./css/ClassMenu.css";

const ClassMenu = ({ onTurnOff }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleTurnOff = () => {
    onTurnOff();
    setIsOpen(false);
  };

  return (
    <div className="menu-container">
      <button
        className="menu-trigger"
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        <i
          className="fa-solid fa-ellipsis-vertical"
          style={{ fontSize: "16px" }}
        ></i>
      </button>

      {isOpen && (
        <div className="menu-dropdown">
          <button className="menu-item" onClick={handleTurnOff}>
            Turn off
          </button>
        </div>
      )}
    </div>
  );
};

export default ClassMenu;
