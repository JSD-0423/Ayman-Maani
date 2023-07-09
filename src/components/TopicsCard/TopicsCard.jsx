import React from 'react'
import style from './TopicsCard.module.css';
import { Link } from 'react-router-dom';
import RatingStars from '../RatingStars/RatingStars';

export default function TopicsCard({image,category,topic,name}) {

  return (
    <Link to="/details" className={style.webTopicCard} tabIndex="0">
        <div className={style.cardThumbnail}>
            <img className={style.mainPageCardThumbnailImg} src={`${process.env.PUBLIC_URL}/images/topics-thumbnails/${image}`} alt={`${category}`} />
        </div>
        <div className={style.cardCustomContainer}>
            <div className={style.cardDetails}>
                <h4>{category}</h4>
                <h5>{topic}</h5>
                <RatingStars />
                <p>Author: {name}</p>
            </div>
        </div>
    </Link>
  )
}

