function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold">Cecilia Ramirez</h2>

        <div className="flex gap-6 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

<img src="/profile.jpg" alt="Cecilia Ramirez" className="w-44 h-44 rounded-full object-cover mb-6" />
        <h1 className="text-6xl font-bold mb-4">
          Cecilia Ramirez
        </h1>

        <p className="text-2xl text-gray-300 max-w-3xl">
          Computer Science Student | Aspiring Data Analyst & Software Developer
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" className="px-10 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-300 text-lg leading-8">
          I am a Computer Science student at the University of Texas at Tyler,
          interested in data analytics, software development, and building
          real-world projects that solve problems.
        </p>
      </section>

      <section id="projects" className="px-10 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-gray-700 rounded-2xl p-6 hover:border-white transition">
            <h3 className="text-2xl font-bold">Housing Price EDA</h3>

            <p className="text-gray-300 mt-3">
              Analyzed housing data using Python, Pandas, and Tableau.
            </p>

            <div className="mt-5">
              <a
                href="https://github.com/itsceciliaramirez/housing-price-eda"
                target="_blank"
                className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-300"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="border border-gray-700 rounded-2xl p-6 hover:border-white transition">
            <h3 className="text-2xl font-bold">
              Healthcare Analytics Platform
            </h3>

            <p className="text-gray-300 mt-3">
              Full-stack healthcare analytics project built with React,
              Node.js, Express, PostgreSQL, SQL, and Tailwind CSS.
            </p>

            <div className="mt-5">
              <a
                href="https://github.com/"
                target="_blank"
                className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-300"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </section>

      <section id="skills" className="px-10 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "SQL",
            "Java",
            "C++",
            "React",
            "Node.js",
            "PostgreSQL",
            "Tableau",
            "Git",
            "Tailwind CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="border border-gray-700 px-4 py-2 rounded-full text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="px-10 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>

        <p className="text-gray-300 text-lg mb-4">
          Email: ramirez.ceci@outlook.com
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/itsceciliaramirez"
            target="_blank"
            className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-300"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/cecilia-ramirez-b5b16133b"
            target="_blank"
            className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </section>

    </div>
  )
}

export default App