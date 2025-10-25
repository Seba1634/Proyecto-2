
import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  icon: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-brand-cyan/10 rounded-full mb-4">
              <div className="text-brand-cyan w-10 h-10">{icon}</div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
   