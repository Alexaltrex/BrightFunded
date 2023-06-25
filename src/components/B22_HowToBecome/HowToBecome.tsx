import * as React from 'react';
import style from './HowToBecome.module.scss';
import { cards } from './cards';

export const HowToBecome = () => {
  return (
    <div className={style.howToBecome}>
      <div className={`container ${style.inner}`}>
        <div className={style.titleWrapper}>
          <p className={style.pretext}>QUICK AND EASY PROCESS</p>
          <h2 className={style.title}>How To Become Our Partner</h2>
        </div>

        <div className={style.cards}>
          {cards.map(({ title, text, src }, key) => (
            <div key={key} className={style.card}>
              <p className={style.card_number}>{`0${key + 1}`}</p>
              <img src={src} alt='' className={style.img} />
              <p className={style.card_title}>{title}</p>
              <p className={style.card_text}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
