import React, { useState } from 'react';
import { businessInfo } from '../../constants/data';
import HeroBackground from '../../assets/carrosa.jpg'; // Se mantiene la importación de la imagen

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const CallButton = ({ children, href, variant = 'primary', dataTelefono }) => {
    const baseStyles = "font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-3 group";
    
    const variants = {
      primary: 'bg-gray-700 hover:bg-gray-800 text-white', 
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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Imagen de fondo del hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90 z-10"></div>
        <img 
          src={HeroBackground} 
          alt="Acompañamiento respetuoso en momentos difíciles"
          className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${!imageLoaded ? 'image-loading' : ''}`}
          loading="eager"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      {/* Contenido del Hero */}
      <div className="container mx-auto px-4 relative z-20 py-16">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Título principal */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
            <span className="text-amber-300">Estamos contigo</span><br />
            <span className="text-3xl md:text-4xl lg:text-5xl">en los momentos más difíciles</span>
          </h1>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-10"> 
            <CallButton
              href={`tel:${businessInfo.phone}`}
              dataTelefono={businessInfo.phone}
              variant="primary"
            >
              <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">📞</span>
              <span>Llamar ahora</span>
            </CallButton>
            
            <CallButton
              href={`https://wa.me/${businessInfo.whatsapp}`}
              dataTelefono={businessInfo.whatsapp}
              variant="whatsapp"
            >
              <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">💬</span>
              <span>WhatsApp</span>
            </CallButton>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;