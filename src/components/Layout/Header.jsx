import React, { useState } from 'react';
import { businessInfo } from '../../constants/data';

const Header = () => {
  // 1. Estado para controlar si el menú móvil está abierto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // 3. Función para cerrar el menú al hacer clic en un enlace (navegación suave)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      id="header" 
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 border-b border-gray-100"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          
          {/* Logo y Nombre */}
          <a 
            href="#" 
            className="group"
          >
            <div>
              <h1 className="font-serif text-2xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                {businessInfo.name}
              </h1>
              <p className="text-sm text-gray-600">
                Desde {businessInfo.foundingYear}
              </p>
            </div>
          </a>
          
          {/* Botón de Hamburguesa (Solo visible en pantallas pequeñas) */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {/* Ícono de hamburguesa o X */}
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>

          {/* Navegación Principal (Escritorio) */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#servicios" 
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 text-lg underline-elegant"
            >
              Servicios
            </a>
            <a 
              href="#proceso" 
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 text-lg underline-elegant"
            >
              Proceso
            </a>
            <a 
              href="#confianza" 
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 text-lg underline-elegant"
            >
              Confianza
            </a>
            <a 
              href="#contacto" 
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 text-lg underline-elegant"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>

      {/* Menú Móvil (Aparece al hacer clic en la hamburguesa) */}
      <nav 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 transition-all duration-300`}
      >
        <div className="flex flex-col p-4 space-y-2">
          <a 
            href="#servicios" 
            onClick={closeMenu} 
            className="block text-gray-800 hover:text-amber-600 hover:bg-gray-50 py-2 px-3 rounded-md font-medium transition-colors duration-200"
          >
            Servicios
          </a>
          <a 
            href="#proceso" 
            onClick={closeMenu} 
            className="block text-gray-800 hover:text-amber-600 hover:bg-gray-50 py-2 px-3 rounded-md font-medium transition-colors duration-200"
          >
            Proceso
          </a>
          <a 
            href="#confianza" 
            onClick={closeMenu} 
            className="block text-gray-800 hover:text-amber-600 hover:bg-gray-50 py-2 px-3 rounded-md font-medium transition-colors duration-200"
          >
            Confianza
          </a>
          <a 
            href="#contacto" 
            onClick={closeMenu} 
            className="block text-gray-800 hover:text-amber-600 hover:bg-gray-50 py-2 px-3 rounded-md font-medium transition-colors duration-200"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;