import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import GeneralPage from './pages/GeneralPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "contacts",
    element: <ContactsPage/>,
  },
  {
    path: "about",
    element: <AboutPage/>,
  },
  {
    path: "blog",
    element: <BlogPage/>,
  },
  {
    path: "general",
    element: <GeneralPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
