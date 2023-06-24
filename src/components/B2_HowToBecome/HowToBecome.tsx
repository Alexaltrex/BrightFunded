import * as React from 'react';
import style from './HowToBecome.module.scss';
import { phases } from './phases';
import { VideoWrapper } from './VideoWrapper';
import { useMediaQuery } from '@mui/material';

export const HowToBecome = () => {
  const matches = useMediaQuery('(min-width:800px)');

  return (
    <div className={style.howToBecome} id='challenge'>
      <div className={`container ${style.inner}`}>
        <div className={style.titleWrapper}>
          <p className={style.pretext}>EVALUATION PROCESS</p>
          <h2 className={style.title}>How To Become A Funded Star</h2>
        </div>

        <div className={style.cards}>
          {phases.map(({ title, text, background, color, img_m }, key) => (
            <div key={key} className={style.card} style={{ background }}>
              <div
                className={style.phase}
                style={{
                  borderColor: color,
                  color,
                }}
              >
                {`phase ${key + 1}`}
              </div>

              <img src={img_m} alt='' className={style.imgMobile} />

              {matches && <VideoWrapper index={key} />}

              <p className={style.title}>{title}</p>

              <p className={style.text}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
