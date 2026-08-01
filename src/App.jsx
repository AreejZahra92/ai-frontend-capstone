import SettingsForm, { DEFAULT_SETTINGS } from "./components/SettingsForm";

export default function App() {
  return (
    <main className="app">
      <SettingsForm
        initialValues={{
          ...DEFAULT_SETTINGS,
          displayName: "Areej",
          email: "you@example.com",
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 600));
          console.log("Saved settings:", values);
        }}
        onCancel={() => console.log("Cancelled")}
      />
    </main>
  );
}
