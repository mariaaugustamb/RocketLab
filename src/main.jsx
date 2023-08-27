import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import Root from './routes/root';
import ErrorPage from './error-page';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import {Cart} from './pages/Cart';
import {Finished} from './pages/Finished';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/finished",
    element: <Finished />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
