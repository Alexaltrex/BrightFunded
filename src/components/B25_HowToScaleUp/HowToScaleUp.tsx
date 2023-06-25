import * as React from 'react';
import style from './HowToScaleUp.module.scss';
import { cards } from './cards';

export const HowToScaleUp = () => {
  return (
    <div className={style.howToScaleUp}>
      <div className={`container ${style.inner}`}>
        <div className={style.topBlock}>
          <h3 className={style.title}>How To Scale Up</h3>
          <p className={style.text}>
            <span>Your funded account</span> at BrightFunded is being reviewed
            for the scaling plan from the moment the first trade is opened. If
            you meet the conditions of the scaling plan, your funded account
            will be increased by <span>30% of the original account size.</span>{' '}
            To qualify, you need to meet the following requirements:
          </p>
        </div>

        <div className={style.cards}>
          {cards.map(({ title, text, icon }, key) => (
            <div key={key} className={style.card}>
              <div className={style.iconWrapper}>{icon}</div>
              <p className={style.card_title}>{title}</p>
              <p className={style.card_text}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
