import React from 'react';
import { processSteps } from '../../constants/data';

const Process = () => {
  const ProcessStep = ({ step }) => {
    const { number, title, description } = step;
    
    return (
      <div className="relative group">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white">
            {number}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 pt-12 shadow-lg border border-gray-100 h-full transform transition-all duration-300 group-hover:shadow-xl">
          <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4 text-center">
            {title}
          </h3>
          <p className="text-gray-600 text-center">
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="proceso">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
            Nuestro compromiso
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Un proceso claro y respetuoso
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Te acompañamos en cada paso con transparencia, sensibilidad y atención personalizada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <ProcessStep key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;