"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const skills = [
  { name: "Excel", level: 90, category: "Data Analysis" },
  { name: "Power BI", level: 88, category: "Visualization" },
  { name: "MySQL", level: 85, category: "Database" },
  { name: "Python", level: 80, category: "Programming" },
  { name: "Machine Learning", level: 75, category: "AI/ML" },
  { name: "Data Cleaning", level: 92, category: "Analysis" },
]

const testimonials = [
  {
    text: "Oluwafemi has an exceptional ability to turn messy data into clear, actionable insights. His work on our audit reports saved us hours every week.",
    name: "Adeyemi B.",
    role: "Senior Auditor, AAUA",
  },
  {
    text: "His analytical mindset and attention to detail is outstanding. The dashboards he built gave us visibility we never had before.",
    name: "Chioma N.",
    role: "Business Manager",
  },
  {
    text: "A diligent and sharp data analyst. Oluwafemi communicates findings clearly and always delivers beyond expectations.",
    name: "Tunde A.",
    role: "TechStudio Academy Instructor",
  },
]

export default function Home() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-white">Oluwafemi</span>
          <div className="hidden sm:flex gap-6 text-sm text-gray-400">
            {["About", "Experience", "Projects", "Skills", "Education", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-28">

        {/* HERO */}
        <section id="about" className="text-center space-y-6">
          <motion.img
            initial={{ opacity: 1, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="/profile.jpg"
            alt="Amodu Oluwafemi Emmanuel"
            className="w-36 h-36 mx-auto rounded-full object-cover ring-4 ring-green-500/30"
          />

          <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-green-400 text-sm uppercase tracking-widest mb-2">👋 Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold">Amodu Oluwafemi Emmanuel</h1>
          </motion.div>

          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg text-gray-400">
            Data Analyst • Business Intelligence • Machine Learning
          </motion.p>

          <motion.p initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="max-w-xl mx-auto text-gray-500">
            I transform complex data into clear insights and actionable dashboards that drive real business decisions.
          </motion.p>

          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-green-500 text-black px-6 py-3 text-sm font-semibold hover:bg-green-400 transition">
              View My Projects
            </a>
            <a href="/oluwafemi-cv.pdf" download className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white hover:border-white hover:bg-white/10 transition">
              Download CV
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex justify-center gap-4 text-sm text-gray-400">
            <a href="mailto:oluwafemiemmanuel51@gmail.com" className="hover:text-white transition">Email</a>
            <span>•</span>
            <a href="tel:+2347072317836" className="hover:text-white transition">+234 707 231 7836</a>
            <span>•</span>
            <span>Lagos, Nigeria</span>
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <motion.section
          id="experience"
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="bg-gray-900 rounded-2xl p-6 border border-white/5">
            <h3 className="font-bold text-white text-lg">Internal Audit Unit</h3>
            <p className="text-green-400 text-sm mb-4">Adekunle Ajasin University, Akungba Akoko, Ondo State</p>
            <ul className="space-y-2 text-gray-400 list-disc ml-5">
              <li>Audit reporting and documentation</li>
              <li>Compliance review and assessment</li>
              <li>Internal control evaluation and testing</li>
              <li>Risk assessment and management</li>
              <li>Reviewed financial transactions and account balances</li>
            </ul>
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-green-400 mb-2">Featured Work</p>
          <h2 className="text-2xl font-semibold mb-6">Projects ★</h2>

          <div className="bg-gray-900 p-6 rounded-2xl border border-white/5 space-y-6">
            <div>
              <h3 className="text-xl font-bold">SkyConnect Airline Performance Analysis</h3>
              <p className="text-gray-400 mt-1">A data analytics project analyzing airline performance, delays, and revenue trends (2022–2024).</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { slide: "Slide 1", text: "Overview of airline performance, revenue trends, and priority KPIs." },
                { slide: "Slide 2", text: "Delay analysis with operational recommendations to reduce turnaround time." },
                { slide: "Slide 3", text: "Revenue forecast models and customer segmentation insights." },
                { slide: "Slide 4", text: "Recommended action plan, next steps, and business impact." },
              ].map(({ slide, text }) => (
                <div key={slide} className="rounded-2xl bg-gray-950 border border-white/5 p-4">
                  <p className="text-xs uppercase tracking-widest text-gray-500">{slide}</p>
                  <p className="mt-2 text-sm text-gray-300">{text}</p>
                </div>
              ))}
            </div>

            <a href="/portfolio-project.pptx" download className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-gray-200 transition">
              Download Project File
            </a>

            <p className="text-gray-500 text-sm">Tools: MySQL • Power BI • Excel • Python</p>

            <ul className="text-gray-400 list-disc ml-5 space-y-1">
              <li>Identified delay patterns affecting operations</li>
              <li>Discovered revenue instability across years</li>
              <li>Analyzed customer behavior and loyalty gaps</li>
              <li>Provided strategic recommendations for growth</li>
            </ul>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-green-400 mb-2">Expertise</p>
          <h2 className="text-2xl font-semibold mb-6">Skills & Tools ★</h2>

          <div className="space-y-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 1, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-medium">{skill.name} <span className="text-gray-500 font-normal">— {skill.category}</span></span>
                  <span className="text-green-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-green-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          id="education"
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-2xl p-5 border border-white/5">
              <h3 className="font-bold text-white">Adekunle Ajasin University</h3>
              <p className="text-green-400 text-sm">Accounting (B.Sc) — 2019–2024</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-5 border border-white/5">
              <h3 className="font-bold text-white">Tech Studio Academy</h3>
              <p className="text-green-400 text-sm">Diploma in Data Analysis — 2026</p>
            </div>
          </div>
        </motion.section>

        {/* TESTIMONIALS */}
        <motion.section
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-green-400 mb-2">Testimonials</p>
          <h2 className="text-2xl font-semibold mb-6">What People Say ★</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gray-900 border border-white/5 rounded-2xl p-5 space-y-3"
              >
                <p className="text-gray-400 text-sm">"{t.text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-10"
        >
          <div className="max-w-2xl mx-auto rounded-3xl border border-white/10 bg-gray-900 p-8">
            <div className="mb-8 text-center">
              <p className="text-xs uppercase tracking-widest text-green-400">Get in Touch</p>
              <h2 className="mt-3 text-2xl font-semibold">Contact Me ★</h2>
              <p className="mt-2 text-gray-400 text-sm">Interested in working together? I'd love to hear from you.</p>
            </div>

            {submitted ? (
              <div className="text-center py-10">
                <p className="text-green-400 text-lg font-semibold">Message sent! 🎉</p>
                <p className="text-gray-400 text-sm mt-2">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-gray-300">
                    <span>Your Name</span>
                    <input type="text" name="name" placeholder="Your name" required className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-green-500" />
                  </label>
                  <label className="space-y-2 text-sm text-gray-300">
                    <span>Email Address</span>
                    <input type="email" name="email" placeholder="you@example.com" required className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-green-500" />
                  </label>
                </div>
                <label className="space-y-2 text-sm text-gray-300">
                  <span>Why would you like to work with me?</span>
                  <textarea name="message" rows={5} placeholder="Tell me about your project or collaboration goals" required className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-green-500" />
                </label>
                <button type="submit" className="inline-flex w-full justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-black hover:bg-green-400 transition">
                  Send Message
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-white/5 grid sm:grid-cols-2 gap-3 text-sm text-gray-400">
              <div>📧 <a href="mailto:oluwafemiemmanuel51@gmail.com" className="hover:text-white transition">oluwafemiemmanuel51@gmail.com</a></div>
              <div>📞 <a href="tel:+2347072317836" className="hover:text-white transition">+234 707 231 7836</a></div>
              <div>📍 Lagos, Nigeria</div>
            </div>
          </div>
        </motion.section>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-6 text-center text-sm text-gray-500">
        © 2025 Amodu Oluwafemi Emmanuel
      </footer>

    </main>
  )
}
