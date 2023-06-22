import React from 'react'
import style from './RatingStars.module.css';

export default function RatingStars() {
  return (
    <div className={style.starRatingBox}>
        <div className={style.starBorder}>
            <div className={style.secondLevelStar}></div>
        </div>
        <div className={style.starBorder}>
            <div className={style.secondLevelStar}></div>
        </div>
        <div className={style.starBorder}>
            <div className={style.secondLevelStar}></div>
        </div>
        <div className={style.starBorder}>
            <div className={style.secondLevelStar}></div>
        </div>
        <div className={style.starBorder}>
            <div className={style.secondLevelStar}>
                <div className={style.starColorFill}></div>
            </div>
        </div>
    </div>
  )
}
