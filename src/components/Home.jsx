import React from 'react';
import gymImg from '../assets/img/gymImg.jpg';

const Home = () => {
    return (
        <section className='bg-gray-400 py-10'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='w-full md:w-1/2'>
                        <h1 className='text-4x1 md:text-6x1 font-bold'>Bienvenidos a nuestro gimnasio</h1>
                        <p className='text-gray-600 mb-8'>Bienvenido al Gimnasio [Nombre del Gimnasio]. Nuestro compromiso es ayudarte a alcanzar tus metas de fitness y llevar tu estilo de vida a un nivel superior. Ofrecemos una amplia variedad de equipos y clases, así como programas personalizados de entrenamiento con instructores altamente capacitados para ayudarte a alcanzar tus objetivos. Además, nuestras instalaciones están diseñadas para ofrecerte un ambiente seguro, cómodo y motivador. Ya sea que busques mejorar tu fuerza, resistencia o flexibilidad, o simplemente mantenerte en forma y saludable, estamos aquí para apoyarte en cada paso del camino. ¡Únete a nuestra comunidad hoy mismo y descubre lo que es posible!</p>
                        <a href='#promociones' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Ver promociones</a>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src={gymImg} alt='gimnasio' className='rounded-lg shadow-lg'></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
