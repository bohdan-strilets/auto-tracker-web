import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { isApiError, getErrorMessage, ERROR_CODES } from '@shared/api';
import { setFieldErrors } from '@shared/lib/form';
import { PATHS } from '@shared/lib/router';

import { useLoginMutation } from '../api';

import { useSetAuth } from './auth.selectors';
import { loginSchema, type LoginFormValues } from './login.schema';

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useLoginMutation();
  const setAuth = useSetAuth();

  const resolver = zodResolver(loginSchema);
  const form = useForm<LoginFormValues>({ resolver });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const { user, accessToken } = await mutateAsync(values);
      setAuth(user, accessToken);
      await navigate(PATHS.workspaces, { replace: true });
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

  return { form, onSubmit: handleSubmit, isPending };
};
