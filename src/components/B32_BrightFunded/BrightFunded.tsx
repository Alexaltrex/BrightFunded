import * as React from 'react';
import style from './BrightFunded.module.scss';
import { cards } from './cards';

export const BrightFunded = () => {
  return (
    <div className={style.brightFunded}>
      <div className={`container ${style.inner}`}>
        <div className={style.top}>
          <h3 className={style.title}>
            <span>BrightFunded</span> Token
          </h3>
          <p className={style.text}>
            As the first <span>Trade2Earn</span> Prop Firm, we're here from day
            one to engage traders like you and empower you to elevate your
            trading activities to unprecedented heights.
          </p>
        </div>

        <div className={style.cards}>
          {cards.map(({ title, text }, key) => (
            <div key={key} className={style.card}>
              <p className={style.card_title}>{title}</p>
              <p className={style.card_text}>{text}</p>
            </div>
          ))}
        </div>

        <div className={style.bottom}>
          Together, we’re creating a transparent environment where every step is
          shared, and every opportunity is seized. Get ready to step into a new
          era of trading – the <span>BrightFunded</span> way!
        </div>
      </div>
    </div>
  );
};
