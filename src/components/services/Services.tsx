import { useState } from 'react';
import type { Service } from '../../types/service';

import interiorGymImage from '../../assets/img/interior-gimnasio.jpg';
import industrialGymImage from '../../assets/img/gimnasio-industrial.jpg';
import weightPlateImage from '../../assets/img/disco-45-lbs.jpg';

const services: Service[] = [
  {
    id: 0,
    title: 'Entrenamiento personalizado',
    description:
      'Trabajá con un entrenador para desarrollar un plan adaptado a tus objetivos, nivel y ritmo.',
    icon: '01',
    image: interiorGymImage,
    price: '$50/hora',
    time: '1 hora por sesión',
    customizations: [
      'Programa de entrenamiento personalizado',
      'Plan de nutrición individualizado',
    ],
  },
  {
    id: 1,
    title: 'Clases en grupo',
    description:
      'Entrená acompañado, mantené la motivación y disfrutá de sesiones dinámicas junto a la comunidad FORGE.',
    icon: '02',
    image: industrialGymImage,
    price: '$20/clase',
    time: '1 hora por clase',
    customizations: [
      'Evaluación de la forma física',
      'Asesoramiento nutricional',
    ],
  },
  {
    id: 2,
    title: 'Área de entrenamiento libre',
    description:
      'Accedé a nuestras instalaciones y equipamiento para entrenar con libertad y a tu propio ritmo.',
    icon: '03',
    image: weightPlateImage,
    price: '$30/mes',
    time: 'Acceso ilimitado',
    customizations: [
      'Entrenamiento personalizado disponible por un costo adicional',
    ],
  },
];

function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<number>(0);

  const selectedService = services.find(
    (service) => service.id === selectedServiceId
  );

  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <header className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
            Servicios
          </p>

          <h1 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
            Entrená a tu
            <span className="block text-red-500">
              manera.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Elegí la modalidad que mejor se adapte a tus objetivos y
            convertí el entrenamiento en parte de tu rutina.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const isSelected =
              selectedServiceId === service.id;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() =>
                  setSelectedServiceId(service.id)
                }
                aria-pressed={isSelected}
                className={`group flex min-h-[310px] flex-col rounded-2xl border p-6 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                  isSelected
                    ? 'border-red-500 bg-red-600 shadow-2xl shadow-red-600/10'
                    : 'border-white/10 bg-zinc-950 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-900'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-black tracking-[0.2em] ${
                      isSelected
                        ? 'text-red-100'
                        : 'text-red-500'
                    }`}
                  >
                    {service.icon}
                  </span>

                  <span
                    className={`text-xl transition-transform duration-300 ${
                      isSelected
                        ? 'rotate-0 text-white'
                        : '-rotate-45 text-gray-600 group-hover:rotate-0 group-hover:text-white'
                    }`}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <div className="mt-auto">
                  <h2 className="max-w-sm text-2xl font-bold leading-tight">
                    {service.title}
                  </h2>

                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      isSelected
                        ? 'text-red-50'
                        : 'text-gray-400'
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                    <div>
                      <p
                        className={`text-2xl font-black ${
                          isSelected
                            ? 'text-white'
                            : 'text-white'
                        }`}
                      >
                        {service.price}
                      </p>

                      <p
                        className={`mt-1 text-xs uppercase tracking-wider ${
                          isSelected
                            ? 'text-red-100'
                            : 'text-gray-500'
                        }`}
                      >
                        {service.time}
                      </p>
                    </div>

                    <span
                      className={`text-sm font-semibold ${
                        isSelected
                          ? 'text-white'
                          : 'text-gray-400 group-hover:text-white'
                      }`}
                    >
                      Ver detalles
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {selectedService && (
          <article className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[320px] lg:min-h-[500px]">
                <img
                  src={selectedService.image}
                  alt={`Vista de ${selectedService.title}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-red-400">
                    FORGE
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                  {selectedService.icon}
                </p>

                <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                  {selectedService.title}
                </h2>

                <p className="mt-5 text-base leading-relaxed text-gray-400">
                  {selectedService.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-black p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Inversión
                    </p>

                    <p className="mt-2 text-xl font-black text-white">
                      {selectedService.price}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-black p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Duración
                    </p>

                    <p className="mt-2 text-sm font-bold text-white">
                      {selectedService.time}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">
                    Incluye
                  </p>

                  <ul className="space-y-3">
                    {selectedService.customizations.map(
                      (customization) => (
                        <li
                          key={customization}
                          className="flex items-start gap-3 text-sm text-gray-300"
                        >
                          <span
                            className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white"
                            aria-hidden="true"
                          >
                            ✓
                          </span>

                          <span>{customization}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className="mt-8 inline-flex w-fit rounded-full bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
                >
                  Consultar
                </a>
              </div>
            </div>
          </article>
        )}
      </section>
    </main>
  );
}

export default Services;
