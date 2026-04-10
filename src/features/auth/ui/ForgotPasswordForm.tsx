import { Button, FormError, FormField, Input, Stack } from '@shared/ui';

import type { ForgotPasswordFormProps } from '../model';

export const ForgotPasswordForm = ({ form }: ForgotPasswordFormProps) => {
  const { form: formInstance, onSubmit, isPending } = form;

  const {
    register,
    formState: { errors },
  } = formInstance;

  return (
    <form onSubmit={onSubmit} noValidate>
      <Stack gap="md">
        <FormField label="Email" error={errors.email?.message}>
          <Input
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            {...register('email')}
          />
        </FormField>

        <FormError align="center" message={errors.root?.message} />

        <Button type="submit" isLoading={isPending} fullWidth>
          Send reset link
        </Button>
      </Stack>
    </form>
  );
};
