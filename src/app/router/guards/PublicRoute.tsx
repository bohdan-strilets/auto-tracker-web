import { Navigate, Outlet } from 'react-router-dom';

import { useIsAuthenticated } from '@features/auth';

import { PATHS } from '@shared/router';

export const PublicRoute = () => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    return <Navigate to={PATHS.garage.list} replace />;
  }

  return <Outlet />;
};
