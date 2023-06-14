import React from 'react'
import style from './CSS/Details.module.css';
import { Link } from 'react-router-dom';

export default function Details() {
  return (
    <section id="details-page" className={style.detailsPage}>
  <div id="course-details-box" className={style.courseDetailsBox}>
    <div id="course-details-box-container" className={style.detailsPageContainer}>
      <div className={style.courseDetails}>
        <h4>Web Development Languages</h4>
        <h5>HTML</h5>
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
              <div id="details-page-star-color-fill" className={style.starColorFill} />
            </div>
          </div>
        </div>
        <p id="course-details-para">HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images, and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.</p>
      </div>
      <div id="details-page-card-contianer" className={style.detailsPageCardContianer}>
        <div id="details-page-card" className={style.detailsPageCard}>
          <div className={style.detailsPageCardThumbnail}>
            <img src="./images/topics-thumbnails/javascript.jpg" alt="html course" />
          </div>
          <div className={style.detailsPageCardCustomContainer}>
            <h4><span>HTML</span> by <Link to="PageNotFound">Sarah Smith</Link></h4>
            <div id="add-to-favourites-box" className={style.addToFavouritesBox}>
              <p>Interested about this topic?</p>
              <button type="button">Add to Favourites <ion-icon id="details-page-heart" name="heart-outline" /></button>
              <h6>Unlimited Credits</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="details-page-sub-topics-container" className={`${style.detailsPageContainer} ${style.detailsPageSubTopicsContainer}`}>
    <div id="course-sub-topics" className={style.courseSubTopics}>
      <ul className={style.courseSubTopicsList} title="course-sub-topics">
        <li className={style.courseSubTopic}><h2>HTML Sub Topics</h2></li>
        <li className={style.courseSubTopic}><ion-icon name="checkmark-circle-outline" /> <h3>HTML syntax and structure</h3></li>
        <li className={style.courseSubTopic}><ion-icon name="checkmark-circle-outline" /> <h3>HTML elements and attributes</h3></li>
        <li className={style.courseSubTopic}><ion-icon name="checkmark-circle-outline" /> <h3>HTML forms and input elements</h3></li>
        <li className={style.courseSubTopic}><ion-icon name="checkmark-circle-outline" /> <h3>HTML tables and lists</h3></li>
        <li className={style.courseSubTopic}><ion-icon name="checkmark-circle-outline" /> <h3>HTML multimedia elements (audio, video, images)</h3></li>
        <li className={style.courseSubTopic}><ion-icon name="checkmark-circle-outline" /> <h3>HTML accessibility and semantic markup</h3></li>
      </ul>
    </div>
  </div>
</section>

  )
}
