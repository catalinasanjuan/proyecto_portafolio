import React from 'react';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ¡Hola! Soy Catalina San Juan
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Estudiante de Análisis y Programación con excelencia académica, 
              apasionada por crear soluciones tecnológicas innovadoras.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/catalinasanjuan" 
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="www.linkedin.com/in/catalina-sanjuan-programadora"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:catalina.sanjuan.carvajal@gmail.com"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Coding workspace"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}