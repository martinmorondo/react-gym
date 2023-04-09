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
      }, 10000); // 10 segundos en milisegundos
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

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
            <h2 className="text-2xl font-bold mb-4">Contáctanos para unirte</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Nombre"
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