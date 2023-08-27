import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home.js'
import {Cart} from './pages/Cart.js'
import {Finished} from './pages/Finished.js'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
