import { useEffect, useState } from "react";
import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Project } from "./sections/Project";
import { Skill } from "./sections/Skill";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return getSystemTheme();
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar
        theme={theme}
        toggleTheme={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
