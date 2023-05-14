import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import CheckOut from '../pages/CheckOut/CheckOut';
import Ordered from '../pages/Ordered/Ordered';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'registration',
        element: <Registration />,
      },
      {
        path: 'checkout/:id',
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://cars-doctor-server-seven.vercel.app/services/${params.id}`
          ),
      },
      {
        path: 'ordered',
        element: (
          <PrivateRoute>
            <Ordered />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
