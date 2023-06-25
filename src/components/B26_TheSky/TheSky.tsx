import * as React from 'react';
import style from './TheSky.module.scss';
import { lines } from './lines';

export const TheSky = () => {
  return (
    <div className={style.theSky}>
      <div className={`container ${style.inner}`}>
        <div className={style.topBlock}>
          <h3 className={style.title}>The Sky Is The Limit</h3>
          <p className={style.text}>
            At BrightFunded, the sky is literally the limit. That's why
            BrightFunded's scaling plan has{' '}
            <span>no upside balance limitations.</span> This means if you
            continuously generate profit on your funded account, we will{' '}
            <span>scale it up infinitely!</span> To make things even better,
            from the 3rd scale-up onwards, you will receive a{' '}
            <span>100% profit split</span>.
          </p>
        </div>

        <div className={style.linesMobile}>
          {lines.map(({ label, description, percent }, key) => (
            <div className={style.lineMobile} key={key}>
              <p className={style.label}>{label}</p>
              <div className={style.lineWrapper}>
                <div className={style.inner}>
                  <p className={style.percent}>{percent}</p>
                </div>
                {key == 2 && (
                  <p className={style.tip}>All profits are yours!</p>
                )}
              </div>
              <p className={style.description}>{description}</p>
            </div>
          ))}
        </div>

        <div className={style.linesDesktop}>
          {lines.map(({ label, description, percent }, key) => (
            <div className={style.lineDesktop} key={key}>
              <p className={style.label}>{label}</p>

              <div className={style.right}>
                <p className={style.percent}>{percent}</p>

                <p className={style.description}>{description}</p>
              </div>

              {key == 2 && <p className={style.tip}>All profits are yours!</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
