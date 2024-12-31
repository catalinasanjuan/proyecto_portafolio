import React from 'react';


export default function ProfessionalProfile() {
  return (
    <section id="professional-profile" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">Perfil Profesional</h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Foto */}
          <div className="flex-shrink-0">
          <img
            src="https://i.pinimg.com/736x/9a/d1/c8/9ad1c858cfd13f525f350a6e76e75cc1.jpg"
            alt="Foto de Catalina San Juan"
            className="rounded-full shadow-lg w-64 h-auto object-cover"
            />
          </div>

          {/* Texto */}
          <div className="text-lg text-gray-700 leading-relaxed lg:text-left text-center space-y-6">
            <p>
              <span className="font-semibold text-blue-600">Desarrolladora Front-End</span>{' '}
              con experiencia en la creación de interfaces dinámicas y responsivas utilizando
              frameworks como React, Next.js y Angular.
            </p>
            <p>
              Enfocada en{' '}
              <span className="font-semibold text-blue-600">brindar experiencias de usuario intuitivas</span>, accesibles y funcionales, con un diseño limpio y moderno.
            </p>
            <p>
              Apasionada por aprender nuevas tecnologías y mejorar continuamente en el ámbito del
              desarrollo de software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
