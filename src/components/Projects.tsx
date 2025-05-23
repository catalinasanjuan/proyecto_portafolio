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
      title: "CatalinaBot - Chat Inteligente Con IA",
      tools: [
      
        { name: "OpenAI", icon: "https://i.pinimg.com/736x/cb/c4/d6/cbc4d6dfd153f198255116df5b05d25e.jpg" },
        { name: "Make", icon: "https://i.pinimg.com/736x/0a/49/1e/0a491e80f61b1614ac1e8c06e949b963.jpg" },
        { name: "WebHook", icon: "data:image/png;base64,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" }
      ],
      description: "Chatbot inteligente que responde preguntas sobre mi experiencia y habilidades en tiempo real. Desarrollado con React y Make, utiliza la API de OpenAI para generar respuestas naturales desde un webhook integrado a mi portafolio.",
      highlight: "¿Conversemos?",
      image: "https://i.pinimg.com/736x/6c/a4/df/6ca4df9f5f1c12077e578406ca9381f4.jpg",
      
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
      demoVideo: "/videos/demo-playwright-flujo.mp4",
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
      demoVideo: "/videos/demo-pywinauto-flujo.mp4",
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
