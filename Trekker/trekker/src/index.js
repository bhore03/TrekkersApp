import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from "./About";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Body from './Body';



const appRouter = createBrowserRouter([
     {
      path:"/",
      element:< App/>,
      children:[
      {
        path:"/",
        element: <Body />,
      },
      {
        path:"/about",
        element:<About />,
      },
    ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={appRouter} />
  </React.StrictMode>
);


reportWebVitals();

