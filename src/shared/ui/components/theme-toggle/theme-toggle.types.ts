export type Theme = 'light' | 'dark' | 'system';

export interface ThemeToggleProps {
  value?: Theme;
  onChange?: (theme: Theme) => void;
  className?: string;
}
