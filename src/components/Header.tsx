import React from 'react';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Portafolio</h1>
        <div className="flex gap-4">
          <a href="#professional-profile" className="hover:text-blue-200 transition-colors">Sobre mí</a>
          <a href="#projects" className="hover:text-blue-200 transition-colors">Proyectos</a>
          <a href="#academic" className="hover:text-blue-200 transition-colors">Académico</a>
          <a href="#contact" className="hover:text-blue-200 transition-colors">Contacto</a>
        </div>
      </nav>
    </header>
  );
}
