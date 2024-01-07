import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import router from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
