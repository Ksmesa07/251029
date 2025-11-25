import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './page/Contact.jsx'
import Home from './page/Home.jsx'
import Menu from './page/Menu.jsx'
import About from './page/About.jsx'

export const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {index:true,element:<Home />},
      {path:'about',element:<About />},
      {path:'contact',element:<Contact />},
      {path:'menu',element:<Menu />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)