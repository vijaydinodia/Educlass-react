import React, { useState, useEffect } from "react";
import "./css/setting.css";

const Settings = () => {
  const [isClassCodeVisible, setIsClassCodeVisible] = useState(true);

  const classCode = "u3enjwgk";
  const inviteLink =
    "https://classroom.google.com/c/ODI0MjMxOTU2MDE0?cjc=u3enjwgk";

  // Load the user's preference from localStorage on mount
  useEffect(() => {
    const storedValue = localStorage.getItem("classCodeOn");
    if (storedValue !== null) {
      setIsClassCodeVisible(storedValue === "true");
    }
  }, []);

  // Toggle class code visibility and save to localStorage
  const handleToggle = (e) => {
    const showCode = e.target.value === "on";
    setIsClassCodeVisible(showCode);
    localStorage.setItem("classCodeOn", showCode);
  };

  return (
    <div className="settings-page">
      <div className="settings-card">
        <h1>General Settings</h1>

        <section>
          <h2>Invitation Codes</h2>

          <div className="row">
            <div>
              <strong>Manage invitation codes</strong>
              <p className="muted">
                These settings apply to both invitation links and class codes.
              </p>
            </div>

            <div className="status">
              <select
                value={isClassCodeVisible ? "on" : "off"}
                onChange={handleToggle}
              >
                <option value="on">Turn On</option>
                <option value="off">Turn Off</option>
              </select>
            </div>
          </div>

          <div className="row">
            <span className="label">Invitation Link</span>
            <span className="value">{inviteLink}</span>
          </div>

          <div className="row">
            <span className="label">Class Code</span>
            <span className="value">
              {isClassCodeVisible ? classCode : "******"}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
