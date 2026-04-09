import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from '@app/layouts';

import { AddEventPage } from '@pages/AddEvent';
import { GaragePage } from '@pages/GaragePage';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { ProfilePage } from '@pages/ProfilePage';
import { RegisterPage } from '@pages/RegisterPage';
import { RemindersPage } from '@pages/RemindersPage';
import { StatisticsPage } from '@pages/StatisticsPage';
import { TimelinePage } from '@pages/TimelinePage';
import { VehiclePage } from '@pages/VehiclePage';
import { VerifyEmailNoticePage } from '@pages/VerifyEmailNoticePage';
import { VerifyEmailPage } from '@pages/VerifyEmailPage';

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
        children: [
          // Verified — only for users with verified email
          {
            element: <VerifiedRoute />,
            children: [
              { index: true, element: <HomePage /> },
              { path: 'garage', element: <GaragePage /> },
              { path: 'garage/:vehicleId', element: <VehiclePage /> },
              { path: 'garage/:vehicleId/timeline', element: <TimelinePage /> },
              { path: 'garage/:vehicleId/add-event', element: <AddEventPage /> },
              { path: 'reminders', element: <RemindersPage /> },
              { path: 'statistics', element: <StatisticsPage /> },
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
