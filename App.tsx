
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Card from './components/Card';
import Footer from './components/Footer';

import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  BuildingOfficeIcon,
  CogIcon,
  GlobeAltIcon,
  LightBulbIcon
} from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-gray-300 font-sans leading-relaxed">
      <Header />
      <main>
        <Hero />

        <Section id="definicion" title="¿Qué es un Gemelo Digital?" icon={<CogIcon />}>
          <p className="text-lg">
            Un Gemelo Digital es una <strong>réplica virtual y dinámica de un objeto, proceso o sistema físico</strong>. En nuestro caso, un ascensor o una red completa de ellos. Este modelo virtual se alimenta de datos en tiempo real provenientes de sensores (IoT) instalados en el equipo físico. Esto nos permite no solo visualizar su estado actual, sino también simular su comportamiento futuro, predecir fallos, optimizar su rendimiento y probar nuevas configuraciones sin afectar a la operativa real. Es el puente definitivo entre el mundo físico y el digital.
          </p>
        </Section>
        
        <Section id="beneficios" title="Beneficios Clave para el Sector de la Elevación" icon={<CheckCircleIcon />} className="bg-gray-800">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-dark p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-brand-cyan mb-2">Mantenimiento Predictivo</h3>
              <p>Anticípese a las averías antes de que ocurran. Los algoritmos de IA analizan los datos del gemelo digital para detectar patrones anómalos, programando el mantenimiento justo cuando es necesario, reduciendo tiempos de inactividad y costes.</p>
            </div>
            <div className="bg-brand-dark p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-brand-cyan mb-2">Optimización del Rendimiento</h3>
              <p>Simule flujos de pasajeros y pruebe diferentes lógicas de control para mejorar la eficiencia energética y reducir los tiempos de espera, ofreciendo una mejor experiencia de usuario final.</p>
            </div>
            <div className="bg-brand-dark p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-brand-cyan mb-2">Diseño y Prototipado Virtual</h3>
              <p>Pruebe nuevos componentes o diseños de cabina en el entorno virtual. Valide su rendimiento, durabilidad y seguridad antes de fabricar un solo prototipo físico, acelerando la innovación y reduciendo costes de I+D.</p>
            </div>
            <div className="bg-brand-dark p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-brand-cyan mb-2">Formación Técnica Avanzada</h3>
              <p>Capacite a sus técnicos en un entorno de Realidad Virtual o Aumentada interactuando con el gemelo digital. Podrán practicar reparaciones complejas en un entorno seguro y controlado, mejorando su eficacia.</p>
            </div>
          </div>
        </Section>

        <Section id="desafios" title="Desafíos a Considerar" icon={<ExclamationTriangleIcon />}>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li><strong>Inversión Inicial:</strong> La implementación requiere una inversión en sensores, software y personal cualificado. Sin embargo, el ROI se manifiesta en la reducción de costes operativos y el aumento de la vida útil del equipo.</li>
            <li><strong>Ciberseguridad:</strong> La conexión de los equipos a la red exige robustas medidas de seguridad para proteger los datos y el control del sistema. Es un pilar fundamental de cualquier implementación.</li>
            <li><strong>Integración de Sistemas:</strong> Es crucial asegurar la compatibilidad del sistema de gemelos digitales con los sistemas de gestión de edificios (BMS) y otros softwares heredados.</li>
            <li><strong>Complejidad Técnica:</strong> Se necesitan perfiles especializados en data science, IoT y simulación. La colaboración con un socio tecnológico experto es clave para el éxito del proyecto.</li>
          </ul>
        </Section>

        <Section id="casos-exito" title="Implementaciones Reales: Una Tecnología Consolidada" icon={<GlobeAltIcon />} className="bg-gray-800">
            <p className="text-center text-lg mb-8">Los gemelos digitales no son ciencia ficción. Gigantes de diversas industrias ya los utilizan para liderar sus mercados.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card
                image="https://picsum.photos/seed/aviation/400/200"
                title="GE Aviation"
                description="Utiliza gemelos digitales para cada uno de sus motores a reacción. Monitorizan su estado en tiempo real durante el vuelo, optimizando el consumo y prediciendo necesidades de mantenimiento, ahorrando millones en costes operativos."
              />
              <Card
                image="https://picsum.photos/seed/factory/400/200"
                title="Siemens"
                description="Crea réplicas virtuales de sus fábricas para simular y optimizar los procesos de producción. Esto les permite probar cambios en la línea de montaje sin interrumpir la producción real, mejorando la eficiencia drásticamente."
              />
              <Card
                image="https://picsum.photos/seed/energy/400/200"
                title="Chevron"
                description="Modela sus campos petrolíferos y refinerías con gemelos digitales. Optimizan la extracción, predicen fallos en equipos críticos y mejoran la seguridad de las operaciones en entornos de alto riesgo."
              />
            </div>
        </Section>

        <Section id="nuestro-sector" title="Aplicación en el Sector de la Elevación" icon={<BuildingOfficeIcon />}>
            <p className="text-lg mb-6">El sector de la elevación está en plena transformación digital. Empresas líderes ya están implementando con éxito tecnologías basadas en los principios de los gemelos digitales para diferenciarse de la competencia.</p>
            <div className="bg-gray-800/50 p-6 rounded-lg shadow-inner">
                <h3 className="text-2xl font-bold text-brand-cyan mb-3">Caso de Estudio: KONE & TK Elevator</h3>
                <p>Empresas como <strong>KONE</strong>, con su plataforma conectada a la nube 24/7, y <strong>TK Elevator</strong>, con su solución MAX, son pioneras en el uso de IoT e IA para ofrecer servicios de mantenimiento predictivo. Recopilan datos de miles de ascensores en todo el mundo para analizar su estado, predecir incidencias y optimizar las rutas de sus técnicos. Esto no es solo mantenimiento, es gestión inteligente de activos a gran escala, un paso fundamental hacia un completo gemelo digital.</p>
            </div>
        </Section>

        <Section id="implementacion" title="¿Cómo Empezar en su Empresa?" icon={<LightBulbIcon />} className="bg-brand-blue/20">
          <p className="text-center text-xl mb-8">La implementación de un gemelo digital es un viaje escalable. Podemos adaptarlo a sus necesidades y empezar a generar valor desde el primer día.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
              <div className="w-full md:w-1/3 p-6 bg-brand-dark rounded-lg">
                <div className="text-5xl text-brand-cyan mb-4">1</div>
                <h4 className="text-xl font-bold mb-2">Proyecto Piloto</h4>
                <p>Comenzamos con un número reducido de sus ascensores más críticos. Instalamos la sensórica necesaria y creamos su réplica virtual para monitorización y análisis básicos.</p>
              </div>
              <div className="w-full md:w-1/3 p-6 bg-brand-dark rounded-lg">
                <div className="text-5xl text-brand-cyan mb-4">2</div>
                <h4 className="text-xl font-bold mb-2">Mantenimiento Predictivo</h4>
                <p>Implementamos los modelos de IA para analizar los datos en tiempo real y empezar a generar alertas predictivas, transformando su mantenimiento de reactivo a proactivo.</p>
              </div>
              <div className="w-full md:w-1/3 p-6 bg-brand-dark rounded-lg">
                <div className="text-5xl text-brand-cyan mb-4">3</div>
                <h4 className="text-xl font-bold mb-2">Expansión y Optimización</h4>
                <p>Extendemos el modelo al resto de su flota y añadimos funcionalidades avanzadas como la simulación de rendimiento y la integración con diseño de nuevos componentes.</p>
              </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
   