import React, { useState } from "react";
import "./css/ClassMenu.css";

const ClassMenu = ({ onTurnOff }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/closed
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Handle clicking "Turn off"
  const handleTurnOff = () => {
    onTurnOff();
    setIsOpen(false);
  };

  return (
    <div className="menu-container">
      {/* Menu trigger button */}
      <button
        className="menu-trigger"
        onClick={toggleMenu}
        aria-label="Open class menu"
      >
        <i
          className="fa-solid fa-ellipsis-vertical"
          style={{ fontSize: "16px" }}
        ></i>
      </button>

      {/* Dropdown menu */}
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
