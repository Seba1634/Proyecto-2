
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-center py-8">
      <div className="container mx-auto px-6">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Soluciones de Elevación S.A. | Folleto Comercial THD
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Este documento es una demostración creada para un proyecto educativo de Gestión Administrativa.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
   