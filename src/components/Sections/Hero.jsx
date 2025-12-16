import React, { useState } from 'react';
import { businessInfo } from '../../constants/data';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - businessInfo.foundingYear;

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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Imagen de fondo del hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
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
          {/* Sello de confianza */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-radial from-amber-500/20 to-transparent border-2 border-amber-500/30 flex items-center justify-center">
                <span className="text-4xl">🤝</span>
              </div>
            </div>
          </div>
          
          {/* Título principal */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
            <span className="text-amber-300">Estamos contigo</span><br />
            <span className="text-3xl md:text-4xl lg:text-5xl">en los momentos más difíciles</span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed">
            Con más de {yearsExperience} años de experiencia, ofrecemos atención funeraria inmediata, 
            profesional y respetuosa las 24 horas del día.
          </p>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
          
          {/* Información adicional */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-amber-300 font-semibold">⏰ 24/7</p>
              <p className="text-sm text-gray-100">Atención inmediata</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-amber-300 font-semibold">📋</p>
              <p className="text-sm text-gray-100">Asesoría completa</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-amber-300 font-semibold">🚙</p>
              <p className="text-sm text-gray-100">Traslados nacionales</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Flecha indicadora de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <span className="text-white text-2xl">↓</span>
      </div>
    </section>
  );
};

export default Hero;