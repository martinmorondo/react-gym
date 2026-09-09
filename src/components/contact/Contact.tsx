import { useContactForm } from '../../features/contact/hooks/useContactForm';

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
    <main className="min-h-screen bg-gray-900 px-4 py-12">
      <div className="mx-auto max-w-xl">
        <header className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            FORGE Training Club
          </p>

          <h1 className="mb-3 text-4xl font-bold text-white">
            Contactanos
          </h1>

          <p className="text-gray-400">
            ¿Tenés una pregunta? Completá el formulario y nos
            pondremos en contacto con vos.
          </p>
        </header>

        {submitStatus === 'success' && (
          <div
            className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-300"
            role="status"
            aria-live="polite"
          >
            Tu mensaje fue enviado correctamente.
          </div>
        )}

        {submitStatus === 'error' && (
          <div
            className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-300"
            role="alert"
            aria-live="assertive"
          >
            No pudimos enviar tu mensaje. Intentá nuevamente.
          </div>
        )}

        <form
          className="space-y-5 rounded-xl bg-gray-800 p-6 shadow-xl sm:p-8"
          onSubmit={handleSubmit}
          noValidate
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-200"
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
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
              className={`w-full rounded-md border bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                errors.name ? 'border-red-500' : 'border-gray-600'
              }`}
            />

            {errors.name && (
              <p
                id="name-error"
                className="mt-1 text-sm text-red-400"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-200"
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
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
              className={`w-full rounded-md border bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                errors.email ? 'border-red-500' : 'border-gray-600'
              }`}
            />

            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-sm text-red-400"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-gray-200"
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
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              required
              className={`w-full rounded-md border bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                errors.phone ? 'border-red-500' : 'border-gray-600'
              }`}
            />

            {errors.phone && (
              <p
                id="phone-error"
                className="mt-1 text-sm text-red-400"
              >
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="question"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              Consulta
            </label>

            <textarea
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              rows={5}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.question)}
              aria-describedby={
                errors.question ? 'question-error' : undefined
              }
              required
              className={`w-full resize-y rounded-md border bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60 ${
                errors.question ? 'border-red-500' : 'border-gray-600'
              }`}
            />

            {errors.question && (
              <p
                id="question-error"
                className="mt-1 text-sm text-red-400"
              >
                {errors.question}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-red-600 px-4 py-3 font-bold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
