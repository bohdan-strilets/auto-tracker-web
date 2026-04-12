import { z } from 'zod';

import { WORKSPACE_TYPE } from '@entities/workspace';

export const createWorkspaceSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  type: z.enum(Object.values(WORKSPACE_TYPE)),
});

export type CreateWorkspaceFormValues = z.infer<typeof createWorkspaceSchema>;
