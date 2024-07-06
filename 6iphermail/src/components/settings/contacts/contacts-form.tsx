import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getData, postData, urls } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(urls.me);
        setEmail(data.email);
        setUsername(data.username);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    postData(urls.contacts, { email, username, message }).then((data) => {
      console.log(data);
      setMessage("");
    });
  }

  return (
    <>
      <div>
        <h3 className="text-lg font-medium">Contact</h3>
        <p className="text-sm text-muted-foreground">Send us a message.</p>
      </div>
      <Separator />
      <form className="space-y-3" onSubmit={onSubmit}>
        <div className="flex flex-col space-y-3">
          <Input
            type="text"
            placeholder="email"
            value={email}
            disabled
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="username"
            value={username}
            disabled
            onChange={(e) => setUsername(e.target.value)}
          />
          <Textarea
          placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
