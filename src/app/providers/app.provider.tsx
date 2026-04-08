import { RouterProvider } from 'react-router-dom';

import { router } from '@app/router';

import { ReactQueryProvider } from './react-query.provider';

export const AppProvider = () => {
  return (
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  );
};
