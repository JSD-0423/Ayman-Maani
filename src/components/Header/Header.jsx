import React, { useContext } from 'react';
import style from './Header.module.css';
import {DarkModeAdjustments} from './Header.js';
import { Link } from 'react-router-dom';
import{DarkModeContext} from '../Context/DarkModeContext.js';
import{favouritestabStatus} from './Header.js'
import IconButton from '../IconButton/IconButton.jsx';

export default function Header({headerFavouritesIsClicked, setHeaderFavouritesIsClicked}) {

  const {darkMode , setDarkMode} = useContext (DarkModeContext);

  return (
<header className={style.headerSection}>
  <div className={`container ${style.headerContainer}`}>
    <div className={style.pageModes}>
      <Link to="home" className={style.pageTitle}>
        <h1 className={style.pageTitleH1} id="page-title" tabIndex="0">Web Topics</h1>
      </Link>
      <div className={style.pageModesButtons}>
      <IconButton btnFucntion={()=> DarkModeAdjustments(darkMode,setDarkMode)}  type="button" BtnId="dark-mode-button" BtnClasses={`${style.darkModeButton} ${style.modesButtons}`} iconClass={style.moon} iconId="moon" name="moon-outline" condition={darkMode ? 'Light Mode' : 'Dark Mode'} />
      <IconButton btnFucntion={()=> favouritestabStatus(headerFavouritesIsClicked, setHeaderFavouritesIsClicked)} type="button" BtnId="header-heart-button" BtnClasses={style.modesButtons} iconClass = {headerFavouritesIsClicked ? style.heartIconRedColor : ''} iconId="heart" name={headerFavouritesIsClicked ? "heart" : "heart-outline"} BtnText="Favourites" />
      </div>
    </div>
  </div>
</header>
  )
}
