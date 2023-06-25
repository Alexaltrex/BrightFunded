import * as React from 'react';
import style from './BeBright.module.scss';

export const BeBright = () => {
  return (
    <div className={style.beBright}>
      <div className={`container ${style.inner}`}>
        <div className={style.titleWrapper}>
          <p className={style.pretext}>Careers</p>
          <h2 className={style.title}>
            Be Bright, Join <span>BrightFunded</span>
          </h2>
        </div>

        <p className={style.subtitle}>
          Join our mission at BrightFunded to pioneer the way traders engage
          with financial markets.
        </p>
      </div>
    </div>
  );
};
