import data from "@/assets/data.json";
import { Menu, MoonIcon, SunIcon, X } from "lucide-react";
import { useEffect, useState } from "react";

type propsType = {
  theme: string;
  toggleTheme: () => void;
};

export const Navbar = ({ theme, toggleTheme }: propsType) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // track scrolling for navbar bg change
  useEffect(() => {
    const h = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-5 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border-strong/80"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-auto flex items-center justify-between">
        {/* logo */}
        <a href="#" className="group text-xl font-semibold tracking-tight">
          <span className="text-foreground transition-colors duration-200 group-hover:text-accent">
            MN
          </span>
          <span className="text-accent transition-colors duration-200 group-hover:text-foreground">
            .
          </span>
        </a>

        {/* desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {data.navLinks.map((link, index) => (
            <a href={link.href} key={index} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {/* theme toggle button */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:text-foreground"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>

          {/* menu button */}
          <button
            onClick={() => setIsMenuOpen((prev: boolean) => !prev)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-muted hover:text-foreground"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      {/* mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-60 bg-surface/95 backdrop-blur-md border-t border-border px-6 py-4 flex flex-col gap-4">
          {data.navLinks.map((l, idx) => (
            <a
              key={idx}
              href={l.href}
              className="nav-link text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}{" "}
    </header>
  );
};
