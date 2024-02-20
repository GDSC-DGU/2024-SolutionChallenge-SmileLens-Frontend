import { createBrowserRouter } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Introduce from './pages/introduce/Introduce';
import Upload from './pages/upload/Upload';
import Select from './pages/select/Select';
import Wait from './pages/wait/Wait';
import Summary from './pages/summary/Summary';
import Letter from './pages/letter/Letter';
import Voice from './pages/voice/Voice';



import App from './App';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },

      {
        path: '/introduce',
        element: <Introduce />,
      },

      {
        path: '/upload',
        element: <Upload />,
      },

      {
        path: '/select',
        element: <Select />,
      },

      {
        path: '/wait',
        element: <Wait />,
      },

      {
        path: '/summary',
        element: <Summary />,
      },

      {
        path: '/letter',
        element: <Letter />,
      },

      {
        path: '/voice',
        element: <Voice />,
      },

    ],
  },
]);

export default router;
