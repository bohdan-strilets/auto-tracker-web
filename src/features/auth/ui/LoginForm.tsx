import { Button, FormError, FormField, Input, Stack } from '@shared/ui';

import { useLoginForm } from '../model';

export const LoginForm = () => {
  const { form, onSubmit, isPending } = useLoginForm();

  const {
    register,
    formState: { errors },
  } = form;

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

        <FormField label="Password" error={errors.password?.message}>
          <Input
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            {...register('password')}
          />
        </FormField>

        <FormError align="center" message={errors.root?.message} />

        <Button type="submit" isLoading={isPending} fullWidth>
          Sign in
        </Button>
      </Stack>
    </form>
  );
};
