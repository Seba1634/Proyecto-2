
import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-brand-dark rounded-lg overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-cyan mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;
   