import React from 'react';
import { businessInfo } from '../../constants/data';

const Header = () => {
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - businessInfo.foundingYear;

  const formatPhone = (phone) => {
    return phone.replace('+52', '').replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2 $3');
  };

  return (
    <header 
      id="header" 
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 border-b border-gray-100"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          {/* Logo y Nombre */}
          <a 
            href="#" 
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
              <span className="text-white text-2xl">🕊️</span>
            </div>
            <div>
              <h1 className="font-serif text-2xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                {businessInfo.name}
              </h1>
              <p className="text-sm text-gray-600">
                Desde {businessInfo.foundingYear}
              </p>
            </div>
          </a>

          {/* Información de contacto */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200">
                <span className="text-gray-700 text-lg">📞</span>
              </div>
              <div>
                <p className="text-xs text-gray-600">Atención 24 horas</p>
                <a 
                  href={`tel:${businessInfo.phone}`}
                  data-telefono={businessInfo.phone}
                  className="text-lg font-semibold text-gray-800 hover:text-amber-700 transition-colors duration-300 underline-elegant"
                >
                  {formatPhone(businessInfo.phone)}
                </a>
              </div>
            </div>
            
            {/* Botón principal */}
            <a 
              href={`tel:${businessInfo.phone}`}
              data-telefono={businessInfo.phone}
              className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2 transform hover:-translate-y-0.5"
            >
              <span>⏰</span>
              <span>Atención inmediata</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;