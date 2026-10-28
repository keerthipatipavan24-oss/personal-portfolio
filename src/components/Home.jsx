export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-[90vh] items-center justify-center bg-white px-4 py-16 sm:px-8"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <p className="mb-4 text-lg font-medium text-pink-600 font-semibold">Hello, I'm</p>

        <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          <span className="block text-slate-900">Keerthipati</span>
          <span className="block text-pink-600">Pavan</span>
        </h1>

        <h2 className="mb-5 text-xl font-semibold text-slate-700 sm:text-2xl">
          Frontend Developer
        </h2>

        <p className="mx-auto mb-8 max-w-2xl leading-7 text-slate-600">
          I build responsive and user-friendly web applications using HTML, CSS,
          JavaScript, React, and Tailwind CSS. I enjoy turning ideas into clean
          and functional digital experiences while continuously improving my
          skills.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border-2 border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-pink-600 hover:text-pink-600"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
