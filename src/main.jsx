import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './routes/root.jsx';
import ErrorPage from "./error-page";

import Challenges from './routes/challenges/Challenges.jsx';
import Community from './routes/community/Community.jsx';
import Rewards from './routes/rewards/Rewards.jsx';
import TakePicture from './components/takepicture/TakePicture';
import Profile from './routes/profile/Profile.jsx';
import Admin from './routes/admin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Community/>
      },
      {
        path: "challenges",
        element: <Challenges />,
      },
      {
        path: 'rewards',
        element: <Rewards/>
      },
      {
        path: "profile",
        element: <Profile />
      }
    ]
  },
  {
    path: '/admin',
    element: <Admin/>
  },
  {
    path: "Camera",
    element: <TakePicture/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
