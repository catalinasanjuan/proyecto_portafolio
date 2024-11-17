import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Academic from './components/Academic';
import ProfessionalProfile from './components/ProfessionalProfile';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <ProfessionalProfile />
        <Academic />
        <Contact />
      </main>
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} - Desarrollado con Next.js por Catalina San Juan 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;