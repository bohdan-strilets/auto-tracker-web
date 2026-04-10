import { sidebarSurfaceStyle } from '../neu';

import type { WrapperProps } from './wrapper.types';

export const Wrapper = ({ children, isCollapsed = false }: WrapperProps) => {
  return (
    <aside
      className={
        isCollapsed
          ? 'hidden lg:flex flex-col items-center h-full shrink-0 py-5 rounded-r-xl'
          : 'hidden lg:flex flex-col h-full shrink-0 py-5 px-3 rounded-r-xl'
      }
      style={{ width: isCollapsed ? 78 : 280, ...sidebarSurfaceStyle }}
    >
      {children}
    </aside>
  );
};
