import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { initAuth } from '@app/auth';
import { AppProvider } from '@app/providers';

import '@app/styles/index.css';

const rootElement = document.getElementById('root');
const loaderElement = document.getElementById('initial-loader');

if (!rootElement) throw new Error('Root element not found');

await initAuth();
loaderElement?.remove();

createRoot(rootElement).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
);
