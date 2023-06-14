import React from 'react';
import WebTopics from '../Pages/WebTopics/WebTopics.jsx';
import Details from '../Pages/Details/Details.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';

export default function App() {
  const router = createBrowserRouter([
    {path: 'http://JSD-0423.github.io/Ayman-Maani-Project1/', element: <Layout />, 
    errorElement:<PageNotFound />, 
    children:[
      {index: true, element: <WebTopics/>},
      {path: 'Details', element: <Details />}
    ]},
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

