import * as React from 'react';
import style from './Technology.module.scss';

export const Technology = () => {
  return (
    <div className={style.technology}>
      <div className={`container ${style.inner}`}>
        <div className={style.block}>
          <h3 className={style.title}>
            <span>BrightFunded</span> Technology
          </h3>
          <div className={style.textsWrapper}>
            <p className={style.description}>
              We have developed a unique approach to profit generation.
            </p>
            <div className={style.text}>
              We prioritize the copying of trades from successful traders while
              being highly selective in our choices. We understand that not all
              traders, even those funded by our firm, are equally successful. To
              ensure sustainable profitability, we employ a sophisticated rule
              engine that constantly analyzes the risk, reward, and executed
              trades on our funded traders’ accounts. This allows us to adjust
              our strategies, optimize risk management, and maintain a
              profitable trading ecosystem.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
