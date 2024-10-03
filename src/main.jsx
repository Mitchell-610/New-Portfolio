import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import ErrorPage from './components/pages/ErrorPage';
import Contact from './components/pages/Contact';
import Applications from './components/pages/Applications';
import MyWork from './components/pages/MyWork';
import AboutMe from './components/cards/AboutMe'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/application/:id',
        element: <Applications />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/mywork',
        element: <MyWork />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
