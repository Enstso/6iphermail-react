import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldCheck, Rocket, Link as LinkIcon } from "lucide-react";
import { getData, urls } from "@/lib/utils";
import { useEffect, useContext } from "react";
import { AuthContext } from "@/components/authentification/auth-context";
export default function Home() {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getData(urls.me);
        if (data?.username) {
          authContext.login();
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [authContext]);

  return (
    <div>
      <div className="relative h-full flex-col bg-muted p-10 text-white flex  dark:">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img src={logo} alt="logo" height={70} width={70} />
          <span>6iphermail</span>
        </div>
        <div className=" flex justify-center z-20">
          <img src={logo} alt="logo" height={1000} width={1000} />
        </div>

        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p>
              &ldquo;The project aims to develop an innovative anti-phishing
              email system that uses advanced AI and machine learning to detect
              and prevent phishing attacks. It analyzes incoming emails,
              identifies phishing attempts, and alerts users in real-time,
              ensuring secure electronic communications with a user-friendly
              interface.&rdquo;
            </p>
            <footer className="flex justify-center text-sm">6iphermail</footer>
          </blockquote>
        </div>
      </div>
      <div className="flex flex-col space-x-5 mt-10 sm:flex sm:flex-row">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Secure Application</CardTitle>
            <CardDescription>
              secure solid architecture 3 tiers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <ShieldCheck className="w-full h-full" />
            </div>
          </CardContent>

          {!authContext.isLoggedIn ? (
            <CardFooter>
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 w-full"
                to="/register"
              >
                Join us
              </Link>
            </CardFooter>
          ) : null}
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Real-Time URL Analysis</CardTitle>
            <CardDescription>
              Enhance email security with real-time scanning.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <Rocket className="w-full h-full" />
            </div>
          </CardContent>
          {!authContext.isLoggedIn ? (
            <CardFooter>
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 w-full"
                to="/register"
              >
                Join us
              </Link>
            </CardFooter>
          ) : null}
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Cross-Platform Application</CardTitle>
            <CardDescription>
              Connect your account on others devices.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <LinkIcon className="w-full h-full" />
            </div>
          </CardContent>
          {!authContext.isLoggedIn ? (
            <CardFooter>
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 w-full"
                to="/register"
              >
                Join us
              </Link>
            </CardFooter>
          ) : null}
        </Card>
      </div>
    </div>
  );
}
