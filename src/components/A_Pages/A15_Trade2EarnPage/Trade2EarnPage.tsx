import * as React from 'react';
import style from './Trade2EarnPage.module.scss';
import { Trade } from '../../B29_Trade/Trade';
import { Columns } from '../../B30_Columns/Columns';
import { Compounding } from '../../B31_Compounding/Compounding';
import { BrightFunded } from '../../B32_BrightFunded/BrightFunded';
import { YourChance } from '../../common/YourChance/YourChance';

export const Trade2EarnPage = () => {
  return (
    <div className={style.trade2EarnPage} id='trade-top'>
      <Trade />
      <Columns />

      <div className={style.cards}>
        <Compounding />
        <BrightFunded />
      </div>

      <YourChance />
    </div>
  );
};
export default Trade2EarnPage;
