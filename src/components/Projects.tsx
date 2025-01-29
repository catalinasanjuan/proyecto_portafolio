import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Gestión de Productos",
      tools: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
      ],
      description: "Aplicación Web para gestionar productos y categorías. Desarrollado con Python y Django.",
      image: "https://i.pinimg.com/736x/d7/22/a9/d722a9afc510c23be759d23d4c8f56a9.jpg",
      github: "https://github.com/catalinasanjuan/Sistema_de_Gesti-n_de_Productos.git",
      demoLink: "https://catalina.pythonanywhere.com/",
      credentialsFile: "/credenciales/credenciales_Sistema de Gestión de Productos.txt",
    },
    {
      title: "Adivina el número",
      tools: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ],
      description: "Juego web dinámico y educativo, desarrollado para mejorar la lógica y la diversión de los usuarios al intentar adivinar números generados aleatoriamente. Desarrollado en HTML, CSS y JavaScript.",
      image: "https://i.pinimg.com/736x/d1/f5/47/d1f54779d59ff1fa53a01e8808ebc0be.jpg",
      github: "https://github.com/catalinasanjuan/Adivina-el-numero.git",
      demoLink: "https://adivina-el-numero-app.netlify.app/",
    },
    {
      title: "Automatización de aplicaciones de escritorio",
      tools: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Pywinauto", icon: "https://user-images.githubusercontent.com/666037/45233486-c4fc5380-b287-11e8-80ce-b9a911a6cb0d.png" },
      ],
      description: "Software de automatización desktop utilizando de prueba la app Notepad. Desarrollado con Phyton y Pywinauto.",
      image: "https://i.pinimg.com/736x/8f/58/fb/8f58fba71cdc2bfb752038cf4fd44b20.jpg",
      github: "https://github.com/catalinasanjuan/Automatizaci-n_Pywinauto.git",
    },
    {
      title: "Librería El Gran Poeta",
      tools: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Flask", icon: "ANd9GcQg9yOAxnCTKdVvjRAaSMt8U8GG9UyL6uUf2w53HqyBmVbUayQJzqshqr" },
      ],
      description: "Aplicación Web para gestionar libros y autores. Desarrollado con Python y Flask.",
      image: "https://i.pinimg.com/736x/eb/b0/5b/ebb05b4eb5ab67b4a643c7144f1ef8e0.jpg",
      github: "https://github.com/catalinasanjuan/Librer-aElGranPoeta.git",
      demoLink: "https://web-production-bdd22.up.railway.app/",
      credentialsFile: "/credenciales/credenciales_Librería El Gran Poeta.txt",
    },
    {
      title: "Skymon Dash",
      tools: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Pygame", icon: "https://www.pygame.org/docs/_images/pygame_logo.png" },
      ],
      description: "Juego de plataformas desarrollado con Python y Pygame.",
      image: "https://i.pinimg.com/736x/1f/54/c8/1f54c85d64378fca64d2fc075ba042c3.jpg",
      github: "https://github.com/catalinasanjuan/Skymon-Dash.git",
    },
    {
      title: "Calculadora de notas",
      tools: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ],
      description: "Herramienta Web práctica y eficiente para estudiantes y profesores que deseen calcular promedios académicos de manera rápida y sencilla. Desarrollado en HTML, CSS y JavaScript",
      image: "https://i.pinimg.com/736x/2f/b7/4e/2fb74e2aae3c64d80ef0dbe28f1e0104.jpg",
      github: "https://github.com/catalinasanjuan/Calculadora-de-Notas.git",
      demoLink: "https://calculadora-de-notas-app.netlify.app/",
    },
    {
      title: "INACAPludi MarketPlace - Landing Page",
      tools: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ],
      description: "Solución innovadora para el comercio en línea, diseñada para ofrecer una experiencia de usuario sencilla y eficiente",
      image: "https://www.dimensiona.com/wp-content/uploads/2021/01/beneficios-app-768x439.jpg",
      github: "https://github.com/catalinasanjuan/INACAPludi-MarketPlace---Landing-Page.git",
      demoLink: "https://inacapludi-marketplace-app.netlify.app/",
    },
    {
      title: "Sistema de Gestión de Cultivos",
      tools: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Android Studio", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg" },
      ],
      description:
        "Aplicación móvil para gestionar cultivos y cosechas. Desarrollado con Java en Android Studio.",
      image:
        "https://i.pinimg.com/736x/71/98/4d/71984d9b72f9f62ee4892ecbd9ff1575.jpg",
      github: "https://github.com/catalinasanjuan/verduritas_sa_app_movil.git",
      demoLink: "/apk/verduritas_sa_app-debug.apk", // Enlace al APK
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
              {/* Imagen del proyecto */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Renderizado de herramientas */}
              {project.tools && (
                <div className="flex gap-9 mt-4 px-9">
                  {project.tools.map((tool, idx) => (
                    <img
                      key={idx}
                      src={tool.icon}
                      alt={tool.name}
                      title={tool.name}
                      className="w-23 h-8"
                    />
                  ))}
                </div>
              )}
              <div className="p-6">
                {/* Título y descripción */}
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Enlaces (Código y Manifestación) */}
                <div className="flex gap-4 mt-4">
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
                      Demo
                    </a>
                  )}
                  {/* Verificación para archivo de credenciales */}
                  {project.credentialsFile && (
                    <a
                      href={project.credentialsFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Credenciales
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
