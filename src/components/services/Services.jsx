import React, { useState } from 'react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [selectedImage, setSelectedImage] = useState("https://source.unsplash.com/1200x800/?fitness");

  const services = [
    {
      id: 0,
      title: "Entrenamiento personalizado",
      description: "Entrena con un entrenador personal para alcanzar tus objetivos de fitness.",
      icon: "fas fa-dumbbell",
      image: "https://ufg-heroku.s3.amazonaws.com/tbausa/prod/public/Gym.jpg",
      price: "$50/hora",
      time: "1 hora por sesión",
      customizations: ["Programa de entrenamiento personalizado", "Plan de nutrición individualizado"]
    },
    {
      id: 1,
      title: "Clases en grupo",
      description: "Asiste a nuestras clases de fitness en grupo para motivarte y divertirte.",
      icon: "fas fa-users",
      image: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2017/01/Equinox.jpg",
      price: "$20/clase",
      time: "1 hora por clase",
      customizations: ["Evaluación de la forma física", "Asesoramiento nutricional"]
    },
    {
      id: 2,
      title: "Área de entrenamiento libre",
      description: "Usa nuestras instalaciones y equipo de fitness en un ambiente sin presiones.",
      icon: "fas fa-map-signs",
      image: "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Gyms-in-Mirdif-B-19-07.jpg",
      price: "$30/mes",
      time: "Acceso ilimitado",
      customizations: ["Entrenamiento personalizado disponible por un costo adicional"]
    },
  ];

  return (
    <section id="servicios" className="bg-gray-900 py-10 my-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Servicios
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <ul className="list-none">
              {services.map((service) => (
                <li
                  key={service.id}
                  className={`flex items-center mb-4 p-4 rounded-lg shadow-lg transition-all duration-500 ${
                    selectedService === service.id
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  } hover:bg-blue-500 hover:text-white cursor-pointer`}
                  onClick={() => {
                    setSelectedService(service.id);
                    setSelectedImage(service.image);
                  }}
                >
                  <div className="mr-4">
                    <i className={`${service.icon} fa-2x`}></i>
                  </div>
                  <div className='flex-1'>
                    <h3 className="font-bold mb-2">{service.title}</h3>
                    <p className="text-amber-950">{service.description}</p>
                    <p className="text-gray-500 mb-1">{service.price}</p>
                    <p className="text-gray-500 mb-1">{service.time}</p>
                    <p className="text-gray-500">{service.customizations.join(", ")}</p>
                    </div>
                    </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <img src={selectedImage} alt="Servicio seleccionado" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
 