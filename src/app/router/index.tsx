import { createBrowserRouter, Navigate } from 'react-router-dom';

import { AppLayout, AuthLayout } from '@app/layouts';

import { AddEventPage } from '@pages/AddEvent';
import { ForgotPasswordPage } from '@pages/ForgotPasswordPage';
import { GaragePage } from '@pages/GaragePage';
import { LoginPage } from '@pages/LoginPage';
import { ProfilePage } from '@pages/ProfilePage';
import { RegisterPage } from '@pages/RegisterPage';
import { RemindersPage } from '@pages/RemindersPage';
import { ResetPasswordPage } from '@pages/ResetPasswordPage';
import { StatisticsPage } from '@pages/StatisticsPage';
import { TimelinePage } from '@pages/TimelinePage';
import { VehiclePage } from '@pages/VehiclePage';
import { VerifyEmailNoticePage } from '@pages/VerifyEmailNoticePage';
import { VerifyEmailPage } from '@pages/VerifyEmailPage';
import { WorkspacesPage } from '@pages/WorkspacesPage';

import { PATHS } from '@shared/lib/router';

import { ProtectedRoute, PublicRoute, VerifiedRoute } from './guards';

export const router = createBrowserRouter([
  // Public
  {
    element: <PublicRoute />,
    children: [
      {
        path: '/auth',
        element: <AuthLayout />,
        children: [
          { path: 'login', element: <LoginPage /> },
          { path: 'register', element: <RegisterPage /> },
          { path: 'forgot-password', element: <ForgotPasswordPage /> },
          { path: 'reset-password', element: <ResetPasswordPage /> },
        ],
      },
    ],
  },

  // Common
  { path: '/auth/verify-email', element: <VerifyEmailPage /> },

  // Protected
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <AppLayout />,
        children: [
          // Verified — only for users with verified email
          {
            element: <VerifiedRoute />,
            children: [
              { index: true, element: <Navigate to={PATHS.workspaces} replace /> },
              { path: 'workspaces', element: <WorkspacesPage /> },

              // Workspace scoped
              { path: 'w/:workspaceId/garage', element: <GaragePage /> },
              { path: 'w/:workspaceId/garage/:vehicleId', element: <VehiclePage /> },
              { path: 'w/:workspaceId/garage/:vehicleId/timeline', element: <TimelinePage /> },
              { path: 'w/:workspaceId/garage/:vehicleId/add-event', element: <AddEventPage /> },
              { path: 'w/:workspaceId/reminders', element: <RemindersPage /> },
              { path: 'w/:workspaceId/statistics', element: <StatisticsPage /> },
              { path: 'profile', element: <ProfilePage /> },
            ],
          },

          // Protected but without verification
          { path: 'verify-email-notice', element: <VerifyEmailNoticePage /> },
        ],
      },
    ],
  },

  // Fallback route
  { path: '*', element: <div>404</div> },
]);
