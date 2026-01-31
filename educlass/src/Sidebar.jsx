import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/educlass.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <span
        className="sidebar-icon"
        onClick={() => navigate("/")} // navigate to default page
        style={{ cursor: "pointer" }}
      >
        <i className="fa-solid fa-house"></i> Home
      </span>

      <span className="sidebar-icon">
        <i className="fa-solid fa-calendar"></i> Calendar
      </span>

      <span className="sidebar-icon">
        <i className="fa-solid fa-chalkboard"></i> Teaching
      </span>

      <span className="sidebar-icon">
        <i className="fa-solid fa-folder"></i> To Review
      </span>

      <span className="sidebar-icon">
        <i className="fa-solid fa-box-archive"></i> Archived classes
      </span>

      <span className="sidebar-icon">
        <i className="fa-solid fa-gear"></i> Settings
      </span>
    </div>
  );
};

export default Sidebar;
