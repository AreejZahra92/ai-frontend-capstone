import { useState } from "react";
import "./SettingsForm.css";

export const DEFAULT_SETTINGS = {
  displayName: "",
  email: "",
  theme: "system",
  language: "en",
  emailNotifications: true,
  productUpdates: false,
};

const THEME_OPTIONS = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
];

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function SettingsForm({
  initialValues = DEFAULT_SETTINGS,
  onSubmit,
  onCancel,
  submitLabel = "Save changes",
}) {
  const [values, setValues] = useState({ ...DEFAULT_SETTINGS, ...initialValues });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function updateField(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function validate(formValues) {
    const nextErrors = {};

    if (!formValues.displayName.trim()) {
      nextErrors.displayName = "Display name is required.";
    }

    if (!formValues.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!isValidEmail(formValues.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("submitting");

    try {
      if (onSubmit) {
        await onSubmit(values);
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleReset() {
    setValues({ ...DEFAULT_SETTINGS, ...initialValues });
    setErrors({});
    setStatus("idle");
    onCancel?.();
  }

  return (
    <form
      className="settings-form"
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="settings-form-title"
    >
      <header className="settings-form__header">
        <h2 id="settings-form-title" className="settings-form__title">
          Settings
        </h2>
        <p className="settings-form__subtitle">
          Update your profile and preferences.
        </p>
      </header>

      <fieldset className="settings-form__section">
        <legend className="settings-form__legend">Profile</legend>

        <div className="settings-form__field">
          <label className="settings-form__label" htmlFor="settings-display-name">
            Display name
          </label>
          <input
            id="settings-display-name"
            className="settings-form__input"
            type="text"
            name="displayName"
            value={values.displayName}
            onChange={(event) => updateField("displayName", event.target.value)}
            autoComplete="name"
            aria-invalid={Boolean(errors.displayName)}
            aria-describedby={
              errors.displayName ? "settings-display-name-error" : undefined
            }
          />
          {errors.displayName ? (
            <p
              id="settings-display-name-error"
              className="settings-form__error"
              role="alert"
            >
              {errors.displayName}
            </p>
          ) : null}
        </div>

        <div className="settings-form__field">
          <label className="settings-form__label" htmlFor="settings-email">
            Email
          </label>
          <input
            id="settings-email"
            className="settings-form__input"
            type="email"
            name="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "settings-email-error" : undefined}
          />
          {errors.email ? (
            <p id="settings-email-error" className="settings-form__error" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>
      </fieldset>

      <fieldset className="settings-form__section">
        <legend className="settings-form__legend">Preferences</legend>

        <div className="settings-form__field">
          <label className="settings-form__label" htmlFor="settings-theme">
            Theme
          </label>
          <select
            id="settings-theme"
            className="settings-form__select"
            name="theme"
            value={values.theme}
            onChange={(event) => updateField("theme", event.target.value)}
          >
            {THEME_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="settings-form__field">
          <label className="settings-form__label" htmlFor="settings-language">
            Language
          </label>
          <select
            id="settings-language"
            className="settings-form__select"
            name="language"
            value={values.language}
            onChange={(event) => updateField("language", event.target.value)}
          >
            {LANGUAGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <fieldset className="settings-form__section">
        <legend className="settings-form__legend">Notifications</legend>

        <label className="settings-form__checkbox">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={values.emailNotifications}
            onChange={(event) =>
              updateField("emailNotifications", event.target.checked)
            }
          />
          <span>Email me about account activity</span>
        </label>

        <label className="settings-form__checkbox">
          <input
            type="checkbox"
            name="productUpdates"
            checked={values.productUpdates}
            onChange={(event) => updateField("productUpdates", event.target.checked)}
          />
          <span>Send product updates and tips</span>
        </label>
      </fieldset>

      {status === "success" ? (
        <p className="settings-form__feedback settings-form__feedback--success" role="status">
          Settings saved successfully.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="settings-form__feedback settings-form__feedback--error" role="alert">
          Something went wrong. Please try again.
        </p>
      ) : null}

      <div className="settings-form__actions">
        {onCancel ? (
          <button
            type="button"
            className="settings-form__button settings-form__button--secondary"
            onClick={handleReset}
            disabled={status === "submitting"}
          >
            Cancel
          </button>
        ) : null}
        <button
          type="submit"
          className="settings-form__button settings-form__button--primary"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Saving…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
