import React,{useRef, useState} from 'react';
import Home from '../Pages/Home/Home.jsx';
import Details from '../Pages/Details/Details.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import PageNotFound from '../Pages/PageNotFound/PageNotFound.jsx';

export default function App() {
  const [headerFavouritesIsClicked, setHeaderFavouritesIsClicked] = useState(null);
  const [webTopicsData, setWebTopicsData] = useState([]);

  const router = createBrowserRouter([
    {path: '/', element: <Layout headerFavouritesIsClicked ={headerFavouritesIsClicked} setHeaderFavouritesIsClicked={setHeaderFavouritesIsClicked} />,
    errorElement:<PageNotFound />, 
    children:[
      {path:'/', index:true, element: <Home webTopicsData = {webTopicsData} setWebTopicsData={setWebTopicsData}/>},
      {path: '/details', element: <Details webTopicsData = {webTopicsData} setWebTopicsData={setWebTopicsData}/>}
    ]}],{ basename: process.env.PUBLIC_URL });

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

