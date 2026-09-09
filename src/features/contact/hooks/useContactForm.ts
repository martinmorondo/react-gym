import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

import { contactService } from '../../../services/contactService';
import type { ContactFormData } from '../../../types/contact';
import {
  type ContactFormErrors,
  validateContactForm,
} from '../../../utils/contactValidation';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  question: '',
};

type UseContactFormResult = {
  formData: ContactFormData;
  errors: ContactFormErrors;
  submitStatus: SubmitStatus;
  isSubmitting: boolean;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};

export function useContactForm(): UseContactFormResult {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [errors, setErrors] = useState<ContactFormErrors>({});

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

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));

    if (submitStatus === 'error') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus('idle');
      return;
    }

    try {
      setErrors({});
      setSubmitStatus('submitting');

      await contactService.submit(formData);

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch {
      setSubmitStatus('error');
    }
  };

  return {
    formData,
    errors,
    submitStatus,
    isSubmitting: submitStatus === 'submitting',
    handleChange,
    handleSubmit,
  };
}