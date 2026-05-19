function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold">Cecilia Ramirez</h2>

        <div className="flex gap-6 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

        <img
          src="/profile.jpg"
          alt="Cecilia Ramirez"
          className="w-52 h-52 rounded-full object-cover mb-8 border-4 border-white shadow-2xl"
        />

        <h1 className="text-6xl font-bold mb-4">
          Cecilia Ramirez
        </h1>

        <p className="text-2xl text-gray-300 max-w-3xl">
          Computer Science Student | Aspiring Data Analyst & Software Developer
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            View Projects
          </a>

          <a
            href="mailto:ramirez.ceci@outlook.com"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </section>

{/* Resume Section */}
<section className="px-10 py-20 text-center">
  <h2 className="text-4xl font-bold mb-8">Resume</h2>

  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl max-w-3xl mx-auto">

    <p className="text-gray-200 text-lg mb-8">
      View or download my professional resume.
    </p>

    <div className="flex justify-center gap-4 flex-wrap">

      <a
 href="/CeciliaRamirez_Resume.pdf"
  target="_blank"
  className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
>
  View Resume
</a>

      <a
  href="/CeciliaRamirez_Resume.pdf"
  download
  className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition"
>
  Download Resume
</a>

    </div>

  </div>
</section>

      {/* About */}
      <section id="about" className="px-10 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <p className="text-gray-200 text-lg leading-8">
            I am a Computer Science student at the University of Texas at Tyler,
            passionate about software development, data analytics, and building
            real-world applications. I enjoy creating projects that combine
            technology, design, and problem-solving.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">
              Housing Price EDA
            </h3>

            <p className="text-gray-300 mb-6">
              Exploratory Data Analysis project using Python, Pandas,
              Matplotlib, and Tableau to analyze housing price trends.
            </p>

            <a
              href="https://github.com/itsceciliaramirez/housing-price-eda"
              target="_blank"
              className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-300"
            >
              View GitHub
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">
              Healthcare Analytics Platform
            </h3>

            <p className="text-gray-300 mb-6">
              Full-stack healthcare analytics platform built with React,
              Node.js, Express, PostgreSQL, SQL, and Tailwind CSS.
            </p>

            <a
              href="https://github.com/"
              target="_blank"
              className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-300"
            >
              View GitHub
            </a>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-10 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "Python",
            "Java",
            "C++",
            "SQL",
            "PostgreSQL",
            "Tableau",
            "Git",
            "GitHub",
            "VS Code",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-white text-black px-5 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-10 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Contact</h2>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl max-w-xl mx-auto">

          <p className="text-gray-200 text-lg mb-6">
            Interested in working together or connecting?
          </p>

          <a
            href="mailto:ramirez.ceci@outlook.com"
            className="inline-block bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            Email Me
          </a>

          <div className="flex justify-center gap-4 mt-8">

            <a
              href="https://github.com/itsceciliaramirez"
              target="_blank"
              className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/cecilia-ramirez-b5b16133b"
              target="_blank"
              className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>

          </div>
        </div>
      </section>

    </div>
  )
}

export default App