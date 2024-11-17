import React from 'react';
import { BadgeCheck, ArrowRight, Mail, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Texto */}
        <div className="lg:w-1/2 space-y-6">
          {/* Título */}
          <div>
            <span className="bg-blue-600 text-sm font-bold py-1 px-3 rounded-full mb-4 inline-block">
              Analista Programador
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
              ¡Hola! Soy <span className="text-blue-300">Catalina San Juan</span>
            </h1>
            <p className="text-lg">
              Futuro Analista Programador | Aspirante a Desarrolladora Front-End
            </p>
          </div>

          {/* Descripción */}
          <p className="text-gray-200 leading-relaxed">
            Estudiante destacado con excelencia académica, apasionado por el desarrollo de software y la resolución creativa de problemas tecnológicos.
          </p>

          {/* Botones */}
          <div className="flex gap-4">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
            >
              <ArrowRight className="w-5 h-5" />
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-blue-800 hover:bg-gray-200 rounded-lg shadow-md transition"
            >
              Contactar
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="lg:w-1/2 relative">
        <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Coding workspace"
              className="rounded-lg shadow-2xl"
            />
          <div className="absolute top-4 right-4 bg-white text-blue-800 px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-blue-600" />
            <span className="font-semibold">Excelencia Académica</span>
          </div>
        </div>
      </div>
    </section>
  );
}
