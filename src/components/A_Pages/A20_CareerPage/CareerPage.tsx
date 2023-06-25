import * as React from 'react';
import style from './CareerPage.module.scss';
import { BeBright } from '../../B49_BeBright/BeBright';
import { WhyBrightFunded } from '../../B50_WhyBrightFunded/WhyBrightFunded';
import { OpenPositions } from '../../B51_OpenPositions/OpenPositions';
import { BringYourTalent } from '../../B52_BringYourTalent/BringYourTalent';

const CareerPage = () => {
  return (
    <div className={style.careerPage} id='career-top'>
      <BeBright />
      <div className={style.card}>
        <WhyBrightFunded />
        <OpenPositions />
      </div>
      <BringYourTalent />
    </div>
  );
};

export default CareerPage;
