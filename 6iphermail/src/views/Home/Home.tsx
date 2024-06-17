import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
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

export default function Home() {
  return (
    <div>
      <div className="relative h-full flex-col bg-muted p-10 text-white flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img src={logo} alt="logo" height={70} width={70} />
          <span>6iphermail</span>
        </div>
        <div className="relative z-20">
          <img src={logo} alt="logo" height={1000} width={1000} />
        </div>

        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;The project aims to develop an innovative anti-phishing
              email system that uses advanced AI and machine learning to detect
              and prevent phishing attacks. It analyzes incoming emails,
              identifies phishing attempts, and alerts users in real-time,
              ensuring secure electronic communications with a user-friendly
              interface.&rdquo;
            </p>
            <footer className="text-sm">6iphermail</footer>
          </blockquote>
        </div>
      </div>
      <div className="flex flex-row space-x-5 mt-10">
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
          <CardFooter>
            <Button className="w-full">
              <Link to="/register">Join us</Link>
            </Button>
          </CardFooter>
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
          <CardFooter>
            <Button className="w-full">
              <Link to="/register">Join us</Link>
            </Button>
          </CardFooter>
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
          <CardFooter>
            <Button className="w-full">
              <Link to="/register">Join us</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
