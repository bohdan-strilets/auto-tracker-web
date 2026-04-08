import { createBrowserRouter } from 'react-router-dom';

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

export const router = createBrowserRouter([
  // Auth routes (public)
  {
    path: '/auth',
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },

  // App routes (private)
  {
    path: '/',
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

  // 404
  { path: '*', element: <div>404</div> },
]);
