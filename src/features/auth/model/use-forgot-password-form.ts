import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { getErrorMessage, ERROR_CODES, isApiError } from '@shared/api';

import { useForgotPasswordMutation } from '../api';

import { forgotPasswordSchema, type ForgotPasswordFormValues } from './forgot-password.schema';

export const useForgotPasswordForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { mutateAsync, isPending } = useForgotPasswordMutation();

  const resolver = zodResolver(forgotPasswordSchema);
  const form = useForm<ForgotPasswordFormValues>({ resolver });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      await mutateAsync(values.email);
      setIsSubmitted(true);
    } catch (error) {
      if (isApiError(error)) {
        form.setError('root', { message: getErrorMessage(error.code) });
        return;
      }
      form.setError('root', {
        message: getErrorMessage(ERROR_CODES.generic.INTERNAL_SERVER_ERROR),
      });
    }
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    void form.handleSubmit(onSubmit)(e);
  };

  const email = form.getValues('email');
  return { form, onSubmit: handleSubmit, isPending, isSubmitted, email };
};
