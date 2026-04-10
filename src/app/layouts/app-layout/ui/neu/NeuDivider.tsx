import { cn } from '@shared/lib/utils';

import type { NeuDividerProps } from './neu.types';

export const NeuDivider = ({ expanded }: NeuDividerProps) => (
  <div
    className={cn('shrink-0', expanded ? 'w-full my-2' : 'w-8 my-3 mx-auto')}
    style={{
      height: '1px',
      background:
        'linear-gradient(90deg, transparent, var(--neu-shadow-dark) 20%, var(--neu-shadow-dark) 80%, transparent)',
    }}
  />
);
