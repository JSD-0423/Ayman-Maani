import {toggleDarkMode} from '../Darkmode/Darkmode.js';

export const DarkModeAdjustments = (darkMode, setDarkMode)=>{
    toggleDarkMode();
    setDarkMode(!darkMode);
  }

  export const favouritestabStatus = (headerFavouritesIsClicked, setHeaderFavouritesIsClicked) => {
    if(headerFavouritesIsClicked === null){
        setHeaderFavouritesIsClicked(true);
    }else{
        setHeaderFavouritesIsClicked(!headerFavouritesIsClicked);
    }
  };