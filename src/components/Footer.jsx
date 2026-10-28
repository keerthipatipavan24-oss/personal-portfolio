export default function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 border-b border-slate-800 pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              ✦ Pavan
            </span>
          </h2>

          <p className="mt-3 font-medium text-pink-400">Frontend Developer</p>

          <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
            Creating responsive and user-friendly web interfaces while
            continuously learning modern frontend technologies.
          </p>
        </div>

        {/* Vertical Navigation */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest">
            Explore
          </h3>

          <div className="flex flex-col items-start gap-3 text-sm text-slate-400">
            <a href="#home" className="transition hover:text-pink-400">
              Home
            </a>
            <a href="#about" className="transition hover:text-pink-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-pink-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-pink-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-pink-400">
              Contact
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest">
            Connect
          </h3>

          <div className="flex flex-col items-start gap-3 text-sm text-slate-400">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-pink-400"
            >
              GitHub 
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-pink-400"
            >
              LinkedIn 
            </a>

            <a
              href="mailto:your.email@example.com"
              className="transition hover:text-pink-400"
            >
              Email 
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 pt-6 text-center text-xs text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Pavan. All rights reserved.</p>
        <p>
          Built with <span className="font-semibold text-pink-400">React</span>{" "}
          and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
