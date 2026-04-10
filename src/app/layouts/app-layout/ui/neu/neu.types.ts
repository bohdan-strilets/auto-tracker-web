export interface NeuButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  danger?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export interface NeuDividerProps {
  expanded?: boolean;
}

export interface NeuContainerProps {
  children: React.ReactNode;
  isActive?: boolean;
  danger?: boolean;
  className?: string;
}
