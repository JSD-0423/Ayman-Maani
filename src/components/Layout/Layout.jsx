import React from 'react';
import './CSS/Layout.css';
import Header from '../Header/Header.jsx';
import Banner from '../Banner/Banner.jsx';
import Favourites from '../Favourites/Favourites.jsx';
import { FavouritesProvider } from '../Context/FavouritesContext';
import { SearchProvider } from '../Context/SearchContext';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {

  return (
    <>
        <FavouritesProvider>
            <Header />
            <Banner />
        <SearchProvider>
        <Outlet></Outlet>
        </SearchProvider>
            <Favourites />
        </FavouritesProvider>
        <Footer />
    </>
  )
}
