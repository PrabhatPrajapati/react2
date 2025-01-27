import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './frontend/Home.jsx';
import Signin from './components/Signin.jsx';
import Login from './components/login.jsx';

import DetailPage from './components/detailPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
    path : "/",
    element : <Home/>
      },
      
      {
        path : "/detail",
        element : <DetailPage/>
      },
      {
        path : "/Login",
        element : <Login/>
      },
      {
        path : "/Signup",
        element : <Signin/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
