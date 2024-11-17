import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
        <div className="max-w-2xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
        {/* Correo Electrónico */}
        <a
          href="mailto:catalina.sanjuan.carvajal@gmail.com"
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow min-h-[150px] min-w-[235px]"
        >
          <Mail className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="font-semibold">Correo electrónico</h3>
          <p className="text-gray-600 text-sm text-center">
            catalina.sanjuan.carvajal@gmail.com
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/catalina-sanjuan-programadora"
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow min-h-[150px] min-w-[235px]"
        >
          <Linkedin className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="font-semibold">LinkedIn</h3>
          <p className="text-gray-600 text-sm text-center">Conéctate conmigo</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/catalinasanjuan"
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow min-h-[150px] min-w-[235px]"
        >
          <Github className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="font-semibold">GitHub</h3>
          <p className="text-gray-600 text-sm text-center">Mira mi código</p>
        </a>
      </div>

        </div>
      </div>
    </section>
  );
}
