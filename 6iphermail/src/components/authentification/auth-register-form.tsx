import * as React from "react";
import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/authentification/password-input";
import { cn, postData, urls } from "@/lib/utils";

interface AuthRegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AuthRegisterForm({
  className,
  ...props
}: AuthRegisterFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isDiscord, setIsDiscord] = React.useState<boolean>(false);
  const [isGitHub, setIsGitHub] = React.useState<boolean>(false);
  const [isGoogle, setIsGoogle] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] =
    React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    if (password !== passwordConfirmation) {
      alert("Passwords do not match");
      return;
    }
    postData(urls.register, { username,email, password }).then((data) => {
      console.log(data);
    });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
        <div className="grid gap-1">
            <Input
              id="username"
              placeholder="username"
              type="text"
              autoCapitalize="none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <PasswordInput
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></PasswordInput>
          </div>
          <div className="grid gap-1">
            {" "}
            <PasswordInput
              id="password-confirmation"
              placeholder="confirm password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            ></PasswordInput>
          </div>

          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Create with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isGitHub}>
        {isGitHub ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>
      <Button variant="outline" type="button" disabled={isGoogle}>
        {isGoogle ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
      <Button variant="outline" type="button" disabled={isDiscord}>
        {isDiscord ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.discord className="mr-2 h-4 w-4" />
        )}{" "}
        Discord
      </Button>
    </div>
  );
}
