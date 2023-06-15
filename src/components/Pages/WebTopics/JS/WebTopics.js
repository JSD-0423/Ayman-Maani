import { Link } from 'react-router-dom';
import style from '../CSS/WebTopics.module.css';

export const displayFethcedData = (webTopicsData)=>{
    return webTopicsData.map((webTopic)=>{
        return (
          <Link to="Details" className={style.webTopicCard} tabIndex="0">
            <div className={style.cardThumbnail}>
              <img className={style.mainPageCardThumbnailImg} src={`./images/topics-thumbnails/${webTopic.image}`} alt={`${webTopic.category}`} />
            </div>
            <div className={style.cardCustomContainer}>
              <div className={style.cardDetails}>
                <h4>{webTopic.category}</h4>
                <h5>{webTopic.topic}</h5>
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
                <p>Author: {webTopic.name}</p>
              </div>
            </div>
          </Link>
        )
    })
}


