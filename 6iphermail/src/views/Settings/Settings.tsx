import SettingsProfilePage from "@/components/settings/settings-form";
import SettingsLayout from "@/components/settings/sidebar/sidebar";
export default function Settings() {
  return (
    <div className="container mx-auto mt-2">
      <SettingsLayout>
        <SettingsProfilePage />
      </SettingsLayout>
    </div>
  );
}
