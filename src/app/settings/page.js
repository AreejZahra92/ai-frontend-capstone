import React from "react";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import SettingsForm from "@/components/SettingsForm";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto w-full">
      <PageHeader
        title="Settings"
        description="Configure your security preferences, update your credentials, and choose how you get notified."
      />
      <Card>
        <SettingsForm />
      </Card>
    </div>
  );
}
