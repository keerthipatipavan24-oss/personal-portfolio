import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 px-4 py-4 text-white shadow-md sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold"
        >
          <span className="text-pink-400">✦</span> Pavan
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveSection(link.id)}
              className={`font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-pink-400"
                  : "text-white hover:text-pink-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="text-2xl text-white md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-slate-700 pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-pink-400"
                  : "text-white hover:text-pink-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
