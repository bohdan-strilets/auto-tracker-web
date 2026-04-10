import { Button, FormError, FormField, Input, Stack } from '@shared/ui';

import { useResetPasswordForm } from '../model';

export const ResetPasswordForm = () => {
  const { form, onSubmit, isPending } = useResetPasswordForm();

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit} noValidate>
      <Stack gap="md">
        <FormField label="New password" error={errors.password?.message}>
          <Input
            type="password"
            placeholder="••••••••"
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
          Reset password
        </Button>
      </Stack>
    </form>
  );
};
