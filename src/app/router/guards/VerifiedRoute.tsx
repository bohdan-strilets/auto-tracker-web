import { Navigate, Outlet } from 'react-router-dom';

import { useUser } from '@features/auth';

import { PATHS } from '@shared/router';

export const VerifiedRoute = () => {
  const user = useUser();

  if (!user?.emailVerified) {
    return <Navigate to={PATHS.verifyEmailNotice} replace />;
  }

  return <Outlet />;
};
