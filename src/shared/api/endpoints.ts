export const ENDPOINTS = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    logout: '/auth/logout',
    logoutAll: '/auth/logout-all',
    refresh: '/auth/refresh',
    resendVerification: '/auth/resend-verification',
    verifyEmail: '/auth/verify-email',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    changePassword: '/auth/change-password',
    changeEmail: '/auth/change-email',
    confirmEmailChange: '/auth/confirm-email-change',
    me: '/auth/me',
  },

  sessions: {
    list: '/sessions',
    byId: (sessionId: string) => `/sessions/${sessionId}`,
  },

  workspaces: {
    create: '/workspaces',
    list: '/workspaces',
    byId: (workspaceId: string) => `/workspaces/${workspaceId}`,
    members: (workspaceId: string) => `/workspaces/${workspaceId}/members`,
    memberById: (workspaceId: string, userId: string) =>
      `/workspaces/${workspaceId}/members/${userId}`,
    invites: (workspaceId: string) => `/workspaces/${workspaceId}/invites`,
    inviteById: (workspaceId: string, inviteId: string) =>
      `/workspaces/${workspaceId}/invites/${inviteId}`,
  },

  invites: {
    accept: (token: string) => `/invites/${token}/accept`,
    reject: (token: string) => `/invites/${token}/reject`,
  },

  vehicles: {
    create: (workspaceId: string) => `/workspaces/${workspaceId}/vehicles`,
    list: (workspaceId: string) => `/workspaces/${workspaceId}/vehicles`,
    byId: (workspaceId: string, vehicleId: string) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}`,
    specs: (workspaceId: string, vehicleId: string) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/specs`,
  },

  timeline: {
    list: (workspaceId: string, vehicleId: string) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/timeline`,
    byId: (workspaceId: string, vehicleId: string, eventId: string) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/timeline/${eventId}`,
  },

  tires: {
    create: (workspaceId: string, vehicleId: string) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/tires`,
    list: (workspaceId: string, vehicleId: string) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/tires`,
    byId: (workspaceId: string, vehicleId: string, tireId: string) =>
      `/workspaces/${workspaceId}/vehicles/${vehicleId}/tires/${tireId}`,
  },

  media: {
    upload: '/media/upload',
    list: '/media',
    byId: (mediaId: string) => `/media/${mediaId}`,
  },
} as const;
