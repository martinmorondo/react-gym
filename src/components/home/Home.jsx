import React, { useState, useEffect } from 'react';

const Home = () => {

  const [showPopup, setShowPopup] = useState(false);
  
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);


  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center">
      <div className='container'>
      <h1 className="text-4xl font-bold text-white my-8 text-shadow-lg">Bienvenidos a nuestro gimnasio</h1>
      <p className="text-white text-xl mb-8 font-medium mx-auto max-w-3xl text-center leading-loose">
        En nuestro gimnasio, nos enfocamos en ayudar a nuestros clientes a alcanzar sus metas de fitness y mejorar su estilo de vida. Ofrecemos una amplia variedad de equipos y clases, así como programas personalizados de entrenamiento con instructores altamente capacitados para ayudarte a alcanzar tus objetivos.
      </p>
      <button
        className="bg-red-600 hover:bg-red-800 text-white font-bold mx-auto py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transform hover:scale-110 shadow-lg transition duration-500"
        onClick={togglePopup}
      >
        ¡Comienza ahora!
      </button>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-20">
          <div className="bg-white p-8 rounded-lg">
          <button
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-1 rounded-full focus:outline-none focus:shadow-outline transform hover:scale-110 shadow-lg transition duration-500 absolute top-40 mt-4 ml-60"
            onClick={togglePopup}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="x-circle w-6 h-6">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.5-10.5a1 1 0 00-1.4 1.4L11.41 10l-1.46 1.46a1 1 0 001.4 1.4L12 11.41l1.46 1.46a1 1 0 001.4-1.4L12.59 10l1.46-1.46a1 1 0 00-1.4-1.4L12 8.59l-1.46-1.46a1 1 0 00-1.4 1.4L10.59 10l-1.46 1.46a1 1 0 001.4 1.4L10 11.41l1.46 1.46a1 1 0 001.4 0 1 1 0 000-1.4L11.41 10l1.46-1.46z"
                clipRule="evenodd"
              />
            </svg>
          </button>
            <h2 className="text-2xl font-bold mb-4">Contáctanos para unirte</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="Teléfono"
                  required
                />
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
  <img src="https://source.unsplash.com/featured/?gym, weights, yoga" alt="Gimnasio" className="rounded-lg shadow-md object-cover h-[400px] w-full transform hover:scale-105 transition duration-300" />
  <img src="https://source.unsplash.com/featured/?gym,fitness, weights, yoga" alt="Gimnasio" className="rounded-lg shadow-md object-cover h-[400px] w-full transform hover:scale-105 transition duration-300" />
  <img src="https://source.unsplash.com/featured/?gym,fitness" alt="Gimnasio" className="rounded-lg shadow-md object-cover h-[400px] w-full transform hover:scale-105 transition duration-300" />
  <img src="https://source.unsplash.com/featured/?weights,fitness, gym" alt="Pesas" className="rounded-lg shadow-md object-cover h-[400px] w-full transform hover:scale-105 transition duration-300" />
  <img src="https://source.unsplash.com/featured/?yoga,fitness, gym" alt="Yoga" className="rounded-lg shadow-md object-cover h-[400px] w-full transform hover:scale-105 transition duration-300" />
</div>

</div>
);
};

export default Home;