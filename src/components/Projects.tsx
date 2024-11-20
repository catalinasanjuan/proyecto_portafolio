import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Gestión de Productos",
      description: "Aplicación Web para gestionar productos y categorías. Desarrollado con Phyton y Django.",
      image: "https://blog.destacame.cl/wp-content/uploads/2024/02/Destacame_privacidad_de_datos-1024x683.jpg",
      github: "https://github.com/catalinasanjuan/Sistema_de_Gesti-n_de_Productos.git",
    },
    {
      title: "Sistema de Gestión de Cultivos",
      description: "Aplicación móvil para gestionar cultivos y cosechas. Desarrollado con java en Android Studio.",
      image: "https://www.dimensiona.com/wp-content/uploads/2021/01/beneficios-app-768x439.jpg",
      github: "https://github.com/catalinasanjuan/verduritas_sa_app_movil.git",
    },
    {
      title: "Adivina el número",
      description: "Juego web dinámico y educativo, desarrollado para mejorar la lógica y la diversión de los usuarios al intentar adivinar números generados aleatoriamente. Desarrollado en HTML, CSS y JavaScript.",
      image: "https://i.pinimg.com/736x/d1/f5/47/d1f54779d59ff1fa53a01e8808ebc0be.jpg",
      github: "https://github.com/catalinasanjuan/Adivina-el-numero.git",
      demoLink: "https://adivina-el-numero-app.netlify.app/",
    },
    {
      title: "Skymon Dash",
      description: "Juego de plataformas desarrollado con Python y Pygame.",
      image: "https://i.pinimg.com/736x/1f/54/c8/1f54c85d64378fca64d2fc075ba042c3.jpg",
      github: "https://github.com/catalinasanjuan/Skymon-Dash.git",
    },
    {
      title: "Calculadora de notas",
      description: "Herramienta Web práctica y eficiente para estudiantes y profesores que deseen calcular promedios académicos de manera rápida y sencilla. Desarrollado en HTML, CSS y JavaScript",
      image: "https://i.pinimg.com/736x/2f/b7/4e/2fb74e2aae3c64d80ef0dbe28f1e0104.jpg",
      github: "https://github.com/catalinasanjuan/Calculadora-de-Notas.git",
      demoLink: "https://calculadora-de-notas-app.netlify.app/",
    },
    {
      title: "INACAPludi MarketPlace - Landing Page",
      description: "Solución innovadora para el comercio en línea, diseñada para ofrecer una experiencia de usuario sencilla y eficiente",
      image: "https://www.dimensiona.com/wp-content/uploads/2021/01/beneficios-app-768x439.jpg",
      github: "https://github.com/catalinasanjuan/INACAPludi-MarketPlace---Landing-Page.git",
      demoLink: "https://inacapludi-marketplace-app.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Mis proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <Code className="w-5 h-5" />
                    Código
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Manifestación
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
