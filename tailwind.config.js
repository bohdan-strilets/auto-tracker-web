/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  safelist: [
    'bg-fuel',
    'bg-service',
    'bg-documents',
    'bg-expenses',
    'bg-reminders',
    'bg-success',
    'bg-warning',
    'bg-error',
    'bg-accent',
    'text-fuel',
    'text-service',
    'text-documents',
    'text-expenses',
    'text-reminders',
    'text-success',
    'text-warning',
    'text-error',
    'text-accent',
    'border-fuel',
    'border-service',
    'border-documents',
    'border-expenses',
    'border-reminders',
    'border-success',
    'border-warning',
    'border-error',
    'bg-personal',
    'bg-family',
    'bg-business',
    'text-personal',
    'text-family',
    'text-business',
    'border-personal',
    'border-family',
    'border-business',
    'bg-owner',
    'bg-admin',
    'bg-member',
    'text-owner',
    'text-admin',
    'text-member',
    'border-owner',
    'border-admin',
    'border-member',
  ],
  theme: {
    extend: {
      colors: {
        // Accent (замінює primary)
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          dark: 'var(--color-accent-dark)',
        },

        // Semantic
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',

        // Event categories
        fuel: 'var(--color-fuel)',
        service: 'var(--color-service)',
        documents: 'var(--color-documents)',
        expenses: 'var(--color-expenses)',
        reminders: 'var(--color-reminders)',

        // Workspace types
        personal: 'var(--color-personal)',
        family: 'var(--color-family)',
        business: 'var(--color-business)',

        // Workspace roles
        owner: 'var(--color-owner)',
        admin: 'var(--color-admin)',
        member: 'var(--color-member)',

        // Background
        bg: {
          DEFAULT: 'var(--color-bg)',
          card: 'var(--color-bg-card)',
          elevated: 'var(--color-bg-elevated)',
          muted: 'var(--color-bg-muted)',
          sunken: 'var(--color-bg-sunken)',
        },

        // Text
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          disabled: 'var(--color-text-disabled)',
          inverse: 'var(--color-text-inverse)',
        },

        // Border
        border: {
          DEFAULT: 'var(--color-border)',
          medium: 'var(--color-border-medium)',
        },

        // Sidebar
        sidebar: {
          from: 'var(--color-sidebar-from)',
          to: 'var(--color-sidebar-to)',
          icon: 'var(--color-sidebar-icon)',
          'icon-active': 'var(--color-sidebar-icon-active)',
          'active-from': 'var(--color-sidebar-active-from)',
          'active-to': 'var(--color-sidebar-active-to)',
        },

        // shadcn
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        input: 'var(--input)',
        ring: 'var(--ring)',
      },

      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-base)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },

      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-base)',
        card: 'var(--shadow-card)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        'glow-accent': 'var(--shadow-glow-accent)',
        'glow-expenses': 'var(--shadow-glow-expenses)',
        'neu-sm': 'var(--neu-shadow-sm)',
        neu: 'var(--neu-shadow-base)',
        'neu-md': 'var(--neu-shadow-md)',
        'neu-lg': 'var(--neu-shadow-lg)',
        'neu-inset': 'var(--neu-shadow-inset)',
        'neu-active': 'var(--neu-shadow-active)',
      },

      transitionDuration: {
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
      },

      transitionTimingFunction: {
        'ease-in': 'var(--ease-in)',
        'ease-out': 'var(--ease-out)',
        'ease-in-out': 'var(--ease-in-out)',
        spring: 'var(--ease-spring)',
      },

      zIndex: {
        dropdown: 'var(--z-dropdown)',
        sticky: 'var(--z-sticky)',
        overlay: 'var(--z-overlay)',
        modal: 'var(--z-modal)',
        popover: 'var(--z-popover)',
        toast: 'var(--z-toast)',
        tooltip: 'var(--z-tooltip)',
      },
    },
  },
  plugins: [],
};
