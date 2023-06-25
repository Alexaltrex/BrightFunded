import { ButtonCustom } from '../common/ButtonCustom/ButtonCustom';
import { svgIcons } from '../../assets/svgIcons';
import * as React from 'react';
import gradientLeft from '../../assets/png/gradient_footer_left.png';
import gradientRight from '../../assets/png/gradient_footer_right.png';
import style from './BePart.module.scss';
import { HashLink } from 'react-router-hash-link';

export const BePart = () => {
  return (
    <div className={style.bePart}>
      <img src={gradientLeft} alt='' className={style.gradientLeft} />
      <img src={gradientRight} alt='' className={style.gradientRight} />

      <div className='container'>
        <div className={style.titleWrapper}>
          <p className={style.pretext}>Careers</p>
          <h2 className={style.title}>
            Be Part Of The Revolution And <span>Join Our Team!</span>
          </h2>
        </div>

        <HashLink to='/career#career-top' smooth={true} className={style.link}>
          <ButtonCustom
            label='BrightFunded Careers'
            icon={svgIcons.arrow_right}
            className={style.btn}
          />
        </HashLink>
      </div>
    </div>
  );
};
