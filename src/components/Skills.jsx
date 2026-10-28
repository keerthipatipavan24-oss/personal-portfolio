const skills = [
  {
    name: "HTML",
    category: "Structure",
    description: "Creating the structure and content of web pages.",
  },
  {
    name: "CSS",
    category: "Styling",
    description: "Designing layouts, colors, and responsive interfaces.",
  },
  {
    name: "JavaScript",
    category: "Programming",
    description: "Adding logic and interactive features to websites.",
  },
  {
    name: "React",
    category: "Frontend",
    description: "Building reusable components and interactive interfaces.",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Creating consistent designs with utility classes.",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    description: "Managing source code and tracking project changes.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-white px-5 py-20 text-slate-900 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-600">
            What I work with
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">My Skills</h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-pink-500" />

          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            The technologies and tools I use to develop responsive, accessible,
            and user-friendly web interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-md"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-pink-600">
                  0{index + 1}
                </span>

                <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-800">
                  {skill.category}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold">{skill.name}</h3>

              <p className="text-sm leading-7 text-slate-600">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
