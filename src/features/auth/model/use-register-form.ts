import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { isApiError, getErrorMessage, ERROR_CODES } from '@shared/api';
import { setFieldErrors } from '@shared/lib/form';
import { detectLocale, detectTimezone } from '@shared/lib/locale';
import { PATHS } from '@shared/router';

import { useRegisterMutation } from '../api';

import { useSetAuth } from './auth.selectors';
import type { RegisterPayload } from './auth.types';
import { registerSchema, type RegisterFormValues } from './register.schema';

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useRegisterMutation();
  const setAuth = useSetAuth();

  const resolver = zodResolver(registerSchema);
  const form = useForm<RegisterFormValues>({ resolver });

  const onSubmit = async (values: RegisterFormValues) => {
    const { confirmPassword: _, ...rest } = values;

    const payload: RegisterPayload = {
      ...rest,
      locale: detectLocale(),
      timezone: detectTimezone(),
    };

    try {
      const { user, accessToken } = await mutateAsync(payload);
      setAuth(user, accessToken);
      await navigate(PATHS.auth.verifyEmailNotice, { replace: true });
    } catch (error) {
      if (isApiError(error)) {
        if (error.details?.length) {
          setFieldErrors(error.details, form.setError);
          return;
        }

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

  return {
    form,
    onSubmit: handleSubmit,
    isPending,
  };
};
