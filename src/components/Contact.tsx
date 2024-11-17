import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:your.catalina.sanjuan.carvajal@gmail.com" 
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Mail className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600 text-sm text-center">your.email@example.com</p>
            </a>
            
            <a href="www.linkedin.com/in/catalina-sanjuan-programadora"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Linkedin className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-gray-600 text-sm text-center">Connect with me</p>
            </a>
            
            <a href="https://github.com/catalinasanjuan"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Github className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-gray-600 text-sm text-center">See my code</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}