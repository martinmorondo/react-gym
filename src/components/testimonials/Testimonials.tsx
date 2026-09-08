import { useState } from 'react';

type Testimonial = {
id: number;
name: string;
image: string;
text: string;
};

const testimonials: Testimonial[] = [
{
id: 1,
name: 'John Doe',
image: 'https://randomuser.me/api/portraits/men/1.jpg',
text: 'Nunca antes había sentido tanta energía y motivación en un gimnasio. Desde el momento en que pisé este lugar, supe que era el adecuado para mí. Los entrenadores son increíblemente amables y siempre están dispuestos a ayudar.',
},
{
id: 2,
name: 'Jane Smith',
image: 'https://randomuser.me/api/portraits/women/1.jpg',
text: 'No puedo agradecer lo suficiente a este gimnasio por ayudarme a alcanzar mis metas de acondicionamiento físico. Me uní a su programa de entrenamiento personalizado hace unos meses y no puedo creer lo mucho que he avanzado desde entonces.',
},
{
id: 3,
name: 'Bob Johnson',
image: 'https://randomuser.me/api/portraits/men/2.jpg',
text: 'Este gimnasio es el mejor lugar para conseguir una rutina de ejercicios efectiva y mantenerse en forma. Siempre encuentro algo nuevo que probar y nunca me aburro en mis entrenamientos. La limpieza y el mantenimiento del equipo son impresionantes, y siempre me siento seguro y cómodo mientras estoy aquí.',
},
];

function Testimonials() {
const [activeTestimonialId, setActiveTestimonialId] = useState<number>(1);
const [expandedTestimonialId, setExpandedTestimonialId] = useState<number | null>(
null
);

const handleTestimonialSelect = (id: number) => {
setActiveTestimonialId(id);
};

const handleReadMore = (id: number) => {
setExpandedTestimonialId((currentId) =>
currentId === id ? null : id
);
};

return ( 
<main id="testimonials" className="bg-gray-900 py-10"> <div className="container mx-auto px-4"> <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
Testimonios </h1>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {testimonials.map((testimonial) => {
        const isActive = activeTestimonialId === testimonial.id;
        const isExpanded = expandedTestimonialId === testimonial.id;

        return (
          <article
            key={testimonial.id}
            className={`rounded-lg border-4 bg-slate-200 p-6 shadow-lg transition-all duration-300 ${
              isActive
                ? 'border-blue-500'
                : 'border-transparent'
            }`}
          >
            <div className="mb-4 flex items-center">
              <img
                src={testimonial.image}
                alt={`Foto de ${testimonial.name}`}
                className="mr-4 h-12 w-12 rounded-full object-cover"
              />

              <h2 className="font-bold text-black">
                {testimonial.name}
              </h2>
            </div>

            <p className="text-gray-600">
              {isExpanded
                ? testimonial.text
                : `${testimonial.text.slice(0, 100)}...`}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleReadMore(testimonial.id)}
                className="font-medium text-blue-600 underline-offset-2 transition-colors hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-expanded={isExpanded}
              >
                {isExpanded ? 'Leer menos' : 'Leer más'}
              </button>

              <button
                type="button"
                onClick={() => handleTestimonialSelect(testimonial.id)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                aria-pressed={isActive}
              >
                {isActive ? 'Seleccionado' : 'Seleccionar'}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  </div>
</main>
);
}

export default Testimonials;
