import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './Components/Admin/Admin.jsx';
import Register from './Components/Register/Register.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import Home from './Components/Home/Home.jsx';
import AuthProvider, { AuthContext } from './Provider/AuthProvider.jsx';
import PrivetRouts from './PrivetRouts/PrivetRouts.jsx';
import Order from './Components/Order/Order.jsx';
import Profile from './Components/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/order",
        element: <PrivetRouts><Order /></PrivetRouts>
      },
      {
        path: "/profile",
        element: <PrivetRouts><Profile /></PrivetRouts>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
