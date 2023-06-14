import React, { useContext, useEffect } from 'react';
import style from './CSS/Favourites.module.css';
import {toggleFavourtiesSection} from './JS/Favourites.js';
import { FavouritesContext } from '../Context/FavouritesContext';

export default function Favourites() {
  const {headerFavouritesIsClicked} = useContext(FavouritesContext);

  useEffect(()=>{}, [headerFavouritesIsClicked])
  return (
<section className={`${style.favouritesSection} ${toggleFavourtiesSection(headerFavouritesIsClicked)}`} id="favourites-section">
  <div className={`container ${style.favouritesSectionContainer}`}>
    <div className={style.favouritesItems}>
      <h3 className={style.favouritesItemsH3}>My Favourite Topics</h3>
      <div className={style.favouritesItemsContainer}>
        <div className={style.favouritesItem}>
          <div className={style.favouriteCardThumbnail}>
            <img className={style.favouriteCardThumbnailImg} src="./images/topics-thumbnails/react.webp" alt="react course" />
          </div>
          <div className={style.favouriteCardDetailsContainer}>
            <h5 className={style.favouritesItemH5}>React</h5>
            <div className={style.starRatingBox}>
              <div className={style.starBorder}>
                <div className={style.secondLevelStar}>
                </div>
              </div>
              <div className={style.starBorder}>
                <div className={style.secondLevelStar}>
                </div>
              </div>
              <div className={style.starBorder}>
                <div className={style.secondLevelStar}>
                </div>
              </div>
              <div className={style.starBorder}>
                <div className={style.secondLevelStar}>
                </div>
              </div>
              <div className={style.starBorder}>
                <div className={style.secondLevelStar}>
                  <div className={style.starColorFillFavourites} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.favouritesItem}>
          <div className={style.favouriteCardThumbnail}>
            <img className={style.favouriteCardThumbnailImg} src="./images/topics-thumbnails/cloud.jpeg" alt="react course" />
          </div>
          <div className={style.favouriteCardDetailsContainer}>
            <h5 className={style.favouritesItemH5}>Cloud Computing</h5>
            <div className={style.starRatingBox}>
              <div className={style.starBorder}>
                <div className={style.secondLevelStar}>
                </div>
              </div>
              <div className={style.starBorder}>
                <div className={style.secondLevelStar}>
                </div>
              </div>
              <div className={style.starBorder}>
                <div className={style.secondLevelStar}>
                </div>
              </div>
              <div className={style.starBorder}>
                <div className={style.secondLevelStar}>
                </div>
              </div>
              <div className={style.starBorder}>
                <div className={style.secondLevelStar}>
                  <div className={style.starColorFill} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
