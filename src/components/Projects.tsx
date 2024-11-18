import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Sistema de Gestión de Productos",
    description: "Aplicación Web para gestionar productos y categorías. Desarrollado con Phyton y Django.",
    image: "https://blog.destacame.cl/wp-content/uploads/2024/02/Destacame_privacidad_de_datos-1024x683.jpg",
    github: "https://github.com/catalinasanjuan/Sistema_de_Gesti-n_de_Productos.git",
    demo: "#"
  },
  {
    title: "INACAPludi",
    description: "Aplicación Web para gestionar el préstamo de juegos de mesa del club INACAPludi para los alumnos de Inacap. Desarrollado con Next.js .",
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80",
    github: "https://github.com/catalinasanjuan/INACAPludi.git",
    demo: "#"
  },
  {
    title: "Sistema de Gestión de Cultivos",
    description: "Aplicación móvil para gestionar cultivos y cosechas. Desarrollado con java en Android Studio.",
    image: "https://www.dimensiona.com/wp-content/uploads/2021/01/beneficios-app-768x439.jpg",
    github: "https://github.com/catalinasanjuan/verduritas_sa_app.git",
    demo: "#"
  },
  {
    title: "Adivina el número",
    description: "Juego web dinámico y educativo, desarrollado para mejorar la lógica y la diversión de los usuarios al intentar adivinar números generados aleatoriamente. Desarrollado en HTML, CSS y JavaScript.",
    image: "https://i.pinimg.com/736x/d1/f5/47/d1f54779d59ff1fa53a01e8808ebc0be.jpg",
    github: "https://github.com/catalinasanjuan/Adivina-el-numero.git",
    demo: "#"
  },
  {
    title: "Skymon Dash",
    description: "Juego de plataformas desarrollado con Python y Pygame.",
    image: "https://i.pinimg.com/736x/1f/54/c8/1f54c85d64378fca64d2fc075ba042c3.jpg",
    github: "https://github.com/catalinasanjuan/Skymon-Dash.git",
    demo: "#"
  },
  {
    title: "Calculadora de notas",
    description: "Herramienta Web práctica y eficiente para estudiantes y profesores que deseen calcular promedios académicos de manera rápida y sencilla. Desarrollado en HTML, CSS y JavaScript",
    image: "https://github.com/catalinasanjuan/Calculadora-de-Notas.git",
    github: "https://github.com/catalinasanjuan/verduritas_sa_app.git",
    demo: "#"
  },
  {
    title: "INACAPludi MarketPlace - Landing Page",
    description: "Solución innovadora para el comercio en línea, diseñada para ofrecer una experiencia de usuario sencilla y eficiente",
    image: "https://www.dimensiona.com/wp-content/uploads/2021/01/beneficios-app-768x439.jpg",
    github: "https://github.com/catalinasanjuan/INACAPludi-MarketPlace---Landing-Page.git",
    demo: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    <Github className="w-5 h-5" />
                    Código
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}