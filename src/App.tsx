import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Academic from './components/Academic';
import ProfessionalProfile from './components/ProfessionalProfile';
import Contact from './components/Contact';
import ExperienceTimeline from './components/ExperienceTimeline';
import CatalinaChatbot from './components/CatalinaChatbot';



function App() {
  return (
    <div className="min-h-screen transition-all duration-500 ease-in-out bg-white dark:bg-gray-900">

      <Header />
      <main>
        <Hero />
        <Projects />
        <ProfessionalProfile />
        <Academic />
        <ExperienceTimeline />
        <Contact />
      </main>
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} - Desarrollado con Next.js por Catalina San Juan</p>
        </div>
      </footer>
      <CatalinaChatbot />

    </div>
  );
}

export default App;