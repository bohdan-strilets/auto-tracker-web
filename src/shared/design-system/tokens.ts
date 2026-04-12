export const colors = {
  accent: {
    DEFAULT: 'var(--color-accent)',
    light: 'var(--color-accent-light)',
    dark: 'var(--color-accent-dark)',
    rgb: 'var(--color-accent-rgb)',
  },

  semantic: {
    success: {
      DEFAULT: 'var(--color-success)',
      rgb: 'var(--color-success-rgb)',
    },
    warning: {
      DEFAULT: 'var(--color-warning)',
      rgb: 'var(--color-warning-rgb)',
    },
    error: {
      DEFAULT: 'var(--color-error)',
      rgb: 'var(--color-error-rgb)',
    },
    info: 'var(--color-info)',
  },

  categories: {
    fuel: {
      DEFAULT: 'var(--color-fuel)',
      rgb: 'var(--color-fuel-rgb)',
    },
    service: {
      DEFAULT: 'var(--color-service)',
      rgb: 'var(--color-service-rgb)',
    },
    documents: {
      DEFAULT: 'var(--color-documents)',
      rgb: 'var(--color-documents-rgb)',
    },
    expenses: {
      DEFAULT: 'var(--color-expenses)',
      rgb: 'var(--color-expenses-rgb)',
    },
    reminders: {
      DEFAULT: 'var(--color-reminders)',
      rgb: 'var(--color-reminders-rgb)',
    },
  },

  workspaces: {
    personal: {
      DEFAULT: 'var(--color-personal)',
      rgb: 'var(--color-personal-rgb)',
    },
    family: {
      DEFAULT: 'var(--color-family)',
      rgb: 'var(--color-family-rgb)',
    },
    business: {
      DEFAULT: 'var(--color-business)',
      rgb: 'var(--color-business-rgb)',
    },
  },

  roles: {
    owner: {
      DEFAULT: 'var(--color-owner)',
      rgb: 'var(--color-owner-rgb)',
    },
    admin: {
      DEFAULT: 'var(--color-admin)',
      rgb: 'var(--color-admin-rgb)',
    },
    member: {
      DEFAULT: 'var(--color-member)',
      rgb: 'var(--color-member-rgb)',
    },
  },

  bg: {
    DEFAULT: 'var(--color-bg)',
    card: 'var(--color-bg-card)',
    elevated: 'var(--color-bg-elevated)',
    muted: 'var(--color-bg-muted)',
    sunken: 'var(--color-bg-sunken)',
  },

  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    tertiary: 'var(--color-text-tertiary)',
    disabled: 'var(--color-text-disabled)',
    inverse: 'var(--color-text-inverse)',
  },

  border: {
    DEFAULT: 'var(--color-border)',
    medium: 'var(--color-border-medium)',
  },

  sidebar: {
    from: 'var(--color-sidebar-from)',
    to: 'var(--color-sidebar-to)',
    icon: 'var(--color-sidebar-icon)',
    iconActive: 'var(--color-sidebar-icon-active)',
    activeFrom: 'var(--color-sidebar-active-from)',
    activeTo: 'var(--color-sidebar-active-to)',
  },
} as const;

export const shadows = {
  sm: 'var(--shadow-sm)',
  base: 'var(--shadow-base)',
  card: 'var(--shadow-card)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  glowAccent: 'var(--shadow-glow-accent)',
  glowExpenses: 'var(--shadow-glow-expenses)',

  neu: {
    dark: 'var(--neu-shadow-dark)',
    light: 'var(--neu-shadow-light)',
    sm: 'var(--neu-shadow-sm)',
    base: 'var(--neu-shadow-base)',
    md: 'var(--neu-shadow-md)',
    lg: 'var(--neu-shadow-lg)',
    inset: 'var(--neu-shadow-inset)',
    active: 'var(--neu-shadow-active)',
  },
} as const;

export const radius = {
  xs: 'var(--radius-xs)',
  sm: 'var(--radius-sm)',
  base: 'var(--radius-base)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  full: 'var(--radius-full)',
} as const;

export const duration = {
  fast: 'var(--duration-fast)',
  normal: 'var(--duration-normal)',
  slow: 'var(--duration-slow)',
} as const;

export const easing = {
  in: 'var(--ease-in)',
  out: 'var(--ease-out)',
  inOut: 'var(--ease-in-out)',
  spring: 'var(--ease-spring)',
} as const;

export const zIndex = {
  dropdown: 'var(--z-dropdown)',
  sticky: 'var(--z-sticky)',
  overlay: 'var(--z-overlay)',
  modal: 'var(--z-modal)',
  popover: 'var(--z-popover)',
  toast: 'var(--z-toast)',
  tooltip: 'var(--z-tooltip)',
} as const;
