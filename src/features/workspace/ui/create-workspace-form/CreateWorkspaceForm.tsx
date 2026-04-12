import { Controller } from 'react-hook-form';

import { useCreateWorkspaceForm } from '@features/workspace/model';

import { Button, FormError, FormField, Input, Stack } from '@shared/ui';

import { WorkspaceTypeSelector } from '../workspace-type-selector';

import type { CreateWorkspaceFormProps } from './create-workspace-form.types';

export const CreateWorkspaceForm = ({ onSuccess }: CreateWorkspaceFormProps) => {
  const { form, onSubmit, isPending } = useCreateWorkspaceForm({ onSuccess });

  const {
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit} noValidate>
      <Stack gap="md">
        <FormField label="Workspace name" error={errors.name?.message} required>
          <Input
            placeholder="e.g. My Garage"
            autoComplete="off"
            hasError={!!errors.name}
            {...register('name')}
          />
        </FormField>

        <FormField label="Type" error={errors.type?.message}>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <WorkspaceTypeSelector value={field.value} onChange={field.onChange} />
            )}
          />
        </FormField>

        <FormError align="center" message={errors.root?.message} />

        <Button type="submit" isLoading={isPending} fullWidth>
          Create workspace
        </Button>
      </Stack>
    </form>
  );
};
