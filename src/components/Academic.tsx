import React from 'react';
import { BookOpen, Award, Star, Code, Brain, ClipboardList, Shield } from 'lucide-react';

export default function Academic() {
  return (
    <section id="academic" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Formación Académica</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Educación */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-10 h-10 text-blue-600 flex-shrink-0"/>
              <h3 className="text-xl font-bold">Educación</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Técnico Analista Programador</h4>
                <p className="text-gray-600">INACAP</p>
                <p className="text-gray-500">2023 - Presente</p>
              </div>
            </div>
          </div>

          {/* Logros y Reconocimientos */}
          <div className="bg-gray-50 rounded-lg p-3 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <h3 className="text-xl font-bold leading-tight flex-1">Logros y Reconocimientos</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Excelencia Académica</h4>
                  <p className="text-gray-600">
                    Promedio sobresaliente en el programa de Analista Programador.
                  </p>
                </div>
              </div>
            </div>
          </div>



          {/* Habilidades Técnicas */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Code className="w-10 h-10 text-blue-600 flex-shrink-0"/>
              <h3 className="text-xl font-bold">Habilidades Técnicas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Python</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Java</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">TypeScript</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">GDScript</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">React</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Django</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">SQL</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">HTML/CSS</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Node.js</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Next.js</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Android Studio</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Angular</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Firebase</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Firestore</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Godot</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Boostrap</span>

            </div>
          </div>

          {/* Intereses */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Brain className="w-10 h-10 text-blue-600 flex-shrink-0"/>
              <h3 className="text-xl font-bold">Intereses</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600">
              <li>Desarrollo de software</li>
              <li>Inteligencia artificial</li>
              <li>Desarrollo web front-end</li>
              <li>Diseño de interfaces (UX/UI)</li>
              <li>Bases de datos</li>
            </ul>
          </div>

                  {/* Metodologías Ágiles */}
        <div className="bg-gray-50 rounded-lg p-7 shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <ClipboardList className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <h3 className="text-xl font-bold leading-tight">Metodologías Ágiles</h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              Experiencia práctica con Scrum en la planificación, ejecución y entrega de proyectos.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li><span className="font-bold">Roles desempeñados:</span> Scrum Master y miembro del team developers.</li>
              <li>Implementación de tableros Kanban para la organización visual de tareas y el seguimiento de sprints.</li>
              <li><span className="font-bold">Herramientas utilizadas:</span> Notion, Onedrive y GitHub Projects.</li>
              <li>Enfoque en la mejora continua mediante retrospectivas y entregas incrementales.</li>
            </ul>
          </div>
        </div>
                  {/* Fortalezas */}
                  <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold">Fortalezas</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <span className="font-semibold">Trabajo en equipo:</span> Colaboro eficazmente con equipos
                multidisciplinarios, fomentando una comunicación clara y respetuosa.
              </li>
              <li>
                <span className="font-semibold">Responsabilidad:</span> Compromiso con la calidad y el cumplimiento de plazos establecidos en todos mis proyectos.
              </li>
              <li>
                <span className="font-semibold">Adaptabilidad:</span> Capacidad para aprender rápidamente y ajustarme a nuevas tecnologías y entornos de trabajo.
              </li>
              <li>
                <span className="font-semibold">Resolución de problemas:</span> Enfoque analítico para identificar y solucionar desafíos técnicos de manera eficiente.
              </li>
              <li>
                <span className="font-semibold">Proactividad:</span> Toma de iniciativa para proponer mejoras y optimizar procesos en proyectos.
              </li>
              <li>
                <span className="font-semibold">Organización:</span> Gestión efectiva del tiempo, priorizando tareas para maximizar resultados.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
