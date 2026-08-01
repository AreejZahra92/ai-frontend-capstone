import React from "react";

export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white border border-brand-peach-dark/30 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
