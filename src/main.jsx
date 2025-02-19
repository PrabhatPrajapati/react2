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
import Admin from './admin/index.jsx';
import DetailPage from './components/detailPage.jsx';
import Dashboard from './admin/dashboard.jsx';
import Createoffer from './admin/createOffers.jsx';
import CreateOffer2 from './admin/createOffer2.jsx';
import TransactionHistory from './admin/transactionHistory.jsx';
import EprAccount from './admin/eprAccount.jsx';
import CreateOffers3 from './admin/createOffers3.jsx';
import Dashboard2 from './admin/dashboard2.jsx';
import EprAccount2 from './admin/eprAccount2.jsx';
import EprAccount3 from './admin/eprAccount3.jsx';
import EprAccount4 from './admin/eprAccount4.jsx';
import EprAccount5 from './admin/eprAccount5.jsx';
import EprAccount6 from './admin/eprAccount6.jsx';
import Dashboard3 from './superAdmin/dashboard3.jsx';
import CreateOffer4 from './admin/createOffer4.jsx';
import CreateOffer5 from './admin/createOffer5.jsx';
import Filter from './admin/filter.jsx';


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
        path : "/login",
        element : <Login/>
      },
      {
        path : "/signup",
        element : <Signin/>
      },
      {
        path : "/admin",
        element : <Admin/>
      },
      {
        path : "/dashboard",
        element : <Dashboard/>
      },
      {
        path : "/createoffers",
        element : <Createoffer/>
      },
      {
        path : "/createoffers2",
        element : <CreateOffer2/>
      },
      {
        path : "/transactionHistory",
        element : <TransactionHistory />
      },
      {
        path : "/eprAccount",
        element : <EprAccount />
      },
      {
        path : "/createOffers3",
        element : <CreateOffers3 />
      },
      {
        path : "/dashboard2",
        element : <Dashboard2/>
      },
      {
        path : "/eprAccount2",
        element : <EprAccount2/>
      },
      {
        path : "/eprAccount3",
        element : <EprAccount3/>
      },
      {
        path : "/eprAccount4",
        element : <EprAccount4/>
      },
      {
        path : "/eprAccount5",
        element : <EprAccount5/>
      },
      {
        path : "/eprAccount6",
        element : <EprAccount6/>
      },
      {
        path : "/dashboard3",
        element : <Dashboard3/>
      },
      {
        path : "/createOffer4",
        element : <CreateOffer4 />
      },
      {
        path : "/createOffer5",
        element : <CreateOffer5 />
      },
      {
        path : "/filter",
        element : <Filter />
      },

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
