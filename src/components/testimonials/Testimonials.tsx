import { useState } from 'react';
import type { Testimonial } from '../../types/testimonial';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Martín G.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'Nunca antes había sentido tanta energía y motivación en un gimnasio. Desde el momento en que pisé este lugar, supe que era el adecuado para mí. Los entrenadores son increíblemente amables y siempre están dispuestos a ayudar.',
  },
  {
    id: 2,
    name: 'Laura S.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    text: 'No puedo agradecer lo suficiente a este gimnasio por ayudarme a alcanzar mis metas de acondicionamiento físico. Me uní a su programa de entrenamiento personalizado hace unos meses y no puedo creer lo mucho que he avanzado desde entonces.',
  },
  {
    id: 3,
    name: 'Julián R.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    text: 'Este gimnasio es el mejor lugar para conseguir una rutina de ejercicios efectiva y mantenerse en forma. Siempre encuentro algo nuevo que probar y nunca me aburro en mis entrenamientos. La limpieza y el mantenimiento del equipo son impresionantes, y siempre me siento seguro y cómodo mientras estoy aquí.',
  },
];

function Testimonials() {
  const [activeTestimonialId, setActiveTestimonialId] = useState(1);

  const activeTestimonial =
    testimonials.find(
      (testimonial) =>
        testimonial.id === activeTestimonialId
    ) ?? testimonials[0];

  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-20">
          <header>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              Testimonios
            </p>

            <h1 className="max-w-lg text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
              Lo que dicen
              <span className="block text-red-500">
                en FORGE.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-400 sm:text-lg">
              Cada persona llega con un objetivo distinto. Estas son
              algunas de las experiencias de quienes decidieron empezar.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div
                className="flex text-lg tracking-wide text-red-500"
                aria-label="Cinco estrellas de cinco"
              >
                ★★★★★
              </div>

              <span className="text-sm text-gray-500">
                Experiencias reales de nuestra comunidad
              </span>
            </div>
          </header>

          <div>
            <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-7 shadow-2xl sm:p-10">
              <div className="absolute right-8 top-5 select-none text-[120px] font-black leading-none text-white/[0.03] sm:text-[160px]">
                “
              </div>

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <div
                    className="flex gap-1 text-lg text-red-500"
                    aria-label="Cinco estrellas de cinco"
                  >
                    ★★★★★
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
                    Testimonio
                  </span>
                </div>

                <blockquote className="max-w-3xl text-2xl font-bold leading-relaxed tracking-tight text-white sm:text-4xl">
                  “{activeTestimonial.text}”
                </blockquote>

                <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-7">
                  <img
                    src={activeTestimonial.image}
                    alt={`Foto de ${activeTestimonial.name}`}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
                  />

                  <div>
                    <p className="font-bold text-white">
                      {activeTestimonial.name}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Miembro de FORGE
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <div
              className="mt-5 grid grid-cols-3 gap-3"
              aria-label="Seleccionar testimonio"
            >
              {testimonials.map((testimonial, index) => {
                const isActive =
                  testimonial.id === activeTestimonialId;

                return (
                  <button
                    key={testimonial.id}
                    type="button"
                    onClick={() =>
                      setActiveTestimonialId(testimonial.id)
                    }
                    aria-label={`Ver testimonio ${index + 1}`}
                    aria-pressed={isActive}
                    className={`rounded-xl border px-4 py-4 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      isActive
                        ? 'border-red-500 bg-red-600'
                        : 'border-white/10 bg-zinc-950 hover:border-white/20 hover:bg-zinc-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-black tracking-[0.2em] ${
                          isActive
                            ? 'text-red-100'
                            : 'text-red-500'
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`text-sm ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-600'
                        }`}
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </div>

                    <p
                      className={`mt-4 truncate text-sm font-bold ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-300'
                      }`}
                    >
                      {testimonial.name}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-sm font-semibold text-gray-300">
              Tu experiencia puede ser la próxima.
            </p>

            <a
              href="/contact"
              className="text-sm font-bold uppercase tracking-wide text-red-500 transition-colors hover:text-red-400"
            >
              Empezar a entrenar →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Testimonials;
