import React from 'react';
import { BadgeCheck, ArrowRight, Mail, Code, Download, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Texto */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">

          {/* Título */}
          <div>
            <span className="bg-blue-600 text-sm font-bold py-1 px-3 rounded-full mb-4 inline-block">
              Analista Programador
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
              ¡Hola! Soy <span className="text-blue-300">Catalina San Juan</span>
            </h1>
            <p className="text-lg">
              Analista Programador | Desarrolladora Front-End
            </p>
          </div>

          {/* Descripción */}
          <p className="text-gray-200 leading-relaxed">
            Estudiante destacada con excelencia académica y primer lugar en el ranking de egresados de un total de 39 estudiantes. Apasionada por el desarrollo de software y la resolución creativa de problemas tecnológicos.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center sm:items-start lg:items-center">
            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-center bg-white text-blue-800 border border-blue-800 hover:bg-blue-100 rounded-lg shadow-md transition"
            >
              <Code className="w-5 h-5" />
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-center bg-white text-blue-800 border border-blue-800 hover:bg-blue-100 rounded-lg shadow-md transition"
            >
              <Mail className="w-5 h-5" />
              Contactar
            </a>
            <a
              href="/cv/Catalina_SanJuan-CV.pdf"
              download="Catalina_San_Juan_CV.pdf"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-center bg-white text-blue-800 border border-blue-800 hover:bg-blue-100 rounded-lg shadow-md transition"
            >
              <Download className="w-5 h-5" />
              Descargar CV
            </a>
          </div>
          <a
            href="/scripts/Portafolio-Catalina-San-Juan.pdf"
            download="Portafolio-Catalina-San-Juan.pdf"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-center bg-white text-blue-800 border border-blue-800 hover:bg-blue-100 rounded-lg shadow-md transition"
          >
            <Download className="w-5 h-5" />
            Portafolio PDF
          </a>

        </div>

        {/* Imagen */}
        {/* Imagen + Logros */}
        <div className="lg:w-1/2 w-full flex flex-col items-center relative">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
            alt="Coding workspace"
            className="rounded-lg shadow-lg w-full"
          />
          <div className="flex flex-col gap-2 mt-4 lg:absolute lg:bottom-4 lg:right-4 lg:mt-0 items-center lg:items-end">
            <div className="bg-white text-blue-800 px-4 py-2 rounded-lg shadow-md flex items-center justify-center gap-2 text-center">
              <BadgeCheck className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Excelencia Académica</span>
            </div>
            <div className="bg-white text-blue-800 px-4 py-2 rounded-lg shadow-md flex items-center justify-center gap-2 text-center">
              <Trophy className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Primer Lugar en Ranking de Egresados</span>
            </div>
            <div className="bg-white text-blue-800 px-4 py-2 rounded-lg shadow-md flex items-center justify-center gap-2 text-center">
              <Trophy className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Cuadro de Honor 2024</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
