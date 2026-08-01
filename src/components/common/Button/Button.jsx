import React from "react";
import "./Button.css";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  isLoading = false,
  disabled = false,
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} ${isLoading ? "btn--loading" : ""} ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading && (
        <span className="btn-spinner-wrapper" aria-hidden="true">
          <svg className="btn-spinner" viewBox="0 0 24 24" fill="none">
            <circle
              className="btn-spinner-track"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              strokeOpacity="0.25"
            />
            <path
              className="btn-spinner-thumb"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
      <span className="btn-content">{children}</span>
    </button>
  );
}
