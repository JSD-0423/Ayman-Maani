import React,{useRef, useState} from 'react';
import Home from '../Pages/Home/Home.jsx';
import Details from '../Pages/Details/Details.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import PageNotFound from '../Pages/PageNotFound/PageNotFound.jsx';

export default function App() {
  const [headerFavouritesIsClicked, setHeaderFavouritesIsClicked] = useState(null);
  const selectRef = useRef(null);
  const sortRef =useRef(null);
  const inputRef = useRef("");
  const [allFilters, setAllFilters] = useState([])
  const [filterCategory, setFilterCategory] = useState([]);
  const [searchAPIArray, setSearchAPIArray] = useState ([]);
  const [webTopicsData, setWebTopicsData] = useState([]);

  
  const router = createBrowserRouter([
    {path: '/', element: <Layout headerFavouritesIsClicked ={headerFavouritesIsClicked} setHeaderFavouritesIsClicked={setHeaderFavouritesIsClicked} />,
    errorElement:<PageNotFound />, 
    children:[
      {path:"Home", index:true, element: <Home webTopicsData = {webTopicsData} setWebTopicsData={setWebTopicsData} selectRef={selectRef} inputRef={inputRef} filterCategory={filterCategory} setFilterCategory={setFilterCategory} searchAPIArray={searchAPIArray} setSearchAPIArray={setSearchAPIArray} setAllFilters={setAllFilters} allFilters={allFilters} sortRef={sortRef} />},
      {path: 'Details', element: <Details webTopicsData = {webTopicsData} setWebTopicsData={setWebTopicsData}  />}
    ]}],{ basename: process.env.PUBLIC_URL });

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

