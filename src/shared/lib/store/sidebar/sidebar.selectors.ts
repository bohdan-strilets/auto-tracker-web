import { useSidebarStore } from './sidebar.store';

export const useIsSidebarCollapsed = () => {
  return useSidebarStore((state) => state.isSidebarCollapsed);
};
export const useToggleSidebar = () => {
  return useSidebarStore((state) => state.toggleSidebar);
};
