/**
 * Corporate Minimalism with Brutalist Accents
 * Navigation: Clean, uppercase labels with burgundy accent on active state
 */

import { Link, useLocation } from "wouter";
import { Building2 } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "SERVICES", path: "/services" },
    { label: "INVESTMENTS", path: "/investments" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Building2 className="w-8 h-8 text-foreground" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold tracking-tight text-foreground">
                AGH
              </span>
              <span className="text-xs tracking-wider text-muted-foreground uppercase">
                Atlas Global Holdings
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium tracking-wider transition-colors relative group ${
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:block px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase transition-all hover:bg-primary/90"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </nav>
  );
}
