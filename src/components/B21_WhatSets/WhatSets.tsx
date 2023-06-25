import * as React from 'react';
import style from './WhatSets.module.scss';
import { cards } from './cards';

export const WhatSets = () => {
  return (
    <div className={style.whatSets}>
      <div className={`container ${style.inner}`}>
        <div className={style.titleWrapper}>
          <p className={style.pretext}>Game-Changing Benefits</p>
          <h2 className={style.title}>
            <p>What Sets Our</p>
            <p>Affiliate Program Apart?</p>
          </h2>
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
