import React, { useState } from 'react';

const Services = () => {

    const [selectedService, setSelectedService] = useState(0);
    const [selectedImage, setSelectedImage] = useState("https://source.unsplash.com/1200x800/?fitness");

    const services = [
        {
            id: 0,
            title: "Entrenamiento personalizado",
            description:
            "Entrena con un entrenador personal para alcanzar tus objetivos de fitness",
            icon: "fas fa-dumbbell",
            image: "https://ufg-heroku.s3.amazonaws.com/tbausa/prod/public/Gym.jpg",
        },
        {
            id: 1,
            title: "Clases en grupo",
            description:
            "Asiste a nuestras clases de fitness en grupo para motivarte y divertirte",
            icon: "fas fa-users",
            image: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2017/01/Equinox.jpg",
        },
        {
            id: 2,
            title: "Área de entrenamiento libre",
            description:
            "Usa nuestras instalaciones y equipo de fitness en un ambiente sin presiones",
            icon: "fas fa-map-signs",
            image: "../assets/gym-3.jpg",
        },
    ];

    
    return (
        <div>
            
        </div>
    );
}

export default Services;
