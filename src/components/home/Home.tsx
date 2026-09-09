import { useState } from 'react';
import type { FormEvent } from 'react';
import { brand } from '../../constants/brand';
import interiorGymImage from '../../assets/img/interior-gimnasio.jpg';
import industrialGymImage from '../../assets/img/gimnasio-industrial.jpg';
import weightPlateImage from '../../assets/img/disco-45-lbs.jpg';

const galleryImages = [
  {
    src: interiorGymImage,
    alt: 'Interior de FORGE Training Club con equipamiento de fuerza',
  },
  {
    src: industrialGymImage,
    alt: 'Zona de entrenamiento de fuerza de FORGE Training Club',
  },
  {
    src: weightPlateImage,
    alt: 'Disco de peso utilizado para entrenamiento de fuerza',
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

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
event.preventDefault();
closeJoinModal();
};

return ( 
      <main className="bg-gray-900"> 
      
      <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden">
  <img
    src={interiorGymImage}
    alt="Interior de FORGE Training Club"
    className="absolute inset-0 -z-20 h-full w-full object-cover"
  />

 <div className="absolute inset-0 -z-10 bg-black/45" />

<div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

  <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
    <div className="max-w-2xl">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
        {brand.name}
      </p>

      <h1 className="mb-6 max-w-xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
        {brand.tagline}
      </h1>

      <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl">
        {brand.description}
      </p>

      <button
        type="button"
        onClick={openJoinModal}
        className="rounded-full bg-red-600 px-7 py-3.5 font-bold text-white shadow-lg transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        Entrená con nosotros
      </button>
    </div>
  </div>
</section>

  <section
  className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 pb-12 md:grid-cols-3"
  aria-label="Galería de FORGE Training Club"
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
