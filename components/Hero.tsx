
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/elevator-tech/1920/1080')" }}>
      <div className="absolute inset-0 bg-brand-dark opacity-70"></div>
      <div className="relative z-10 p-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Revolucione su Mundo Vertical con <span className="text-brand-cyan">Gemelos Digitales</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          La Tecnología Habilitadora Digital que transforma el diseño, operación y mantenimiento de sus sistemas de elevación.
        </p>
      </div>
    </div>
  );
};

export default Hero;
   