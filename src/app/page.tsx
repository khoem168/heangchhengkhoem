'use client';
import React, { useRef } from 'react';
import Image from 'next/image';

// Main App component
const App = () => {
  // Create refs for smooth scrolling to sections
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Mock data for projects - replace with your own projects
  const projects = [
    {
      title: "Project Alpha",
      description: "A full-stack web application for managing tasks, built with React, Node.js, and MongoDB. Features include user authentication, real-time updates, and a clean, responsive UI.",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Beta",
      description: "A mobile-first application developed using React Native to track personal fitness goals. Integrates with a RESTful API and provides data visualization for progress.",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Gamma",
      description: "A simple e-commerce storefront built with HTML, CSS, and vanilla JavaScript. Demonstrates a clear understanding of DOM manipulation and client-side logic.",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  // Mock data for skills - replace with your own skills
  const skills = [
    "JavaScript", "React", "Node.js", "Python", "Java", "SQL", "MongoDB", "Express", "Tailwind CSS", "Git", "Docker"
  ];

  // Handle smooth scroll to sections
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm p-4 border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Heang Chhengkhoem</h1>
          <nav className="space-x-4 hidden md:block">
            <button onClick={() => scrollToSection(homeRef)} className="text-gray-300 hover:text-white transition-colors duration-300">Home</button>
            <button onClick={() => scrollToSection(aboutRef)} className="text-gray-300 hover:text-white transition-colors duration-300">About</button>
            <button onClick={() => scrollToSection(projectsRef)} className="text-gray-300 hover:text-white transition-colors duration-300">Projects</button>
            <button onClick={() => scrollToSection(skillsRef)} className="text-gray-300 hover:text-white transition-colors duration-300">Skills</button>
            <button onClick={() => scrollToSection(contactRef)} className="text-gray-300 hover:text-white transition-colors duration-300">Contact</button>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section ref={homeRef} className="flex flex-col items-center justify-center text-center p-8 md:p-16 min-h-[calc(100vh-64px)]">
        <div className="max-w-4xl space-y-4">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Khoem</span>
          </h2>
          <p className="text-2xl text-gray-300 font-light">
            Software Engineer | Full Stack Developer
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            I build modern, responsive, and scalable web applications. Explore my work to see how I can help bring your ideas to life.
          </p>
          <a
            href="https://web.facebook.com/khoem168" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:bg-gray-200 transition-transform duration-300 transform hover:scale-105"
          >
            My Facebook <Account></Account>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="container mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="w-full lg:w-1/3">
            <Image
              src="https://placehold.co/400x400/1f2937/d1d5db?text=Your+Photo"
              alt="Description"
              width={500}
              height={500}
              className="w-full rounded-full shadow-lg"
            />
          </div>
          <div className="w-full lg:w-2/3">
            <h3 className="text-4xl font-bold text-white mb-4">About Me</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              I am a passionate software engineer with a strong foundation in modern web technologies. I specialize in building robust and scalable applications using the MERN stack (MongoDB, Express, React, Node.js). My focus is on writing clean, efficient, and maintainable code while delivering exceptional user experiences.
              <br/><br/>
              I am a quick learner and thrive in collaborative environments, always eager to take on new challenges and expand my skill set. In my free time, I enjoy contributing to open-source projects and exploring new programming languages.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="container mx-auto py-16 px-4 md:px-8">
        <h3 className="text-4xl font-bold text-white text-center mb-12">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex space-x-4 mt-auto">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="container mx-auto py-16 px-4 md:px-8">
        <h3 className="text-4xl font-bold text-white text-center mb-12">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-gray-800 text-teal-400 px-4 py-2 rounded-full font-medium transition-transform duration-300 hover:scale-105">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="container mx-auto py-16 px-4 md:px-8">
        <h3 className="text-4xl font-bold text-white text-center mb-8">Get In Touch</h3>
        <div className="max-w-xl mx-auto text-center space-y-4">
          <p className="text-lg text-gray-400">
            I&apos;m currently open to new opportunities. Feel free to reach out!
          </p>
          <a
            href="mailto:your.email@example.com" // Replace with your email
            className="inline-block px-6 py-3 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:bg-gray-200 transition-transform duration-300 transform hover:scale-105"
          >
            Email Me
          </a>
          
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.2-.3 6.6-1.6 6.6-7.2A5.7 5.7 0 0 0 20 5.4c.5-1.2 1.2-3.6 0-5.4a4.3 4.3 0 0 0-4 1c-1.2-.4-2.4-.6-3.7-.6-1.3 0-2.5.2-3.7.6a4.3 4.3 0 0 0-4-1c-1.2 1.8-.5 4.2 0 5.4a5.7 5.7 0 0 0 1.2 4.2c0 5.6 3.4 6.9 6.6 7.2-1.2.5-2.2 1.2-2.8 2.3-.6 1.1-.9 2.5-.9 4v.5"/><path d="M9 18c-2 0-3-.5-3.5-1.5-.5-1-.5-2 0-3.5 1-1.5 2.5-1 3.5-1s2.5.5 3.5 1.5c.5 1 1.5 2 1.5 3.5s-.5 2.5-1.5 3.5c-1 1.5-2 1.5-3 1.5z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Heang Chhengkhoem. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
