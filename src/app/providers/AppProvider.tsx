import { RouterProvider } from 'react-router-dom';

import { router } from '@app/router';

import { ReactQueryProvider } from './ReactQueryProvider';
import { RadixTooltipProvider } from './TooltipProvider';

export const AppProvider = () => {
  return (
    <ReactQueryProvider>
      <RadixTooltipProvider>
        <RouterProvider router={router} />
      </RadixTooltipProvider>
    </ReactQueryProvider>
  );
};
