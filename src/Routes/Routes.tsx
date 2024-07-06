import {
  createBrowserRouter,
} from "react-router-dom";

import FirstPage from "../pages/FirstPage/FirstPage.tsx"
import Main from "../layout/Main.tsx";
import SecondPage from "../pages/SecondPage/SecondPage.tsx";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
          path: '/',
          element: <FirstPage></FirstPage>
      },

      {
        path: '/second',
        element: <SecondPage></SecondPage>
    },

      
    ]
  },
  
    ]);