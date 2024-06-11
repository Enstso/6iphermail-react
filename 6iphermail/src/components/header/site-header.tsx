import { siteConfig } from "@/site";
import { buttonVariants, Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/icons";
import { MainNav } from "./main-nav";
import { ModeToggle } from "../mode-toggle";
import { Link } from "react-router-dom";
import { LogOutIcon } from "lucide-react";
import { urls, getData } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export function SiteHeader() {
  const navigate = useNavigate();
  function handleLogout() {
    getData(urls.logout).then((data) => {
      navigate("/login");
    });
  }
  return (
    <header className="static top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link to={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ModeToggle />
            <Button variant="outline" size="icon" onClick={handleLogout}>
              <LogOutIcon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
