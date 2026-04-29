"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 md:px-20 py-10 space-y-24">

      {/* HERO */}
      <section className="text-center space-y-6 pt-20">
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

        <div className="bg-gray-900 p-6 rounded-xl space-y-4">
          <h3 className="text-xl font-bold">
            SkyConnect Airline Performance Analysis
          </h3>

          <p className="text-gray-400">
            A data analytics project analyzing airline performance, delays,
            and revenue trends (2022–2024).
          </p>

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
      <section className="text-center space-y-3 pb-20">
        <h2 className="text-2xl font-semibold">Contact</h2>

        <p className="text-gray-400">oluwafemiemmanuel551@gmail.com</p>
        <p className="text-gray-400">+2347072317836</p>
        <p className="text-gray-400">Lagos, Nigeria</p>
      </section>

    </main>
  )
}