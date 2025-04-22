import React from 'react';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <nav className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
        <h1 className="text-xl font-bold">Portafolio</h1>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm sm:text-base">
          <a href="#professional-profile" className="hover:text-blue-200 transition-colors">Sobre mí</a>
          <a href="#projects" className="hover:text-blue-200 transition-colors">Proyectos</a>
          <a href="#academic" className="hover:text-blue-200 transition-colors">Académico</a>
          <a href="#contact" className="hover:text-blue-200 transition-colors">Contacto</a>
        </div>
      </nav>
    </header>
  );
}
