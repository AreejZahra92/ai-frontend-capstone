import React from "react";

export default function PageHeader({ title, description, className = "" }) {
  return (
    <div className={`mb-8 space-y-2 pb-6 border-b border-brand-blue-dark/20 ${className}`}>
      <h1 className="text-3xl font-bold tracking-tight text-brand-blue-dark sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
