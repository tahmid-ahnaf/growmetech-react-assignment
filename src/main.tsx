import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes';


const rootElement = document.getElementById('root') as HTMLElement;


ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
  
  <RouterProvider router={router} />
          
  </React.StrictMode>,
)

