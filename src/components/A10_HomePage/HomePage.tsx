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
import {Footer} from '../A2_Footer/Footer';
import {useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {phases} from '../B2_HowToBecome/phases';

gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
    const componentRef = useRef<HTMLDivElement>(null!);
    const sliderRef = useRef<HTMLDivElement>(null!);
    const pinContainer = useRef<HTMLDivElement>(null!);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels: any = gsap.utils.toArray('.panel');

            gsap.to(panels, {
                x: -(panels[0].offsetWidth * (panels.length - 1) - 420),
                ease: 'none',
                scrollTrigger: {
                    trigger: sliderRef.current,
                    pin: pinContainer.current,
                    scrub: 1,
                    start: () => '+=' + 90,
                    end: () => '+=' + sliderRef.current.offsetWidth,
                },
            });
        }, componentRef);
        return () => ctx.revert();
    });

    return (
        <div className={style.homePage} ref={componentRef}>
            <Raise/>
            <YourJourney/>
            <HowToBecome/>

            <div ref={pinContainer}>
                <div className={style.inner} ref={sliderRef}>
                    <div className={style.titleWrapper}>
                        <p className={style.pretext}>EVALUATION PROCESS</p>
                        <h2 className={style.title}>How To Become A Funded Star</h2>
                    </div>
                    <div className={style.cardsDesktop}>
                        {phases.map(({title, text, img, background, color}, key) => (
                            <div key={key} className={`${style.panel} panel`}>
                                <div className={style.cardWrapper}>
                                    <div className={style.card} style={{background}}>
                                        <div
                                            className={style.phase}
                                            style={{
                                                borderColor: color,
                                                color,
                                            }}
                                        >
                                            {`phase ${key + 1}`}
                                        </div>

                                        <img src={img} alt='' className={style.planet}/>

                                        <div>
                                            <p className={style.title}>{title}</p>

                                            <p className={style.text}>{text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <ChooseYourDestination/>
            </div>
            <GetInstant/>
            <div className={style.whiteCard}>
                <LaunchInto/>
                <Experience/>
                <CurrencyTable/>
            </div>
            <YourChance/>
            <Footer/>
        </div>
    );
};
