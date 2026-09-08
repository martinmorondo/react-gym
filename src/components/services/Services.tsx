import { useState } from 'react';
import type { Service } from '../../types/service';

const services: Service[] = [
{
id: 0,
title: 'Entrenamiento personalizado',
description:
'Entrena con un entrenador personal para alcanzar tus objetivos de fitness.',
icon: 'fas fa-dumbbell',
image:
'https://ufg-heroku.s3.amazonaws.com/tbausa/prod/public/Gym.jpg',
price: '$50/hora',
time: '1 hora por sesión',
customizations: [
'Programa de entrenamiento personalizado',
'Plan de nutrición individualizado',
],
},
{
id: 1,
title: 'Clases en grupo',
description:
'Asiste a nuestras clases de fitness en grupo para motivarte y divertirte.',
icon: 'fas fa-users',
image:
'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2017/01/Equinox.jpg',
price: '$20/clase',
time: '1 hora por clase',
customizations: [
'Evaluación de la forma física',
'Asesoramiento nutricional',
],
},
{
id: 2,
title: 'Área de entrenamiento libre',
description:
'Usa nuestras instalaciones y equipo de fitness en un ambiente sin presiones.',
icon: 'fas fa-map-signs',
image:
'https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Gyms-in-Mirdif-B-19-07.jpg',
price: '$30/mes',
time: 'Acceso ilimitado',
customizations: [
'Entrenamiento personalizado disponible por un costo adicional',
],
},
];

function Services() {
const [selectedServiceId, setSelectedServiceId] = useState<number>(0);

const selectedService = services.find(
(service) => service.id === selectedServiceId
);

return ( <main id="servicios" className="bg-gray-900 py-10"> <div className="container mx-auto px-4"> 
        <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
        Servicios </h1>

    <div className="flex flex-wrap items-center justify-center">
      <div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
        <ul className="space-y-4" aria-label="Servicios disponibles">
          {services.map((service) => {
            const isSelected = selectedServiceId === service.id;

            return (
              <li key={service.id}>
                <button
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`flex w-full items-start rounded-lg p-4 text-left shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    isSelected
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span className="mr-4 shrink-0 pt-1" aria-hidden="true">
                    <i className={`${service.icon} fa-2x`} />
                  </span>

                  <span className="flex-1">
                    <span className="mb-2 block font-bold">
                      {service.title}
                    </span>

                    <span
                      className={`mb-2 block text-sm ${
                        isSelected ? 'text-white' : 'text-gray-600'
                      }`}
                    >
                      {service.description}
                    </span>

                    <span
                      className={`mb-1 block text-sm ${
                        isSelected ? 'text-white' : 'text-gray-500'
                      }`}
                    >
                      {service.price}
                    </span>

                    <span
                      className={`mb-1 block text-sm ${
                        isSelected ? 'text-white' : 'text-gray-500'
                      }`}
                    >
                      {service.time}
                    </span>

                    <span
                      className={`block text-sm ${
                        isSelected ? 'text-white' : 'text-gray-500'
                      }`}
                    >
                      {service.customizations.join(', ')}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full px-4 md:w-1/2">
        {selectedService && (
          <img
            src={selectedService.image}
            alt={`Vista de ${selectedService.title}`}
            className="h-full max-h-[500px] w-full rounded-lg object-cover shadow-lg"
          />
        )}
      </div>
    </div>
  </div>
</main>
);
}

export default Services;
