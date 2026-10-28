const highlights = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces using modern web technologies.",
  },
  {
    title: "Problem Solving",
    description:
      "Practising coding concepts and applying them to practical projects.",
  },
  {
    title: "Continuous Learning",
    description:
      "Improving my skills by exploring new tools and development techniques.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-slate-50 px-5 py-20 text-slate-900 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-600">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-pink-500" />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="mb-5 text-2xl font-semibold leading-snug sm:text-3xl">
              Building my skills.
              <span className="block text-pink-600">
                Creating better experiences.
              </span>
            </h3>

            <p className="leading-8 text-slate-600">
              I'm Pavan, an MCA graduate interested in frontend development and
              building modern web applications.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              I work with HTML, CSS, JavaScript, React, and Tailwind CSS. I
              enjoy creating responsive interfaces and learning through hands-on
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-pink-300 hover:shadow-md"
              >
                <p className="mb-3 text-sm font-semibold text-pink-600">
                  0{index + 1}
                </p>

                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>

                <p className="text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
