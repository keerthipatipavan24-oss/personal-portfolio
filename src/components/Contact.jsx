import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    setSuccess("");

    if (Object.keys(newErrors).length === 0) {
      setSuccess(
        "Validation successful. Connect an email service to deliver your message.",
      );
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-white px-5 py-20 text-slate-900 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-600">
            Let's connect
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">Contact Me</h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-pink-500" />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Side */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Have a project in mind?
              <span className="mt-2 block text-pink-600">
                Let's work together.
              </span>
            </h3>

            <p className="mt-6 max-w-lg leading-8 text-slate-600">
              I'm interested in frontend developer opportunities, collaborative
              projects, and connecting with other developers. Feel free to reach
              out to discuss an idea or opportunity.
            </p>

            <a
              href="mailto:your.email@example.com"
              className="mt-8 w-fit break-all border-b border-pink-300 pb-2 font-semibold text-pink-600 transition hover:text-pink-700"
            >
              keerthipatipavan24@gmail.com 
            </a>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 transition hover:text-pink-600"
              >
                GitHub 
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 transition hover:text-pink-600"
              >
                LinkedIn 
              </a>
            </div>

            <p className="mt-8 text-sm leading-6 text-slate-500">
              Currently building projects and improving my frontend development
              skills.
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-8">
            <p className="mb-7 border-b border-slate-200 pb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Send a message
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors({ ...errors, name: "" });
                    setSuccess("");
                  }}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: "" });
                    setSuccess("");
                  }}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setErrors({ ...errors, message: "" });
                    setSuccess("");
                  }}
                  placeholder="Tell me about your idea..."
                  className="w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {success && (
                <p
                  role="status"
                  className="rounded-lg bg-cyan-50 p-3 text-sm leading-6 text-cyan-800"
                >
                  {success}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700"
              >
                Send Message 
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
