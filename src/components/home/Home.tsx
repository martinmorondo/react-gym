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
    className: 'h-[420px]',
  },
  {
    src: weightPlateImage,
    alt: 'Disco de peso utilizado para entrenamiento de fuerza',
    className: 'h-[300px] md:h-[420px]',
  },
  {
    src: interiorGymImage,
    alt: 'Interior de FORGE Training Club',
    className: 'h-[300px]',
  },
];

const stats = [
  {
    value: '500+',
    label: 'Socios activos',
  },
  {
    value: '10+',
    label: 'Entrenadores',
  },
  {
    value: '5',
    label: 'Años de experiencia',
  },
  {
    value: '7/7',
    label: 'Días abierto',
  },
];

const benefits = [
  {
    number: '01',
    title: 'Entrenamiento personalizado',
    description:
      'Planes adaptados a tus objetivos, nivel y ritmo para que cada sesión tenga un propósito.',
  },
  {
    number: '02',
    title: 'Equipamiento profesional',
    description:
      'Un espacio pensado para entrenar fuerza, mejorar tu rendimiento y llevar tus límites más lejos.',
  },
  {
    number: '03',
    title: 'Una comunidad que impulsa',
    description:
      'Entrená rodeado de personas con objetivos similares y construí constancia todos los días.',
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

  return (
    <main className="overflow-hidden bg-black text-white">
      {/* Hero */}
      <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden">
        <img
          src={interiorGymImage}
          alt="Interior de FORGE Training Club"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-black/70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-red-500" />

              <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">
                {brand.name}
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Construí
              <span className="block text-red-500">
                tu mejor
              </span>
              <span className="block">versión.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              {brand.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={openJoinModal}
                className="rounded-full bg-red-600 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-red-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-red-600/30 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                Comenzar a entrenar
              </button>

              <a
                href="/exercises"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
              >
                Ver ejercicios
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-400 md:flex">
          <span>Descubrí FORGE</span>
          <span className="h-10 w-px bg-white/30" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4 sm:px-6 lg:px-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-8 text-center sm:py-10 ${
                index >= 2 ? 'border-t border-white/10 sm:border-t-0' : ''
              }`}
            >
              <p className="text-3xl font-black tracking-tight sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              Por qué FORGE
            </p>

            <h2 className="max-w-xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
              Entrená con
              <span className="block text-red-500">
                intención.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
              No se trata solamente de levantar más peso. Se trata de
              construir hábitos, mejorar tu rendimiento y convertir el
              entrenamiento en parte de tu estilo de vida.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="group grid gap-5 py-7 sm:grid-cols-[70px_1fr] sm:items-start sm:py-8"
              >
                <span className="text-sm font-black tracking-[0.2em] text-red-500">
                  {benefit.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-red-500 sm:text-2xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-zinc-950 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
                Nuestro espacio
              </p>

              <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
                Entrená en FORGE
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-gray-500 sm:text-right">
              Un espacio pensado para que puedas concentrarte en lo
              importante: entrenar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={
                  index === 2
                    ? 'md:col-span-2'
                    : ''
                }
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={`w-full rounded-2xl object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.01] ${image.className}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-red-600" />

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-500/40 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-100">
              Tu próximo paso
            </p>

            <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
              Es momento de empezar.
            </h2>
          </div>

          <button
            type="button"
            onClick={openJoinModal}
            className="shrink-0 rounded-full bg-black px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
          >
            Quiero entrenar
          </button>
        </div>
      </section>

      {/* Join modal */}
      {isJoinModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={closeJoinModal}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="join-modal-title"
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-white/10 bg-zinc-950 p-6 shadow-2xl sm:p-8"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeJoinModal}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
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

            <div className="mb-8 pr-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                FORGE Training Club
              </p>

              <h2
                id="join-modal-title"
                className="text-3xl font-black uppercase tracking-tight text-white"
              >
                Empezá hoy.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Dejanos tus datos y nos ponemos en contacto para ayudarte
                a dar el primer paso.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div
                className="mb-6 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-300"
                role="status"
                aria-live="polite"
              >
                Recibimos tu solicitud. Nos pondremos en contacto con vos.
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300"
                role="alert"
                aria-live="assertive"
              >
                No pudimos enviar tu solicitud. Intentá nuevamente.
              </div>
            )}

            {submitStatus !== 'success' && (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                <div>
                  <label
                    htmlFor="join-name"
                    className="mb-2 block text-sm font-semibold text-gray-200"
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
                    required
                    className={`w-full rounded-xl border bg-black px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-white/10'
                    }`}
                    placeholder="Tu nombre"
                  />

                  {errors.name && (
                    <p
                      id="join-name-error"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="join-email"
                    className="mb-2 block text-sm font-semibold text-gray-200"
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
                    required
                    className={`w-full rounded-xl border bg-black px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-white/10'
                    }`}
                    placeholder="tu@email.com"
                  />

                  {errors.email && (
                    <p
                      id="join-email-error"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="join-phone"
                    className="mb-2 block text-sm font-semibold text-gray-200"
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
                    required
                    className={`w-full rounded-xl border bg-black px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.phone
                        ? 'border-red-500'
                        : 'border-white/10'
                    }`}
                    placeholder="Tu teléfono"
                  />

                  {errors.phone && (
                    <p
                      id="join-phone-error"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="join-question"
                    className="mb-2 block text-sm font-semibold text-gray-200"
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
                    required
                    className={`w-full resize-y rounded-xl border bg-black px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.question
                        ? 'border-red-500'
                        : 'border-white/10'
                    }`}
                  />

                  {errors.question && (
                    <p
                      id="join-question-error"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.question}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-red-600 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Enviando...' : 'Quiero entrenar'}
                </button>
              </form>
            )}

            {submitStatus === 'success' && (
              <button
                type="button"
                onClick={closeJoinModal}
                className="w-full rounded-full bg-red-600 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
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
