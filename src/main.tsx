import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createRoot } from "react-dom/client";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {App} from './component'
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import Auth from './page/auth'
import Hero from './page/hero'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero/>,
  },
  {
    path: "/auth",
    element: <Auth/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />

  </React.StrictMode>,
)
