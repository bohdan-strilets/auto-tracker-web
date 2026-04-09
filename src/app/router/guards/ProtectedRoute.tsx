import { Navigate, Outlet } from 'react-router-dom';

import { useIsAuthenticated } from '@features/auth';

import { PATHS } from '@shared/router';

export const ProtectedRoute = () => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to={PATHS.auth.login} replace />;
  }

  return <Outlet />;
};
