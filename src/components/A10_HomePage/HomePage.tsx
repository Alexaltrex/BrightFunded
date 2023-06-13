import * as React from 'react';
import {Raise} from '../B0_Raise/Raise';
import style from './HomePage.module.scss';
import {YourJourney} from '../B1_YourJourney/YourJourney';
import {HowToBecome} from '../B2_HowToBecome/HowToBecome';
import {ChooseYourDestination} from '../B3_ChooseYourDestination/ChooseYourDestination';
import {GetInstant} from '../B4_GetInstant/GetInstant';
import {LaunchInto} from '../B5_LaunchInto/LaunchInto';
import {Experience} from '../B6_Experience/Experience';
import {CurrencyTable} from '../B7_CurrencyTable/CurrencyTable';
import {YourChance} from '../common/YourChance/YourChance';

export const HomePage = () => {

    return (
        <div className={style.homePage}
             id="home-top"
        >
            <Raise/>
            <YourJourney/>
            <HowToBecome/>
            <ChooseYourDestination/>
            <GetInstant/>
            <div className={style.whiteCard}>
                <LaunchInto/>
                <Experience/>
                <CurrencyTable/>
            </div>
            <YourChance/>
        </div>
    );
};
