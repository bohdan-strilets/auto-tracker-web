export const PATHS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    verifyEmail: '/auth/verify-email',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
  },

  workspaces: '/workspaces',

  workspace: {
    garage: (workspaceId: string) => `/w/${workspaceId}/garage`,
    vehicle: (workspaceId: string, vehicleId: string) => `/w/${workspaceId}/garage/${vehicleId}`,
    timeline: (workspaceId: string, vehicleId: string) =>
      `/w/${workspaceId}/garage/${vehicleId}/timeline`,
    addEvent: (workspaceId: string, vehicleId: string) =>
      `/w/${workspaceId}/garage/${vehicleId}/add-event`,
    reminders: (workspaceId: string) => `/w/${workspaceId}/reminders`,
    statistics: (workspaceId: string) => `/w/${workspaceId}/statistics`,
  },

  verifyEmailNotice: '/verify-email-notice',
  profile: '/profile',
} as const;
