import { PanelLeft } from 'lucide-react';

import { useToggleSidebar } from '@shared/lib/store';
import { Icon } from '@shared/ui';

export const CollapseButton = () => {
  const toggle = useToggleSidebar();

  return (
    <button
      onClick={toggle}
      className="w-10 h-10 rounded-xs flex items-center justify-center transition-all duration-normal shadow-neu-sm text-sidebar-icon hover:-translate-y-px"
      style={{
        background: 'linear-gradient(145deg, var(--color-sidebar-from), var(--color-sidebar-to))',
      }}
    >
      <Icon icon={PanelLeft} size="xs" color="tertiary" />
    </button>
  );
};
