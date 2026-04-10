export interface SidebarState {
  isSidebarCollapsed: boolean;
}

export interface SidebarActions {
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
}
