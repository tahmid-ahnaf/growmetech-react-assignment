import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes';
import { DialogProvider } from './Context/DialogContext';


const rootElement = document.getElementById('root') as HTMLElement;


ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>

<DialogProvider>
<RouterProvider router={router} />
</DialogProvider>
  
  
          
  </React.StrictMode>,
)

