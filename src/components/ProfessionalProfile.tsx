import React from 'react';

export default function ProfessionalProfile() {
  return (
    <section
      id="professional-profile"
      className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 dark:text-white mb-8">
          Perfil Profesional
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Foto */}
          <div className="flex-shrink-0">
            <img
              src="https://i.pinimg.com/736x/47/6a/35/476a35516a76d328f4975855232e14e5.jpg"
              alt="Foto de Catalina San Juan"
              className="rounded-full shadow-lg w-64 h-auto object-cover"
            />
          </div>

          {/* Texto */}
          <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed lg:text-left text-center space-y-6">
            <p>
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Desarrolladora Front-End y QA Automation Engineer
              </span>{' '}
              con experiencia en la creación de interfaces dinámicas y responsivas utilizando
              frameworks como React, Next.js y Angular.
            </p>
            <p>
              Enfocada en el{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                desarrollo de software y automatización de pruebas
              </span>{' '}
              con herramientas como{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Playwright, Selenium, Jenkins y Docker
              </span>, optimizando la calidad y eficiencia en procesos CI/CD.
            </p>
            <p>
              Apasionada por aprender nuevas tecnologías y mejorar continuamente en el ámbito del
              desarrollo de software, aplicando Scrum y metodologías ágiles para una gestión eficiente de proyectos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
