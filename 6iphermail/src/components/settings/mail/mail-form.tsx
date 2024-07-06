import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getData, postData, urls } from "@/lib/utils";
export default function MailForm() {
  const [email, setEmail] = useState<string>("");
  const [nbMails, setNbMails] = useState<number>(0);
  
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    postData(urls.identifierMail, { email,nbMails }).then((data) => {
      getData(urls.mails).then((data) => {
        location.href = data.url;
      });
    });
  }
  return (
    <>
      <div>
        <h3 className="text-lg font-medium">Mail</h3>
        <p className="text-sm text-muted-foreground">
          Configure your mail to receive your mails.
        </p>
      </div>
      <Separator />
      <form className="space-y-3" onSubmit={onSubmit}>
        <div className="flex flex-col space-y-3">
          <Input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            max={500}
            type="number"
            placeholder="number of mails"
            onChange={(e) => setNbMails(parseInt(e.target.value))}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
