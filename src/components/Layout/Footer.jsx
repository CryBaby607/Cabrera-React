import React from 'react';
import { businessInfo } from '../../constants/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - businessInfo.foundingYear;

  const formatPhone = (phone) => {
    return phone.replace('+52', '').replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2 $3');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl text-gray-900">🕊️</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold">
                  {businessInfo.name}
                </h3>
                <p className="text-sm text-gray-400">
                  Desde {businessInfo.foundingYear}
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Más de {yearsExperience} años brindando acompañamiento respetuoso, 
              profesional y humano en los momentos más difíciles.
            </p>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">
              Contacto inmediato
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:${businessInfo.phone}`}
                  data-telefono={businessInfo.phone}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="text-xl">📞</span>
                  <span>
                    <span className="block text-sm text-gray-500">
                      Teléfono 24/7
                    </span>
                    <span className="font-semibold group-hover:text-amber-300">
                      {formatPhone(businessInfo.phone)}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${businessInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-telefono={businessInfo.whatsapp}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="text-xl">💬</span>
                  <span>
                    <span className="block text-sm text-gray-500">
                      WhatsApp
                    </span>
                    <span className="font-semibold group-hover:text-amber-300">
                      {formatPhone(businessInfo.whatsapp)}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-xl mt-1">📍</span>
                <div>
                  <p className="text-sm text-gray-500">
                    Dirección principal
                  </p>
                  <p className="text-gray-300">
                    {businessInfo.address}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Horarios y enlaces */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">
              Información
            </h4>
            <ul className="space-y-4">

              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-amber-300 transition-colors"
                >
                  Aviso de privacidad
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-amber-300 transition-colors"
                >
                  Planes de previsión
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-amber-300 transition-colors"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {businessInfo.foundingYear}-{currentYear} {businessInfo.name}. 
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;