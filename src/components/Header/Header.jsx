import React, { useContext, useState } from 'react';
import style from './CSS/Header.module.css';
import {DarkModeAdjustments} from './JS/Header.js';
import { FavouritesContext } from '../Context/FavouritesContext';
import { Link } from 'react-router-dom';


export default function Header() {

  const [darkMode, setDarkMode] = useState(false);// initial text value of darkmode button 

  const {favouritestabStatus, headerFavouritesIsClicked} = useContext(FavouritesContext);

  return (
<header className={style.headerSection}>
  <div className={`container ${style.headerContainer}`}>
    <div className={style.pageModes}>
      <Link to='Ayman-Maani-Project1' className={style.pageTitle}>
        <h1 className={style.pageTitleH1} id="page-title" tabIndex="0">Web Topics</h1>
      </Link>
      <div className={style.pageModesButtons}>
        <button onClick={() => DarkModeAdjustments(setDarkMode, darkMode)} type="button" id="dark-mode-button" className={`${style.darkModeButton} ${style.modesButtons}`}>
          <span className={style.moon}><ion-icon id="moon" name="moon-outline" /></span>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        <button onClick={favouritestabStatus} type="button" id="header-heart-button" className={style.modesButtons}>
          <span className={headerFavouritesIsClicked ? style.heartIconRedColor : ''}><ion-icon id="heart" name={headerFavouritesIsClicked ? "heart" : "heart-outline"} /></span> Favourites</button>
      </div>
    </div>
  </div>
</header>
  )
}
