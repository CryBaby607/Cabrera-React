import React from 'react';
import { businessInfo, stats } from '../../constants/data';

const Trust = () => {
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - businessInfo.foundingYear;

  const StatCard = ({ stat }) => {
    const { value, label } = stat;
    
    return (
      <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
        <p className="text-3xl font-bold text-amber-300">{value}</p>
        <p className="text-sm text-gray-200">{label}</p>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-800 text-white" id="confianza">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Imagen o icono */}
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-radial from-amber-500/20 to-transparent rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-6xl">🤝</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contenido */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4">
                Nuestra experiencia
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Más de {yearsExperience} años de servicio y confianza
              </h2>
              
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                En <span className="text-amber-300 font-semibold">{businessInfo.name}</span> hemos acompañado a miles de familias 
                con el respeto, la dignidad y la profesionalidad que este momento requiere. 
                Nuestro compromiso es hacer más llevadero tu camino.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {stats.map((stat) => (
                  <StatCard key={stat.id} stat={stat} />
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  Atención personalizada
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  Respeto absoluto
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  Transparencia
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  Confidencialidad
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;