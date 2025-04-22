import React from 'react';
import { Briefcase } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Experiencia Profesional</h2>

        <div className="border-l-4 border-blue-600 pl-8 space-y-16 relative">
          {/* ACL */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
                <img
                src="https://www.aclti.com/hubfs/Logo%20ACL%202021/Logo_rojo.png"
                alt="Logo ACL"
                className="w-14 h-auto object-contain"
                />
                <h3 className="text-xl font-bold text-blue-800">
                QA Analyst PPJ - ACL Tecnología
                </h3>
            </div>
            <p className="text-sm text-gray-500">Marzo 2025 - Actualidad</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Diseño y ejecución de pruebas.</li>
                <li>Documentación técnica. </li>
            </ul>
            </div>


          {/* Atrys */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Atrys_logo.svg"
                alt="Logo Atrys"
                className="w-14 h-auto object-contain"
                />
                <h3 className="text-xl font-bold text-blue-800">
                QA Junior (Práctica Profesional) - Atrys Chile
                </h3>
            </div>
            <p className="text-sm text-gray-500">Enero 2025 - Marzo 2025</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Apoyo en pruebas manuales y reporte de bugs.</li>
                <li>Colaboración en la creación de casos de prueba con Playwhrigt.</li>
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
