import React from 'react';
import './Layout.css';
import Header from '../Header/Header.jsx';
import Banner from '../Banner/Banner.jsx';
import Favourites from '../Favourites/Favourites.jsx';
import { DarkModeProvider } from '../Context/DarkModeContext';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


export default function Layout({headerFavouritesIsClicked, setHeaderFavouritesIsClicked}) {

  return (
    <>
      <DarkModeProvider>
        <Header headerFavouritesIsClicked={headerFavouritesIsClicked} setHeaderFavouritesIsClicked={setHeaderFavouritesIsClicked} />
        <Banner />
        <Outlet />
        <Favourites headerFavouritesIsClicked={headerFavouritesIsClicked}/>
        <Footer />
      </DarkModeProvider>
    </>
  )
}
