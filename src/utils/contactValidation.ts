import type { ContactFormData } from '../types/contact';

export type ContactFormErrors = Partial<
  Record<keyof ContactFormData, string>
>;

export function validateContactForm(
  data: ContactFormData
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Ingresá tu nombre.';
  }

  if (!data.email.trim()) {
    errors.email = 'Ingresá tu email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Ingresá un email válido.';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Ingresá tu teléfono.';
  }

  if (!data.question.trim()) {
    errors.question = 'Ingresá tu consulta.';
  }

  return errors;
}