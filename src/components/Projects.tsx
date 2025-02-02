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
      credentialsFile: "/credenciales/credenciales_Sistema_de_gestion_de_productos.txt",
    },
    {
      title: "Adivina el número",
      tools: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ],
      description: "Juego web dinámico y educativo, desarrollado para mejorar la lógica y la diversión de los usuarios al intentar adivinar números generados aleatoriamente. Desarrollado en HTML, CSS y JavaScript.",
      image: "https://i.pinimg.com/736x/1d/42/06/1d42061b38e7ebcbd1eab0592912b55f.jpg",
      github: "https://github.com/catalinasanjuan/Adivina-el-numero.git",
      demoLink: "https://advinaelnumero.netlify.app/",
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
        { name: "Flask", icon: "https://i.pinimg.com/736x/d8/c2/a2/d8c2a2b6d5e6a2a5d3aaa82105e3879a.jpg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      ],
      description: "Aplicación Web para gestionar libros, autores y bodegas de la librería El Gran Poeta. Desarrollado con Python y Flask.",
      image: "https://i.pinimg.com/736x/eb/b0/5b/ebb05b4eb5ab67b4a643c7144f1ef8e0.jpg",
      github: "https://github.com/catalinasanjuan/Librer-aElGranPoeta.git",
      demoLink: "https://web-production-bdd22.up.railway.app/login",
      credentialsFile: "/credenciales/credenciales_Libreria_El_Gran_Poeta.txt",
    },
    {
      title: "Spin The Dare",
      tools: [
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      ],
      description: "Aplicación web interactiva que genera desafíos aleatorios en diferentes categorías con una estética inspirada en casinos. Desarrollado con Angular y Howler.js para efectos de sonido.",
      image: "https://i.pinimg.com/736x/85/6b/2f/856b2f06cc0ef316e217af105b25b745.jpg",
      github: "https://github.com/catalinasanjuan/Spin-The-Dare.git",
      demoLink: "https://spin-the-dare.netlify.app/"
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
      image: "https://i.pinimg.com/736x/26/73/61/2673611a2741c0c33c2b09566ead511d.jpg",
      github: "https://github.com/catalinasanjuan/INACAPludi-MarketPlace---Landing-Page.git",
      demoLink: "https://inacapludi-marketplace-app.netlify.app/",
    },
    {
      "title": "The Clow Readings ",
      "tools": [
        { "name": "Vue 3", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { "name": "TypeScript", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { "name": "Tailwind CSS", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { "name": "GSAP", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { "name": "Netlify", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" }
      ],
      "description": "Aplicación interactiva para realizar una tirada mágica de Cartas Clow, inspirada en el universo de Cardcaptor Sakura. Desarrollado con Vue 3 y TypeScript.",
      "image": "https://i.pinimg.com/736x/b2/39/4f/b2394f57ecff4d9c09d9ad06f31104f1.jpg", 
      "github": "https://github.com/catalinasanjuan/The-Clow-Readings.git",
      "demoLink": "https://the-clow-readings.netlify.app/"
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
