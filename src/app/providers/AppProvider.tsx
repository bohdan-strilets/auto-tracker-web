import { RouterProvider } from 'react-router-dom';

import { router } from '@app/router';

import { ReactQueryProvider } from './ReactQueryProvider';

export const AppProvider = () => {
  return (
    <ReactQueryProvider>
      <RouterProvider router={router} />;
    </ReactQueryProvider>
  );
};
