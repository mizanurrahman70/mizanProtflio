import { useEffect, useState } from "react";
import { HiOutlineMenuAlt4, HiX, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { profile } from "../data/portfolio";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
    setTheme(next);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line/[0.06] bg-ink/80 backdrop-blur-lg" : ""
      }`}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
      />
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          {profile.shortName}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active === id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full p-2 text-muted transition-colors hover:text-fg"
          >
            {theme === "dark" ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
          </button>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost hidden !py-2 sm:inline-flex">
            Resume
          </a>
          <button
            type="button"
            className="rounded-full p-2 text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX size={22} /> : <HiOutlineMenuAlt4 size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="container-x flex flex-col gap-1 pb-6 md:hidden">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-display text-2xl text-fg hover:bg-surface"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="mt-3">
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-primary w-full">
              View resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
