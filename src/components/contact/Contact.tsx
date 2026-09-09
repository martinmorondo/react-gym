import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

import { contactService } from '../../services/contactService';
import type { ContactFormData } from '../../types/contact';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  question: '',
};

function Contact() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>('idle');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    try {
      setSubmitStatus('submitting');

      await contactService.submit(formData);

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch {
      setSubmitStatus('error');
    }
  };

  const isSubmitting = submitStatus === 'submitting';

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
          >
            Tu mensaje fue enviado correctamente.
          </div>
        )}

        {submitStatus === 'error' && (
          <div
            className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-300"
            role="alert"
          >
            No pudimos enviar tu mensaje. Intentá nuevamente.
          </div>
        )}

        <form
          className="space-y-5 rounded-xl bg-gray-800 p-6 shadow-xl sm:p-8"
          onSubmit={handleSubmit}
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
              required
              className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60"
            />
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
              required
              className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60"
            />
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
              required
              className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60"
            />
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
              required
              className="w-full resize-y rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60"
            />
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
