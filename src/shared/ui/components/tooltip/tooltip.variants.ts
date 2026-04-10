import { cva } from 'class-variance-authority';

export const tooltipVariants = cva([
  'z-tooltip px-2.5 py-1.5',
  'bg-bg-card border border-border rounded-sm',
  'text-xs font-medium text-text-primary',
  'shadow-neu',
  'animate-in fade-in-0 zoom-in-95',
  'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
  'data-[side=bottom]:slide-in-from-top-2',
  'data-[side=top]:slide-in-from-bottom-2',
  'data-[side=left]:slide-in-from-right-2',
  'data-[side=right]:slide-in-from-left-2',
]);
