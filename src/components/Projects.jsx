const projects = [
  {
    title: "Authentication Dashboard",
    description:
      "A dashboard featuring login, registration, password recovery, profile management, and protected pages.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Support Ticket Dashboard",
    description:
      "A helpdesk interface for creating, searching, filtering, editing, and managing support tickets.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "E-commerce Dashboard",
    description:
      "A dashboard concept for displaying products, managing inventory, tracking orders, and viewing sales summaries.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "HR Management Dashboard",
    description:
      "An interface concept for employee records, attendance, departments, and leave requests.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Travel Management",
    description:
      "A travel interface for exploring destinations, managing bookings, and viewing trip details.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "SaaS Management Dashboard",
    description:
      "A dashboard concept for monitoring subscriptions, users, revenue, and business metrics.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-slate-50 px-5 py-20 text-slate-900 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-600">
            Selected work
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">My Projects</h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-pink-500" />

          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            A selection of dashboard applications and interfaces I've developed
            while practising frontend development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-md"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-pink-600">
                  PROJECT 0{index + 1}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>

              <p className="mb-6 flex-1 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-semibold">More ideas. More to build.</h3>

          <a
            href="#contact"
            className="w-fit font-semibold text-pink-600 transition hover:text-cyan-700"
          >
            Let's connect
          </a>
        </div>
      </div>
    </section>
  );
}
