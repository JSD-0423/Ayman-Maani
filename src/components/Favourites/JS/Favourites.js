import style from '../CSS/Favourites.module.css';
export const toggleFavourtiesSection =(headerFavouritesIsClicked)=>{
    const FavouritesSection ={
        FavOn : style.favouritesAnimationForward,
        favOff : style.favouritesAnimationReverse
      }
    if(headerFavouritesIsClicked === true ){
        return FavouritesSection.FavOn;
    }else if (headerFavouritesIsClicked === false){
        return FavouritesSection.favOff;
    }
}