import { Mail } from "@/components/mail/mail";
import { Cookies } from "react-cookie";
import { useState, useEffect, useRef } from 'react';
import { getData, urls } from "@/lib/utils";
import { mails as maili } from "@/components/mail/data";
interface Account {
  label: string;
  email: string;
  icon: JSX.Element;
}

export default function MailPage() {
  const [mails, setMails] = useState<any[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const cookies = new Cookies();
  const layout = cookies.get("react-resizable-panels:layout");
  const collapsed = cookies.get("react-resizable-panels:collapsed");
  const effectRan = useRef(false); // Tracks if effect has already run

  const defaultLayout = layout ? layout.value : undefined;
  const defaultCollapsed = collapsed ? collapsed.value : undefined;

  useEffect(() => {
    // Prevent the effect from running twice in StrictMode
    if (effectRan.current) return;
    effectRan.current = true;

    const fetchAccounts = async () => {
      try {
        const data2 = await getData(urls.whois);
        const email = data2.email;
        const account = {
          label: email.split("@")[0],
          email: data2.email,
          icon: (
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Gmail</title>
              <path
                d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                fill="currentColor"
              />
            </svg>
          ),
        };
        setAccounts(prevAccounts => [...prevAccounts, account]);
      } catch (error) {
        console.error("Error fetching account data:", error);
      }
    };

    fetchAccounts();
  }, []);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const data = await getData(urls.threads);
        console.log(data);
        const fetchedMails = data.threads.flatMap(thread =>
          thread.map(mail => ({
            id: mail.id,
            name: mail.name,
            email: mail.expeditor,
            subject: mail.subject,
            date: mail.date,
            text: mail.data,
            read: mail.is_read,
            labels: [mail.score],
          }))
  
        );

        setMails(fetchedMails);
      } catch (error) {
        console.error("Error fetching mail data:", error);
      }
    };

    fetchMails();
  }, []); // empty dependency array means this effect runs once on mount

  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <img
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
