import React from 'react';
import { businessInfo } from '../../constants/data';

const FinalCTA = () => {
  const formatPhone = (phone) => {
    return phone.replace('+52', '').replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2 $3');
  };

  const CallButton = ({ children, href, variant = 'primary', dataTelefono }) => {
    const baseStyles = "font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-3 group";
    
    const variants = {
      primary: 'bg-amber-600 hover:bg-amber-700 text-white',
      whatsapp: 'bg-green-600 hover:bg-green-700 text-white',
    };
    
    return (
      <a 
        href={href}
        className={`${baseStyles} ${variants[variant]}`}
        data-telefono={dataTelefono}
      >
        {children}
      </a>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-200 to-amber-400 rounded-full flex items-center justify-center mb-8 shadow-2xl">
            <span className="text-3xl">📞</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Estamos aquí para acompañarte
          </h2>
          
          <p className="text-xl mb-10 text-gray-100 max-w-2xl mx-auto">
            No estás solo en este momento. Llámanos ahora y te atenderemos con la sensibilidad y profesionalismo que necesitas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <CallButton
              href={`tel:${businessInfo.phone}`}
              dataTelefono={businessInfo.phone}
              variant="primary"
            >
              <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">📞</span>
              <span className="text-lg">
                Llamar: {formatPhone(businessInfo.phone)}
              </span>
            </CallButton>
            
            <CallButton
              href={`https://wa.me/${businessInfo.whatsapp}`}
              dataTelefono={businessInfo.whatsapp}
              variant="whatsapp"
            >
              <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">💬</span>
              <span className="text-lg">WhatsApp 24/7</span>
            </CallButton>
          </div>
          
          <p className="text-gray-200 text-sm">
            También puedes escribirnos a:{' '}
            <a 
              href={`mailto:${businessInfo.email}`} 
              className="text-amber-300 hover:text-amber-400 transition-colors"
            >
              {businessInfo.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;