import { Button, FormError, FormField, Input, Stack } from '@shared/ui';

import { useRegisterForm } from '../model';

export const RegisterForm = () => {
  const { form, onSubmit, isPending } = useRegisterForm();

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit} noValidate>
      <Stack gap="md">
        <Stack direction="row" gap="md">
          <FormField label="First name" error={errors.firstName?.message}>
            <Input
              type="text"
              placeholder="John"
              autoComplete="given-name"
              {...register('firstName')}
            />
          </FormField>

          <FormField label="Last name" error={errors.lastName?.message}>
            <Input
              type="text"
              placeholder="Doe"
              autoComplete="family-name"
              {...register('lastName')}
            />
          </FormField>
        </Stack>

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
            placeholder="At least 8 characters"
            autoComplete="new-password"
            {...register('password')}
          />
        </FormField>

        <FormField label="Confirm password" error={errors.confirmPassword?.message}>
          <Input
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            {...register('confirmPassword')}
          />
        </FormField>

        <FormError align="center" message={errors.root?.message} />

        <Button type="submit" isLoading={isPending} fullWidth>
          Create account
        </Button>
      </Stack>
    </form>
  );
};
