import { AccountForm } from "./account/account-form";
import MailForm from "./mail/mail-form";
export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      {location.pathname === "/settings" && <AccountForm />}
      {location.pathname === "/settings/account" && <AccountForm />}
      {location.pathname === "/settings/mail" && <MailForm />}
    </div>
  );
}
