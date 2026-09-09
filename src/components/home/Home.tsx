import { useState } from 'react';

import { brand } from '../../constants/brand';
import industrialGymImage from '../../assets/img/gimnasio-industrial.jpg';
import interiorGymImage from '../../assets/img/interior-gimnasio.jpg';
import weightPlateImage from '../../assets/img/disco-45-lbs.jpg';
import { useContactForm } from '../../features/contact/hooks/useContactForm';

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

  const {
    formData,
    errors,
    submitStatus,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const openJoinModal = () => {
    setIsJoinModalOpen(true);
  };

  const closeJoinModal = () => {
    setIsJoinModalOpen(false);
  };

 const handleJoinSubmit = async (
  event: FormEvent<HTMLFormElement>
) => {
  await handleSubmit(event);
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
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
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

            {submitStatus === 'success' && (
              <div
                className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-700"
                role="status"
                aria-live="polite"
              >
                Recibimos tu solicitud. Nos pondremos en contacto con vos.
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-700"
                role="alert"
                aria-live="assertive"
              >
                No pudimos enviar tu solicitud. Intentá nuevamente.
              </div>
            )}

            {submitStatus !== 'success' && (
              <form
                onSubmit={handleJoinSubmit}
                className="space-y-4"
                noValidate
              >
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
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? 'join-name-error' : undefined
                    }
                    className={`w-full rounded-md border bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                  />

                  {errors.name && (
                    <p
                      id="join-name-error"
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.name}
                    </p>
                  )}
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
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? 'join-email-error' : undefined
                    }
                    className={`w-full rounded-md border bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                  />

                  {errors.email && (
                    <p
                      id="join-email-error"
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.email}
                    </p>
                  )}
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
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={
                      errors.phone ? 'join-phone-error' : undefined
                    }
                    className={`w-full rounded-md border bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.phone
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                  />

                  {errors.phone && (
                    <p
                      id="join-phone-error"
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="join-question"
                    className="mb-1 block font-bold text-gray-700"
                  >
                    ¿Cuál es tu objetivo?
                  </label>

                  <textarea
                    id="join-question"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    rows={4}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.question)}
                    aria-describedby={
                      errors.question
                        ? 'join-question-error'
                        : undefined
                    }
                    placeholder="Contanos qué querés conseguir con tu entrenamiento."
                    className={`w-full resize-y rounded-md border bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.question
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                  />

                  {errors.question && (
                    <p
                      id="join-question-error"
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.question}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-red-600 px-4 py-2 font-bold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? 'Enviando...'
                    : 'Quiero entrenar'}
                </button>
              </form>
            )}

            {submitStatus === 'success' && (
              <button
                type="button"
                onClick={closeJoinModal}
                className="w-full rounded-full bg-red-600 px-4 py-2 font-bold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Cerrar
              </button>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

export default Home;
