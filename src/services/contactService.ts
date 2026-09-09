import type { ContactFormData } from '../types/contact';

export const contactService = {
  async submit(data: ContactFormData): Promise<void> {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 1000);
    });

    console.log('Formulario enviado:', data);
  },
};