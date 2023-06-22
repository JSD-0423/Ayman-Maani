import React from 'react'
import style from './Footer.module.css';
export default function Footer() {
  return (
<footer>
  <div className={style.footerMessage}>
    <h6>Developed with <span className={style.footerHeart}><ion-icon name="heart" /></span> <span className={style.copyRight}>©</span> 2023</h6>
  </div>
</footer>
  )
}
