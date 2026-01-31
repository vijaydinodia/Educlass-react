import React, { useState, useEffect } from "react";
import "./css/class.css";
import ClassMenu from "./ClassMenu";
import { useNavigate, Link } from "react-router-dom";

const Class = () => {
  const [isClassCodeVisible, setIsClassCodeVisible] = useState(true);
  const navigate = useNavigate();

  const classCode = "u3enjwgk";

  // Load the user's preference from localStorage on mount
  useEffect(() => {
    const storedValue = localStorage.getItem("classCodeOn");
    if (storedValue !== null) {
      setIsClassCodeVisible(storedValue === "true");
    }
  }, []);

  // Hide the class code and save preference
  const hideClassCode = () => {
    setIsClassCodeVisible(false);
    localStorage.setItem("classCodeOn", false);
  };

  // Navigate to settings page
  const openSettings = () => navigate("/setting");

  return (
    <div className="class-container">
      <div className="class-nav">
        <div className="class-left">
          <span className="active">Stream</span>
          <span>Classwork</span>
          <span>People</span>
          <span>Marks</span>
        </div>
        <div className="class-right">
          <button
            className="icon-btn"
            onClick={openSettings}
            aria-label="Settings"
          >
            <i className="fa-solid fa-gear"></i>
          </button>
        </div>
      </div>

      <hr />

      <div className="class-banner">
        <h2>React Q</h2>
        <button className="customise-btn">
          <i className="fa-solid fa-pen"></i> Customise
        </button>
      </div>

      <div className="class-main">
        <aside className="class-sidebar">
          <div className="sidebar-card">
            <div className="class-sidebar-nav">
              <div className="class-sidebar-left">
                <h4>Class code</h4>
              </div>
              <div className="class-sidebar-right">
                {isClassCodeVisible && <ClassMenu onTurnOff={hideClassCode} />}
              </div>
            </div>

            <p className={isClassCodeVisible ? "code" : "muted"}>
              {isClassCodeVisible ? classCode : "Class code is turned off"}
            </p>
          </div>

          <div className="sidebar-card">
            <h4>Upcoming</h4>
            <p className="muted">No work due soon</p>
            <Link to="/upcoming">View all</Link>
          </div>
        </aside>

        <section className="class-stream">
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
              Use the stream to share announcements, post assignments, and
              respond to student questions.
            </p>
            <button className="settings-btn" onClick={openSettings}>
              <i className="fa-solid fa-gear"></i> Stream settings
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Class;
