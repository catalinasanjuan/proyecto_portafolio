import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-white">Contacto</h2>

        <div className="flex flex-col items-center">
          {/* Tarjetas */}
          <div className="grid md:grid-cols-3 gap-16 mb-12">
            {/* Correo Electrónico */}
            <a href="mailto:catalina.sanjuan.dev@outlook.com" className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow min-h-[150px] min-w-[235px]">
              <Mail className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-800 dark:text-white">Correo electrónico</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                catalina.sanjuan.dev@outlook.com
              </p>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/catalina-sanjuan-programadora" className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow min-h-[150px] min-w-[235px]">
              <Linkedin className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">Conéctate conmigo</p>
            </a>

            {/* GitHub */}
            <a href="https://github.com/catalinasanjuan" className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow min-h-[150px] min-w-[235px]">
              <Github className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-800 dark:text-white">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">Mira mi código</p>
            </a>
          </div>

          {/* Botón centrado y destacado */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdOWGaQ0c4STwUMRMalFu57EiHyDu5OSK9JNo9n0-xlsXFbDw/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 text-lg font-bold px-10 py-5 bg-blue-600 text-white rounded-xl shadow-2xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Solicitar contacto profesional
          </a>
        </div>
      </div>
    </section>

  );
}