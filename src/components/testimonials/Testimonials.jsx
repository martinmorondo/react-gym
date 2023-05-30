import React, { useState } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "Nunca antes había sentido tanta energía y motivación en un gimnasio. Desde el momento en que pisé este lugar, supe que era el adecuado para mí. Los entrenadores son increíblemente amables y siempre están dispuestos a ayudar.",
      expanded: false
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "No puedo agradecer lo suficiente a este gimnasio por ayudarme a alcanzar mis metas de acondicionamiento físico. Me uní a su programa de entrenamiento personalizado hace unos meses y no puedo creer lo mucho que he avanzado desde entonces.",
      expanded: false
    },
    {
      id: 3,
      name: "Bob Johnson",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "Este gimnasio es el mejor lugar para conseguir una rutina de ejercicios efectiva y mantenerse en forma. Siempre encuentro algo nuevo que probar y nunca me aburro en mis entrenamientos. La limpieza y el mantenimiento del equipo son impresionantes, y siempre me siento seguro y cómodo mientras estoy aquí.",
      expanded: false
    }
  ]);

  const [activeTestimonial, setactiveTestimonial] = useState(1);

  const handleTestimonialClick = (id) => {
    setactiveTestimonial(id);
  }

  const handleReadMoreClick = (id) => {
    setTestimonials((prevTestimonials) => {
      const updatedTestimonials = prevTestimonials.map((testimonial) => {
        if (testimonial.id === id) {
          return {
            ...testimonial,
            expanded: !testimonial.expanded
          };
        }
        return testimonial;
      });
      return updatedTestimonials;
    });
  };

  return (
    <div id="testimonials" className="bg-gray-900 py-10 mt-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-slate-200 rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                activeTestimonial === testimonial.id ? "border-4 border-blue-500" : ""
              }`}
              onClick={() => handleTestimonialClick(testimonial.id)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                <h3 className="text-black font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600">
                    {testimonial.expanded ? testimonial.text : testimonial.text.slice(0, 100) + "..."}
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleReadMoreClick(testimonial.id)}
                    >
                      {testimonial.expanded ? "Leer menos" : "Leer más"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

