import React from 'react';
import { services } from '../../constants/data';

const Services = () => {
  const ServiceCard = ({ service }) => {
    const { icon, title, description } = service;
    
    return (
      <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-amber-200 hover:transform hover:-translate-y-2 h-full">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-amber-400 rounded-xl flex items-center justify-center mb-6">
          <span className="text-3xl text-gray-800">{icon}</span>
        </div>
        <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white" id="servicios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium mb-4">
            Nuestros servicios
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Atención integral y respetuosa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos un acompañamiento completo durante todo el proceso, 
            con la sensibilidad y profesionalismo que merece este momento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;