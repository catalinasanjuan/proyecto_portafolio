import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
  <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-white">Contacto</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          {/* Correo Electrónico */}
          <a
            href="mailto:catalina.sanjuan.carvajal@gmail.com"
            className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow min-h-[150px] min-w-[235px]"
          >
            <Mail className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-800 dark:text-white">Correo electrónico</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
              catalina.sanjuan.carvajal@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/catalina-sanjuan-programadora"
            className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow min-h-[150px] min-w-[235px]"
          >
            <Linkedin className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center">Conéctate conmigo</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/catalinasanjuan"
            className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow min-h-[150px] min-w-[235px]"
          >
            <Github className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-800 dark:text-white">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center">Mira mi código</p>
          </a>

          {/* Botón centrado en la segunda columna */}
          <div className="col-span-1 md:col-start-2 mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdOWGaQ0c4STwUMRMalFu57EiHyDu5OSK9JNo9n0-xlsXFbDw/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-colors duration-300"
            >
              Solicitar contacto profesional
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}
