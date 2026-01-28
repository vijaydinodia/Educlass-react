import React, { useState } from "react";
import "./css/setting.css";

const Settings = () => {
  // State to track if class code is on or off
  const [classCodeOn, setClassCodeOn] = useState(true);

  // Handler for dropdown change
  const handleChange = (event) => {
    if (event.target.value === "on") {
      setClassCodeOn(true);
    } else {
      setClassCodeOn(false);
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-card">
        <h1>General</h1>

        <section>
          <h2>Invitation codes</h2>

          <div className="row">
            <div>
              <strong>Manage invitation codes</strong>
              <p className="muted">
                Settings apply to both invitation links and class codes
              </p>
            </div>

            <div className="status">
              <select
                value={classCodeOn ? "on" : "off"}
                onChange={handleChange}
              >
                <option value="on">Turn On</option>
                <option value="off">Turn Off</option>
              </select>
            </div>
          </div>

          <div className="row">
            <span className="label">Invitation link</span>
            <span className="value">
              https://classroom.google.com/c/ODI0MjMxOTU2MDE0?cjc=u3enjwgk
            </span>
          </div>

          <div className="row">
            <span className="label">Class code</span>
            <span className="value">{classCodeOn ? "u3enjwgk" : "******"}</span>
          </div>

          <div className="row">
            <span className="label">Class view</span>
            <a href="#" className="link">
              Display class code
            </a>
          </div>
        </section>

        <hr />

        <section>
          <h2>Stream and classwork</h2>

          <div className="row">
            <span className="label">Stream</span>
            <div className="dropdown">
              Students can post and comment
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>

          <div className="row">
            <span className="label">Classwork on the stream</span>
            <div className="dropdown">
              Show condensed notifications
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>

          <div className="row">
            <div>
              <span className="label">Show deleted items</span>
              <p className="muted">Only teachers can view deleted items.</p>
            </div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
