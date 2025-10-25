
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <i className="fa-solid fa-elevator mr-2 text-brand-cyan"></i>
          Soluciones de Elevación S.A.
        </div>
        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="#definicion" className="hover:text-brand-cyan transition-colors">Definición</a>
          <a href="#beneficios" className="hover:text-brand-cyan transition-colors">Beneficios</a>
          <a href="#casos-exito" className="hover:text-brand-cyan transition-colors">Casos de Éxito</a>
          <a href="#implementacion" className="hover:text-brand-cyan transition-colors">Implementación</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
   