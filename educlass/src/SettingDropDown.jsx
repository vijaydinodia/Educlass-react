import React, { useState } from "react";
import "./css/settingDropdown.css";
import Class from "./Class";

const SettingDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTurnedOn, setIsTurnedOn] = useState(true);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleTurnOn = () => {
    setIsTurnedOn(true);
    setIsOpen(false);
    let found = true;
    <Class prop={found} />;
  };

  const handleTurnOff = () => {
    setIsTurnedOn(false);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-label" onClick={toggleDropdown}>
        {isTurnedOn ? "Turned on" : "Turned off"}{" "}
        <i className="fa-solid fa-caret-down"></i>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {!isTurnedOn && (
            <button onClick={handleTurnOn} className="dropdown-item">
              Turn on
            </button>
          )}
          {isTurnedOn && (
            <button onClick={handleTurnOff} className="dropdown-item">
              Turn off
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SettingDropdown;
