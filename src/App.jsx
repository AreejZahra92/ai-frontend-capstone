import React from "react";
import Card from "./components/common/Card/Card";
import SettingsForm, { DEFAULT_SETTINGS } from "./components/SettingsForm";

export default function App() {
  const handleSave = async (values) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Settings saved successfully:", values);
  };

  const handleCancel = () => {
    console.log("Settings reset to original values.");
  };

  // Mock initial values for profile settings
  const initialValues = {
    fullName: "Areej Zahra",
    email: "areej.zahra@example.com",
    receiveNotifications: true,
  };

  return (
    <main className="app">
      <Card>
        <SettingsForm
          initialValues={initialValues}
          onSubmit={handleSave}
          onCancel={handleCancel}
        />
      </Card>
    </main>
  );
}
