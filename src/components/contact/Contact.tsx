import { useContactForm } from '../../features/contact/hooks/useContactForm';
import { brand } from '../../constants/brand';

function Contact() {
  const {
    formData,
    errors,
    submitStatus,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          {/* Información */}
          <header className="max-w-xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              Contacto
            </p>

            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
              Hablemos de
              <span className="block text-red-500">
                tu próximo paso.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
              ¿Querés empezar a entrenar, conocer nuestras instalaciones o
              simplemente hacer una consulta? Dejanos tus datos y nos
              ponemos en contacto.
            </p>

            <div className="mt-10 space-y-5 border-y border-white/10 py-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  Gimnasio
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  {brand.name}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  Atención
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  Respondemos tus consultas y te ayudamos a elegir la mejor
                  modalidad de entrenamiento.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                Construí tu mejor versión.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {brand.tagline}
              </p>
            </div>
          </header>

          {/* Formulario */}
          <div>
            {submitStatus === 'success' && (
              <div
                className="mb-6 rounded-2xl border border-green-500/20 bg-green-500/10 p-5 text-sm text-green-300"
                role="status"
                aria-live="polite"
              >
                <p className="font-bold">Mensaje enviado.</p>

                <p className="mt-1 text-green-200/80">
                  Recibimos tu consulta. Nos pondremos en contacto con vos.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-5 text-sm text-red-300"
                role="alert"
                aria-live="assertive"
              >
                No pudimos enviar tu mensaje. Intentá nuevamente.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl sm:p-8"
              noValidate
            >
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                  FORGE Training Club
                </p>

                <h2 className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                  Contanos qué necesitás.
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-200"
                  >
                    Nombre
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? 'name-error' : undefined
                    }
                    required
                    placeholder="Tu nombre"
                    className={`w-full rounded-xl border bg-black px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-white/10'
                    }`}
                  />

                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-200"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? 'email-error' : undefined
                    }
                    required
                    placeholder="tu@email.com"
                    className={`w-full rounded-xl border bg-black px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-white/10'
                    }`}
                  />

                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-200"
                  >
                    Teléfono
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={
                      errors.phone ? 'phone-error' : undefined
                    }
                    required
                    placeholder="Tu teléfono"
                    className={`w-full rounded-xl border bg-black px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.phone
                        ? 'border-red-500'
                        : 'border-white/10'
                    }`}
                  />

                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="question"
                    className="mb-2 block text-sm font-semibold text-gray-200"
                  >
                    Consulta
                  </label>

                  <textarea
                    id="question"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    rows={6}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.question)}
                    aria-describedby={
                      errors.question ? 'question-error' : undefined
                    }
                    required
                    placeholder="Contanos cómo podemos ayudarte."
                    className={`w-full resize-y rounded-xl border bg-black px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                      errors.question
                        ? 'border-red-500'
                        : 'border-white/10'
                    }`}
                  />

                  {errors.question && (
                    <p
                      id="question-error"
                      className="mt-2 text-sm text-red-400"
                    >
                      {errors.question}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-red-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-red-600/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
