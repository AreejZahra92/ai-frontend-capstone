import React from "react";
import "./Toggle.css";

export default function Toggle({
  label,
  description,
  name,
  checked,
  onChange,
  id,
  disabled = false,
  ...props
}) {
  const toggleId = id || `toggle-${name}`;

  return (
    <div className={`toggle-container ${disabled ? "toggle-container--disabled" : ""}`}>
      <div className="toggle-info">
        {label && (
          <label htmlFor={toggleId} className="toggle-label">
            {label}
          </label>
        )}
        {description && <p className="toggle-description">{description}</p>}
      </div>

      <div className="toggle-wrapper">
        <input
          id={toggleId}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          className="toggle-checkbox"
          {...props}
        />
        <span className="toggle-track" aria-hidden="true">
          <span className="toggle-thumb" />
        </span>
      </div>
    </div>
  );
}
