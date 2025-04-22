import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experiencia Profesional</h2>

        <div className="space-y-12">
          {/* ACL */}
          <div className="border-l-4 border-blue-600 pl-6 relative bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="absolute -left-[1.4rem] top-6 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-600">
              <img 
                src="https://www.aclti.com/hubfs/Logo%20ACL%202021/Logo_rojo.png" 
                alt="ACL Logo"
                className="w-6 h-6 object-contain hover:scale-105 hover:brightness-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-blue-800">QA Analyst PPJ - ACL Tecnología</h3>
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="w-4 h-4 mr-2 text-blue-600" />
              Marzo 2025 - Actualidad
            </div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Diseño y ejecución de pruebas.</li>
              <li>Documentación técnica.</li>
            </ul>
          </div>

          {/* Línea divisoria en mobile */}
          <div className="block lg:hidden border-t border-gray-300 mx-auto w-3/4" />

          {/* Atrys */}
          <div className="border-l-4 border-blue-600 pl-6 relative bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="absolute -left-[1.4rem] top-6 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-600">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Atrys_logo.svg" 
                alt="Atrys Logo"
                className="w-6 h-6 object-contain hover:scale-105 hover:brightness-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-blue-800">QA Junior (Práctica Profesional) - Atrys Chile</h3>
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="w-4 h-4 mr-2 text-blue-600" />
              Enero 2025 - Marzo 2025
            </div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Apoyo en pruebas manuales y reporte de bugs.</li>
              <li>Colaboración en la creación de casos de prueba con Playwright.</li>
              <li>Integración de pruebas en pipelines CI/CD con Jenkins y Docker.</li>
              <li>Uso de herramientas como JIRA.</li>
              <li>Colaboración con equipo de desarrollo ágil (Scrum).</li>
              <li>Documentación de casos de prueba, generación de reportes y seguimiento en Bitbucket.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
