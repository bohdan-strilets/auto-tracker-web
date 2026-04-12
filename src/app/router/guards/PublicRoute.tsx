import { Navigate, Outlet } from 'react-router-dom';

import { useIsAuthenticated } from '@features/auth';

import { PATHS } from '@shared/lib/router';

export const PublicRoute = () => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    return <Navigate to={PATHS.workspaces} replace />;
  }

  return <Outlet />;
};
