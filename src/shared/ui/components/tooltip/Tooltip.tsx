import * as RadixTooltip from '@radix-ui/react-tooltip';

import { cn } from '@shared/lib/utils';

import type { TooltipProps } from './tooltip.types';
import { tooltipVariants } from './tooltip.variants';

export const Tooltip = ({ content, children, side = 'right', className }: TooltipProps) => {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side={side}
          sideOffset={8}
          className={cn(tooltipVariants(), className)}
        >
          {content}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};
