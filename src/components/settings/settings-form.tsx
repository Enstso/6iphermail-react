import { AccountForm } from "./account/account-form";
import MailForm from "./mail/mail-form";
import ContactForm from "./contacts/contacts-form";
export default function SettingsAccountPage() {
  {console.log(location.pathname)}

  return (
    <div className="space-y-6">
      {location.pathname === "/settings" && <AccountForm />}
      {location.pathname === "/settings/account" && <AccountForm />}
      {location.pathname === "/settings/mail" && <MailForm />}
      {location.pathname === "/settings/contacts" && <ContactForm />}
    </div>
  );
}
