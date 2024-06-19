import { useContext } from "react";
import { siteConfig } from "@/site";
import { buttonVariants, Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/icons";
import { MainNav } from "./main-nav";
import { ModeToggle } from "../theme/mode-toggle";
import { Link } from "react-router-dom";
import { LogOutIcon, LogInIcon } from "lucide-react";
import { urls, getData } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authentification/auth-context";
export function SiteHeader() {
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();
  function handleLogout() {
    getData(urls.logout).then((data) => {
      authContext.logout();
      navigate("/login");
    });
  }

  return (
    <header className="static top-0 z-40 w-full border-b bg-background mb-10">
      <div className=" flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
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
            {authContext.isLoggedIn ? (
              <Button variant="outline" size="icon" onClick={handleLogout}>
                <LogOutIcon className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            ) : (
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 w-9"
                to="/login"
              >
                <LogInIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
