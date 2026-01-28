import React, { useState } from "react";
import "./css/class.css";
import ClassMenu from "./ClassMenu";
import Setting from "./Setting.jsx";
import { useNavigate } from "react-router-dom";

const Class = ({ prop }) => {
  const [showClassCode, setShowClassCode] = useState(true);
  const navigate = useNavigate();

  // Hide the class code when Turn Off is clicked
  const hideClassCode = () => setShowClassCode(false);
  console.log(prop);

  function settingOpen() {
    navigate("/setting");
  }

  return (
    <div className="class-container">
      {/* Navigation */}
      <div className="class-nav">
        <div className="class-left">
          <span className="active">Stream</span>
          <span>Classwork</span>
          <span>People</span>
          <span>Marks</span>
        </div>
        <div className="class-right">
          <button className="icon-btn">
            <i className="fa-solid fa-gear"></i>
          </button>
        </div>
      </div>

      <hr />

      {/* Class Banner */}
      <div className="class-banner">
        <h2>React Q</h2>
        <button className="customise-btn">
          <i className="fa-solid fa-pen"></i> Customise
        </button>
      </div>

      {/* Main Content */}
      <div className="class-main">
        {/* Sidebar */}
        <div className="class-sidebar">
          <div className="sidebar-card">
            <div className="class-sidebar-nav">
              <div className="class-sidebar-left">
                <h4>Class code</h4>
              </div>
              <div className="class-sidebar-right">
                {showClassCode && <ClassMenu onTurnOff={hideClassCode} />}
              </div>
            </div>
            {showClassCode && <p className="code">u3enjwgk</p>}
          </div>

          <div className="sidebar-card">
            <h4>Upcoming</h4>
            <p className="muted">No work due in soon</p>
            <a href="#">View all</a>
          </div>
        </div>

        {/* Stream Area */}
        <div className="class-stream">
          <div className="stream-actions">
            <button className="primary-btn">
              <i className="fa-solid fa-pen"></i> New announcement
            </button>
            <button className="link-btn">
              <i className="fa-solid fa-rotate"></i> Repost
            </button>
          </div>

          <div className="stream-info">
            <h3>This is where you can talk to your class</h3>
            <p>
              Use the stream to share announcements, post assignments and
              respond to student questions.
            </p>
            <button className="settings-btn">
              <i className="fa-solid fa-gear"> 
                </i> Stream settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;