import React, { createContext, useState } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = ({children}) =>{

  const [headerFavouritesIsClicked, setHeaderFavouritesIsClicked] = useState(null);
  const favouritestabStatus = () => {
    if(headerFavouritesIsClicked === null){
        setHeaderFavouritesIsClicked(true);
    }else{
        setHeaderFavouritesIsClicked(!headerFavouritesIsClicked);
    }
  };
 
  const contextValue = {
    headerFavouritesIsClicked,
    favouritestabStatus,
  };
  return <FavouritesContext.Provider value ={contextValue}>{children}</FavouritesContext.Provider>
}