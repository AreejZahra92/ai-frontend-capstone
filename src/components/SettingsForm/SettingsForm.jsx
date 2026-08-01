import React, { useState } from "react";
import Input from "../common/Input/Input";
import Toggle from "../common/Toggle/Toggle";
import Button from "../common/Button/Button";
import "./SettingsForm.css";

export const DEFAULT_SETTINGS = {
  fullName: "",
  email: "",
  password: "",
  receiveNotifications: true,
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
    <form className="settings-form" onSubmit={handleSubmit} noValidate>
      <div className="settings-form-header">
        <h1 className="settings-form-title">Account Settings</h1>
        <p className="settings-form-subtitle">
          Manage your profile details and notification preferences.
        </p>
      </div>

      <fieldset className="settings-form-section" disabled={status === "submitting"}>
        <legend className="settings-form-legend">Personal Details</legend>
        
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

      <fieldset className="settings-form-section" disabled={status === "submitting"}>
        <legend className="settings-form-legend">Preferences</legend>
        
        <Toggle
          label="Email Notifications"
          description="Receive security updates, alerts, and weekly digests."
          name="receiveNotifications"
          checked={values.receiveNotifications}
          onChange={handleToggleChange}
        />
      </fieldset>

      {status === "success" && (
        <div className="settings-feedback settings-feedback--success" role="status">
          <svg className="settings-feedback-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Settings saved successfully.</span>
        </div>
      )}

      {status === "error" && (
        <div className="settings-feedback settings-feedback--error" role="alert">
          <svg className="settings-feedback-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>Failed to save settings. Please try again.</span>
        </div>
      )}

      <div className="settings-form-actions">
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
