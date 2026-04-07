import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  // Auth routes (public)
  {
    path: '/auth',
    children: [
      { path: 'login', element: <div>Login</div> },
      { path: 'register', element: <div>Register</div> },
    ],
  },

  // App routes (private)
  {
    path: '/',
    children: [
      { index: true, element: <div>Home</div> },
      { path: 'garage', element: <div>Garage</div> },
      { path: 'garage/:vehicleId', element: <div>Vehicle Profile</div> },
      { path: 'garage/:vehicleId/timeline', element: <div>Timeline</div> },
      { path: 'garage/:vehicleId/add-event', element: <div>Add Event</div> },
      { path: 'reminders', element: <div>Reminders</div> },
      { path: 'statistics', element: <div>Statistics</div> },
      { path: 'settings', element: <div>Settings</div> },
    ],
  },

  // 404
  { path: '*', element: <div>404</div> },
]);
