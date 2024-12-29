import { useContext } from 'react';
import { Link } from "react-router-dom"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/site"
import { cn } from "@/lib/utils"
import logo from "@/assets/logo.png"
import { AuthContext } from "../authentification/auth-context"
interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <div className="flex gap-6 md:gap-10">
      <Link to="/" className="flex items-center space-x-2">
       <img src={logo} alt="" width={50} height={50} />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {isLoggedIn ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  to={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}