import { useState } from 'react';

const galleryImages = [
{
src: 'https://source.unsplash.com/featured/?gym,weights,yoga',
alt: 'Personas entrenando en un gimnasio',
},
{
src: 'https://source.unsplash.com/featured/?gym,fitness,weights',
alt: 'Equipamiento de entrenamiento en un gimnasio',
},
{
src: 'https://source.unsplash.com/featured/?gym,fitness',
alt: 'Zona de entrenamiento de un gimnasio',
},
{
src: 'https://source.unsplash.com/featured/?weights,fitness,gym',
alt: 'Pesas y equipamiento de entrenamiento',
},
{
src: 'https://source.unsplash.com/featured/?yoga,fitness,gym',
alt: 'Personas realizando ejercicios de yoga',
},
];

function Home() {
const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

const openJoinModal = () => {
setIsJoinModalOpen(true);
};

const closeJoinModal = () => {
setIsJoinModalOpen(false);
};

const handleSubmit = (event) => {
event.preventDefault();
closeJoinModal();
};

return ( 
      <main className="bg-gray-900"> <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12"> <div className="container flex flex-col items-center"> 
      <h1 className="my-8 text-center text-4xl font-bold text-white">
      Bienvenidos a nuestro gimnasio </h1>
      <p className="mx-auto mb-8 max-w-3xl text-center text-xl font-medium leading-loose text-white">
        En nuestro gimnasio, nos enfocamos en ayudar a nuestros clientes a
        alcanzar sus metas de fitness y mejorar su estilo de vida.
        Ofrecemos una amplia variedad de equipos y clases, así como
        programas personalizados de entrenamiento con instructores
        altamente capacitados para ayudarte a alcanzar tus objetivos.
      </p>

      <button
        type="button"
        onClick={openJoinModal}
        className="rounded-full bg-red-600 px-6 py-3 font-bold text-white shadow-lg transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        ¡Comienza ahora!
      </button>
    </div>
  </section>

  <section
    className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 pb-12 md:grid-cols-2 lg:grid-cols-5"
    aria-label="Galería del gimnasio"
  >
    {galleryImages.map((image) => (
      <img
        key={image.src}
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-[400px] w-full rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-105"
      />
    ))}
  </section>

  {isJoinModalOpen && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      role="presentation"
      onMouseDown={closeJoinModal}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-modal-title"
        className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeJoinModal}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Cerrar formulario"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <h2
          id="join-modal-title"
          className="mb-6 pr-8 text-2xl font-bold text-gray-900"
        >
          Contáctanos para unirte
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="join-name"
              className="mb-1 block font-bold text-gray-700"
            >
              Nombre
            </label>

            <input
              id="join-name"
              name="name"
              type="text"
              autoComplete="name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="join-email"
              className="mb-1 block font-bold text-gray-700"
            >
              Email
            </label>

            <input
              id="join-email"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="join-phone"
              className="mb-1 block font-bold text-gray-700"
            >
              Teléfono
            </label>

            <input
              id="join-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-red-600 px-4 py-2 font-bold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  )}
</main>
);
}

export default Home;
