import { useState } from 'react';
import type { FormEvent } from 'react';

import { brand } from '../../constants/brand';
import interiorGymImage from '../../assets/img/interior-gimnasio.jpg';
import industrialGymImage from '../../assets/img/gimnasio-industrial.jpg';
import weightPlateImage from '../../assets/img/disco-45-lbs.jpg';

const galleryImages = [
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
      <section className="bg-gray-900">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              {brand.name}
            </p>

            <h1 className="mb-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              {brand.tagline}
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-300 sm:text-xl">
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

          <div className="relative">
            <img
              src={interiorGymImage}
              alt="Interior de FORGE Training Club"
              className="h-[420px] w-full rounded-2xl object-cover shadow-2xl sm:h-[520px]"
            />
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8"
        aria-label="Galería de FORGE Training Club"
      >
        <div className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Nuestro espacio
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Entrená en FORGE
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {galleryImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-[320px] w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-[1.01]"
            />
          ))}
        </div>
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
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414 1 1 0 01-1.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <h2
              id="join-modal-title"
              className="mb-6 pr-8 text-2xl font-bold text-gray-900"
            >
              Unite a FORGE
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
                Quiero entrenar
              </button>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}

export default Home;
