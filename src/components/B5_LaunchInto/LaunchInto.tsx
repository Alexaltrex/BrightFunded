import * as React from 'react';
import style from './LaunchInto.module.scss';
import { cards } from './cards';
import { Card } from './Card/Card';

export const LaunchInto = () => {
  return (
    <div className={style.launchInto}>
      <div className={`container ${style.inner}`}>
        <div className={style.titleWrapper}>
          <p className={style.pretext}>NEW ERA</p>
          <h2 className={style.title}>Launch Into The New Era Of Trading</h2>
        </div>

        <div className={style.cards}>
          <div className={style.cardsMobile}>
            {cards.map((card, key) => (
              <Card key={key} {...card} />
            ))}
          </div>

          <div className={style.cardsDesktop}>
            <div className={style.top}>
              {[cards[0], cards[1]].map((card, key) => (
                <Card key={key} {...card} />
              ))}
            </div>
            <div className={style.bottom}>
              {[cards[2], cards[3], cards[4]].map((card, key) => (
                <Card key={key} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
