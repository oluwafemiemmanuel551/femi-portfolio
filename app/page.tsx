"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 md:px-20 py-10 space-y-24">

      {/* HERO */}
      <section className="text-center space-y-6 pt-20">
        <img
          src="/profile.jpg"
          alt="Profile picture of Amodu Oluwafemi Emmanuel"
          className="w-36 h-36 mx-auto rounded-full object-cover ring-4 ring-white/20"
        />

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Amodu Oluwafemi Emmanuel
        </motion.h1>

        <p className="text-lg text-gray-400">
          Data Analyst • Business Intelligence • Machine Learning
        </p>

        <p className="max-w-xl mx-auto text-gray-500">
          Turning raw data into insights that drive real business decisions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
          <a
            href="/portfolio-project.pptx"
            download
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 text-sm font-semibold transition hover:bg-gray-200"
          >
            Download project file
          </a>
          <a
            href="/oluwafemi-cv.pdf"
            target="_blank"
            rel="noreferrer noopener"
            download
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-white hover:bg-white/10"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400 max-w-2xl">
          I am a data analyst based in Lagos, Nigeria, specializing in transforming
          complex datasets into actionable insights using Excel, Power BI, MySQL,
          and Python. I bring real-world experience across healthcare, retail tech.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="space-y-3 text-gray-400">
            <li>
              <strong>Internal Audit Unit, Adekunle Ajasin University, Akungba Akoko Ondo State</strong>
              <ul className="list-disc ml-6 mt-2">
                <li>Audit reporting and documentation</li>
                <li>Compliance review and assessment</li>
                <li>Internal control evaluation and testing</li>
                <li>Risk assessment and management</li>
                <li>Reviewed financial transactions and account balances</li>
              </ul>
            </li>
        </ul>
      </section>

      {/* PROJECT */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Project</h2>

        <div className="bg-gray-900 p-6 rounded-xl space-y-6">
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold">
                SkyConnect Airline Performance Analysis
              </h3>
              <p className="text-gray-400">
                A data analytics project analyzing airline performance, delays,
                and revenue trends (2022–2024).
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-gray-400">Project Preview</p>
                  <p className="mt-2 text-gray-300 max-w-2xl">
                    View a quick slide summary of the PPTX with key findings and recommendations.
                  </p>
                </div>
                <a
                  href="/portfolio-project.pptx"
                  download
                  className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 text-sm font-semibold transition hover:bg-gray-200"
                >
                  Download slide deck
                </a>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Slide 1</p>
                  <p className="mt-3 text-sm text-gray-300">
                    Overview of airline performance, revenue trends, and priority KPIs.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Slide 2</p>
                  <p className="mt-3 text-sm text-gray-300">
                    Delay analysis with operational recommendations to reduce turnaround time.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Slide 3</p>
                  <p className="mt-3 text-sm text-gray-300">
                    Revenue forecast models and customer segmentation insights.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Slide 4</p>
                  <p className="mt-3 text-sm text-gray-300">
                    Recommended action plan, next steps, and business impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm">
            Tools: MySQL • Power BI • Excel • Python
          </p>

          <ul className="text-gray-400 list-disc ml-5">
            <li>Identified delay patterns affecting operations</li>
            <li>Discovered revenue instability across years</li>
            <li>Analyzed customer behavior and loyalty gaps</li>
            <li>Provided strategic recommendations for growth</li>
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-400">
          <div>
            <h3 className="font-bold text-white">Data Analysis</h3>
            <p>Excel, Power BI, MySQL, Python</p>
          </div>

          <div>
            <h3 className="font-bold text-white">Machine Learning</h3>
            <p>Predictive Analysis, Modeling</p>
          </div>

          <div>
            <h3 className="font-bold text-white">Other</h3>
            <p>Data Cleaning, Visualization</p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>

        <p className="text-gray-400">
          Adekunle Ajasin University — Accounting (B.Sc) 2019-2024
        </p>

        <p className="text-gray-400 mt-2">
          Tech Studio Academy — Diploma in Data Analysis (2026)
        </p>
      </section>

      {/* CONTACT */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-gray-900 p-8 shadow-sm shadow-black/20">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-green-300">Contact Me</p>
            <h2 className="mt-3 text-2xl font-semibold">Let’s work together</h2>
            <p className="mt-2 text-gray-400">
              Share your name, email, and why you’d like to work together.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-gray-300">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-white"
                  required
                />
              </label>

              <label className="space-y-2 text-sm text-gray-300">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-white"
                  required
                />
              </label>
            </div>

            <label className="space-y-2 text-sm text-gray-300">
              <span>Why would you like to work with me?</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project or collaboration goals"
                className="w-full rounded-3xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-white"
                required
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-green-400"
            >
              Send message
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            I’ll receive your message and respond as soon as possible.
          </p>
        </div>
      </section>

    </main>
  )
}