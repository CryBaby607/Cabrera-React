import React from 'react';
import { businessInfo } from '../../constants/data';

const ContactInfo = () => {
  const formatPhone = (phone) => {
    return phone.replace('+52', '').replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2 $3');
  };

  const ContactCard = ({ icon, title, content, link, isLink = false }) => {
    return (
      <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-xl text-amber-600">{icon}</span>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-gray-800 mb-2">
              {title}
            </h3>
            {isLink ? (
              <a 
                href={link} 
                className="text-gray-600 hover:text-amber-700 transition-colors"
                data-telefono={content}
              >
                {content}
              </a>
            ) : (
              <p className="text-gray-600">{content}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Estamos aquí para ti
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Puedes contactarnos por cualquiera de estos medios. Tu llamada es nuestra prioridad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ContactCard
            icon="📞"
            title="Teléfono 24/7"
            content={formatPhone(businessInfo.phone)}
            link={`tel:${businessInfo.phone}`}
            isLink={true}
          />
          
          <ContactCard
            icon="💬"
            title="WhatsApp"
            content={formatPhone(businessInfo.whatsapp)}
            link={`https://wa.me/${businessInfo.whatsapp}`}
            isLink={true}
          />
          
          <ContactCard
            icon="📧"
            title="Correo electrónico"
            content={businessInfo.email}
            link={`mailto:${businessInfo.email}`}
            isLink={true}
          />
          
          <ContactCard
            icon="📍"
            title="Dirección"
            content={businessInfo.address}
          />
          
          <ContactCard
            icon="⏰"
            title="Horario de atención"
            content="24 horas, 365 días al año"
          />
          
          <ContactCard
            icon="🏛️"
            title="Años de servicio"
            content={`Desde ${businessInfo.foundingYear}`}
          />
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-8">
            También puedes visitarnos en nuestras instalaciones con previa cita
          </p>
          <a 
            href={`tel:${businessInfo.phone}`}
            data-telefono={businessInfo.phone}
            className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span className="mr-2">📞</span>
            Solicitar información
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;