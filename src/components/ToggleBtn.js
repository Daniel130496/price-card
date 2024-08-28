import React from "react";
import "./css/ToggleBtn.css";

const ToggleBtn = ({ onToggle, isMonthly }) => {
  return (
    <div className="toggle-wrapper">
      <div className="toggle-switch">
        <input
          className="toggle-input"
          id="toggle"
          type="checkbox"
          onChange={onToggle}
        />
        <label className="toggle-label" htmlFor="toggle"></label>
      </div>
      <div className="toggle-texts">
        <p>{isMonthly ? "Monthly Plan" : "Yearly Plan"}</p>
      </div>
    </div>
  );
};

export default ToggleBtn;
