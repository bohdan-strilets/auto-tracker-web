import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { WORKSPACE_TYPE } from '@entities/workspace';

import { isApiError, getErrorMessage, ERROR_CODES } from '@shared/api';
import { PATHS } from '@shared/lib/router';

import { useCreateWorkspaceMutation } from '../api';

import { createWorkspaceSchema, type CreateWorkspaceFormValues } from './create-workspace.schema';
import { useSetActiveWorkspace } from './workspace.selectors';
import type { UseCreateWorkspaceFormOptions } from './workspace.type';

export const useCreateWorkspaceForm = ({ onSuccess }: UseCreateWorkspaceFormOptions = {}) => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useCreateWorkspaceMutation();

  const defaultValues: CreateWorkspaceFormValues = {
    name: '',
    type: WORKSPACE_TYPE.PERSONAL,
  };

  const resolver = zodResolver(createWorkspaceSchema);
  const form = useForm<CreateWorkspaceFormValues>({ resolver, defaultValues });
  const setActiveWorkspace = useSetActiveWorkspace();

  const onSubmit = async (values: CreateWorkspaceFormValues) => {
    try {
      const workspace = await mutateAsync(values);
      setActiveWorkspace(workspace.id);
      onSuccess?.();
      await navigate(PATHS.workspace.garage(workspace.id), { replace: true });
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
