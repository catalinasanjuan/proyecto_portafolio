import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Automatización con Make",
      tools: [
        { name: "Make", icon: "https://i.pinimg.com/736x/0a/49/1e/0a491e80f61b1614ac1e8c06e949b963.jpg"},
        { name: "Google Sheets", icon: "https://i.pinimg.com/736x/75/c8/4e/75c84e33a653db7e7d8deb5f29e44aab.jpg" },
        { name: "Google Forms", icon: "https://i.pinimg.com/736x/92/93/4d/92934dd38feadc783fb3e863d73883ec.jpg" },
        { name: "Google Docs", icon: "https://i.pinimg.com/736x/c5/2d/85/c52d850030d3dfcec19ea63767e31459.jpg" },
        { name: "SMTP", icon: "https://i.pinimg.com/736x/25/05/32/25053273b25f9cda399f4db27616fc4e.jpg" },
      ],
      description: "Automatización de contacto profesional utilizando Google Forms, Google Sheets y Make. Al completar el formulario, se dispara un flujo que recopila, organiza y envía la información automáticamente al destinatario.",
      highlight: "Solicitar contacto profesional",
      image: "https://i.pinimg.com/736x/82/dc/4b/82dc4b31c6263f60d4b05a90befb4901.jpg",
      demoVideo: "/videos/demo-make-flujo.mp4"
      
    },
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
      title: "INACAPludi MarketPlace - Landing Page",
      tools: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ],
      description: "Solución innovadora para el comercio en línea, diseñada para ofrecer una experiencia de usuario sencilla y eficiente",
      image: "https://i.pinimg.com/736x/26/73/61/2673611a2741c0c33c2b09566ead511d.jpg",
      github: "https://github.com/catalinasanjuan/INACAPludi-MarketPlace---Landing-Page.git",
      demoLink: "https://inacapludi-market-place-app.netlify.app/",
    },
    {
      title: "Automatización con Playwright",
      tools: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Playwright", icon: "data:image/png;base64,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" },
      ],
      description: "Automatización de formularios de Google Forms utilizando Playwright. Se desarrolló un script para completar y enviar formularios automáticamente, mejorando la eficiencia en la recolección de datos.",
      image: "https://i.pinimg.com/736x/ed/55/51/ed5551e2633e9b56e22bad6c947e43ac.jpg",
      github: "https://github.com/catalinasanjuan/Automatizaci-n-google-forms.git",
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
      "title": "IsekAI Generator",
      "tools": [
        { "name": "Vue 3", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { "name": "TypeScript", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { "name": "GSAP", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { "name": "Cohere AI", "icon": "https://avatars.githubusercontent.com/u/54850923?s=200&v=4" },
        
      ],
      "description": "Generador de historias Isekai basado en IA. Los usuarios responden preguntas sobre su personalidad, forma de muerte y poder especial para recibir una historia personalizada generada con Cohere AI.",
      "image": "https://i.pinimg.com/736x/16/71/84/16718428e1722967be263cf4bed0e0ef.jpg",  
      "github": "https://github.com/catalinasanjuan/IsekIA-Generator.git",
      "demoLink": "https://isekai-generator.netlify.app/"
    },
    {
      "title": "GlitchVHS",
      "tools": [
        { "name": "Vue 3", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { "name": "TypeScript", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { "name": "Fabric.js", "icon": "https://pbs.twimg.com/profile_images/1436375272/Screen_shot_2011-07-11_at_1.55.36_AM_400x400.png" }
      ],
      "description": "Aplicación web para transformar imágenes con efectos glitch y VHS retro. Los usuarios pueden subir imágenes, aplicar filtros con un solo clic y descargarlas en alta calidad.",
      "image": "https://i.pinimg.com/736x/c5/88/fc/c588fc2db87f193e53725f04ee2d487a.jpg",
      "github": "https://github.com/catalinasanjuan/GlitchVHS.git",
      "demoLink": "https://glitchvhs.netlify.app"
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
    
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-white">Mis proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
            key={index}
            className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white rounded-lg shadow-md overflow-hidden"
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

                {project.title === "Automatización con Make" ? (
                  <>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Automatización de contacto profesional utilizando Google Forms, Google Sheets y Make. 
                      Al completar el formulario, se dispara un flujo que recopila, organiza y envía la información automáticamente al destinatario.
                    </p>
                    <div className="mt-3">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Un ejemplo funcional es el botón:
                      </span>
                      <a
                        href="#contact"
                        className="mt-2 inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition-all duration-300"
                      >
                        {project.highlight}
                      </a>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                )}


                {/* Enlaces (Código y Manifestación) */}
                <div className="flex gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <Code className="w-5 h-5" />
                    Código
                  </a>
                )}

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

                {project.demoVideo && (
                  <a
                    href={project.demoVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo Video
                  </a>
                )}

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
