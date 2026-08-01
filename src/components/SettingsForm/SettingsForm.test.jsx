import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SettingsForm, { DEFAULT_SETTINGS } from "./SettingsForm";

describe("SettingsForm Component", () => {
  let mockOnSubmit;
  let mockOnCancel;

  beforeEach(() => {
    mockOnSubmit = vi.fn().mockImplementation(() => Promise.resolve());
    mockOnCancel = vi.fn();
  });

  it("renders all form elements with initial values", () => {
    const initialValues = {
      fullName: "John Doe",
      email: "john.doe@example.com",
      receiveNotifications: false,
    };

    render(
      <SettingsForm
        initialValues={initialValues}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    expect(screen.getByLabelText(/full name/i)).toHaveValue("John Doe");
    expect(screen.getByLabelText(/email address/i)).toHaveValue("john.doe@example.com");
    expect(screen.getByLabelText(/^password\s*\*?$/i)).toHaveValue("");
    expect(screen.getByRole("switch", { name: /email notifications/i })).not.toBeChecked();
  });

  it("validates fields and displays errors on blur", async () => {
    render(
      <SettingsForm
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/^password\s*\*?$/i);

    // Trigger blur on empty name field
    fireEvent.focus(nameInput);
    fireEvent.blur(nameInput);
    expect(screen.getByText("Full name is required.")).toBeInTheDocument();

    // Trigger blur on empty email field
    fireEvent.focus(emailInput);
    fireEvent.blur(emailInput);
    expect(screen.getByText("Email address is required.")).toBeInTheDocument();

    // Fill invalid email and blur
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.blur(emailInput);
    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();

    // Trigger blur on empty password field
    fireEvent.focus(passwordInput);
    fireEvent.blur(passwordInput);
    expect(screen.getByText("Password is required.")).toBeInTheDocument();

    // Fill short password and blur
    fireEvent.change(passwordInput, { target: { value: "short" } });
    fireEvent.blur(passwordInput);
    expect(screen.getByText("Password must be at least 8 characters.")).toBeInTheDocument();
  });

  it("validates fields on submit and prevents submission if invalid", async () => {
    render(
      <SettingsForm
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    const submitButton = screen.getByRole("button", { name: /save changes/i });
    fireEvent.click(submitButton);

    expect(screen.getByText("Full name is required.")).toBeInTheDocument();
    expect(screen.getByText("Email address is required.")).toBeInTheDocument();
    expect(screen.getByText("Password is required.")).toBeInTheDocument();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("toggles password visibility field type", () => {
    render(
      <SettingsForm
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    const passwordInput = screen.getByLabelText(/^password\s*\*?$/i);
    const toggleButton = screen.getByRole("button", { name: /show password/i });

    expect(passwordInput).toHaveAttribute("type", "password");

    // Click show password
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");
    expect(screen.getByRole("button", { name: /hide password/i })).toBeInTheDocument();

    // Click hide password
    const hideButton = screen.getByRole("button", { name: /hide password/i });
    fireEvent.click(hideButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("submits the form data when valid", async () => {
    render(
      <SettingsForm
        initialValues={{ fullName: "Alice Smith", email: "alice@example.com" }}
        onSubmit={mockOnSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/^password\s*\*?$/i), {
      target: { value: "securepassword123" },
    });

    const submitButton = screen.getByRole("button", { name: /save changes/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        fullName: "Alice Smith",
        email: "alice@example.com",
        password: "securepassword123",
        receiveNotifications: true,
      });
    });

    // Check for success banner
    expect(screen.getByText("Settings saved successfully.")).toBeInTheDocument();
    // Password input should clear after submission for security
    expect(screen.getByLabelText(/^password\s*\*?$/i)).toHaveValue("");
  });

  it("resets fields to initial values on Cancel", () => {
    const initialValues = {
      fullName: "Jane Doe",
      email: "jane.doe@example.com",
      receiveNotifications: true,
    };

    render(
      <SettingsForm
        initialValues={initialValues}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    const nameInput = screen.getByLabelText(/full name/i);
    const toggle = screen.getByRole("switch", { name: /email notifications/i });

    // Modify values
    fireEvent.change(nameInput, { target: { value: "Jane Smith" } });
    fireEvent.click(toggle);

    expect(nameInput).toHaveValue("Jane Smith");
    expect(toggle).not.toBeChecked();

    // Click cancel
    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(cancelButton);

    expect(nameInput).toHaveValue("Jane Doe");
    expect(toggle).toBeChecked();
    expect(mockOnCancel).toHaveBeenCalled();
  });
});
