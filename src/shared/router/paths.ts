export const PATHS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },

  garage: {
    list: '/garage',
    byId: (vehicleId: string) => `/garage/${vehicleId}`,
    timeline: (vehicleId: string) => `/garage/${vehicleId}/timeline`,
    addEvent: (vehicleId: string) => `/garage/${vehicleId}/add-event`,
  },

  reminders: '/reminders',
  statistics: '/statistics',
  profile: '/profile',
} as const;
