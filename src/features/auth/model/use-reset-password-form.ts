import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { getErrorMessage, ERROR_CODES, isApiError } from '@shared/api';
import { PATHS } from '@shared/router';

import { useResetPasswordMutation } from '../api';

import { resetPasswordSchema, type ResetPasswordFormValues } from './reset-password.schema';

export const useResetPasswordForm = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useResetPasswordMutation();

  const resolver = zodResolver(resetPasswordSchema);
  const form = useForm<ResetPasswordFormValues>({ resolver });

  const onSubmit = async (values: ResetPasswordFormValues) => {
    if (!token) {
      form.setError('root', { message: getErrorMessage(ERROR_CODES.token.TOKEN_NOT_FOUND) });
      return;
    }

    try {
      await mutateAsync({ token, password: values.password });
      await navigate(PATHS.auth.login, { replace: true });
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

  return { form, onSubmit: handleSubmit, isPending };
};
