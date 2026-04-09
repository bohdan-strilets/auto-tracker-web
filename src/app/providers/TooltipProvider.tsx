import type { PropsWithChildren } from 'react';

import { TooltipProvider } from '@radix-ui/react-tooltip';

export const RadixTooltipProvider = ({ children }: PropsWithChildren) => {
  return <TooltipProvider delayDuration={300}>{children}</TooltipProvider>;
};
