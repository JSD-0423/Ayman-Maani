import React from 'react';
import style from './CSS/Banner.module.css';

export default function Banner() {
  return (
    <section className={style.bannerSection}>
      <div className={style.banner}>
        <div className={style.bannerPrimary} />
        <div className={style.bannerSecondary} />
        <div className={`container ${style.bannerCustomContainer}`}>
          <div className={style.bannerMessage}>
            <h2 className={style.bannerMessageH2}>Welcome to our website!</h2>
            <p className={style.bannerMessageP}>We have a new design that's fresh, modern, and easy to use.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
