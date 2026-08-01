"use client";

import React, { useState } from "react";

export const DEFAULT_SETTINGS = {
  fullName: "",
  email: "",
  password: "",
  receiveNotifications: true,
};

const Input = ({ label, type, name, value, onChange, onBlur, error, placeholder, required, autoComplete }) => (
  <div className="space-y-1.5">
    <label htmlFor={name} className="block text-sm font-semibold text-slate-750">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      className={`block w-full rounded-xl border px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/20 bg-white text-slate-900 ${
        error
          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
          : "border-slate-300 focus:border-brand-blue"
      }`}
    />
    {error && <p className="text-xs font-semibold text-red-500 mt-1">{error}</p>}
  </div>
);

const Toggle = ({ label, description, name, checked, onChange }) => (
  <label className="flex items-start justify-between py-3 cursor-pointer">
    <div className="flex flex-col pr-4">
      <span className="text-sm font-semibold text-slate-750">{label}</span>
      <span className="text-xs sm:text-sm text-slate-500">{description}</span>
    </div>
    <div className="relative flex items-center mt-1">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-blue"></div>
    </div>
  </label>
);

const Button = ({ children, type = "button", variant = "primary", isLoading = false, disabled = false, onClick, className = "", ...props }) => {
  const baseStyle = "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-brand-blue hover:bg-brand-blue-hover text-white shadow-sm hover:shadow focus:ring-brand-blue disabled:bg-brand-blue/50 disabled:text-slate-200",
    secondary: "border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 focus:ring-brand-blue disabled:opacity-50"
  };
  
  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  );
};

export default function SettingsForm({
  initialValues = {},
  onSubmit,
  onCancel,
  submitLabel = "Save Changes",
}) {
  const [values, setValues] = useState({
    ...DEFAULT_SETTINGS,
    ...initialValues,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  // Client-side validation helper
  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) {
          return "Full name is required.";
        }
        return "";
      case "email":
        if (!value.trim()) {
          return "Email address is required.";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) {
          return "Please enter a valid email address.";
        }
        return "";
      case "password":
        if (!value.trim()) {
          return "Password is required.";
        }
        if (value.length < 8) {
          return "Password must be at least 8 characters.";
        }
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    
    // Clear error on change if it exists
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setValues((prev) => ({ ...prev, [name]: checked }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(DEFAULT_SETTINGS).forEach((key) => {
      if (key !== "receiveNotifications") {
        const errorMsg = validateField(key, values[key]);
        if (errorMsg) {
          newErrors[key] = errorMsg;
        }
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      // Auto-focus the first invalid field for accessibility
      const firstInvalidField = Object.keys(newErrors)[0];
      const element = document.getElementsByName(firstInvalidField)[0];
      if (element) {
        element.focus();
      }
      return;
    }

    setStatus("submitting");

    try {
      if (onSubmit) {
        await onSubmit(values);
      } else {
        // Mock API call latency
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
      setStatus("success");
      
      // Clear password field after successful save for security
      setValues((prev) => ({ ...prev, password: "" }));
      
      // Auto-hide success message after 4 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    }
  };

  const handleCancel = () => {
    setValues({
      ...DEFAULT_SETTINGS,
      ...initialValues,
    });
    setErrors({});
    setStatus("idle");
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div>
        <h2 className="text-xl font-bold text-slate-800">Account Settings</h2>
        <p className="text-sm text-slate-500 mt-1">
          Manage your profile details and notification preferences.
        </p>
      </div>

      <div className="border-t border-slate-200 pt-6">
        <fieldset className="space-y-4" disabled={status === "submitting"}>
          <legend className="text-base font-semibold text-slate-800 mb-2">Personal Details</legend>
          
          <Input
            label="Full Name"
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.fullName}
            placeholder="e.g. Jane Doe"
            required
            autoComplete="name"
          />

          <Input
            label="Email Address"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            placeholder="e.g. jane.doe@example.com"
            required
            autoComplete="email"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            placeholder="Min. 8 characters"
            required
            autoComplete="current-password"
          />
        </fieldset>
      </div>

      <div className="border-t border-slate-200 pt-6">
        <fieldset className="space-y-2" disabled={status === "submitting"}>
          <legend className="text-base font-semibold text-slate-800 mb-1">Preferences</legend>
          
          <Toggle
            label="Email Notifications"
            description="Receive security updates, alerts, and weekly digests."
            name="receiveNotifications"
            checked={values.receiveNotifications}
            onChange={handleToggleChange}
          />
        </fieldset>
      </div>

      {status === "success" && (
        <div className="flex items-center space-x-2 rounded-xl bg-emerald-50 border border-emerald-250 p-4 text-emerald-800" role="status">
          <svg className="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span className="text-sm font-semibold">Settings saved successfully.</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center space-x-2 rounded-xl bg-rose-50 border border-rose-250 p-4 text-rose-800" role="alert">
          <svg className="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span className="text-sm font-semibold">Failed to save settings. Please try again.</span>
        </div>
      )}

      <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-200">
        <Button
          type="button"
          variant="secondary"
          onClick={handleCancel}
          disabled={status === "submitting"}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          isLoading={status === "submitting"}
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
