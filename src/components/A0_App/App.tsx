import React, {useEffect, useState} from 'react';
import style from "./App.module.scss"
import {Header} from "../A1_Header/Header";
import {Route, Routes} from 'react-router-dom';
import {HomePage} from "../A10_HomePage/HomePage";
import {BurgerMenu} from "../A3_BurgerMenu/BurgerMenu";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import clsx from "clsx";
import {JoinModal} from "../A4_JoinModal/JoinModal";
import {StarsScroll} from '../common/Stars/StarsScroll';
import {RoadmapPage} from "../A11_RoadmapPage/RoadmapPage";
import {Footer} from "../A2_Footer/Footer";
import {AffiliatePage} from "../A12_AffiliatePage/AffiliatePage";
import {ScalingPlanPage} from "../A13_ScalingPlanPage/ScalingPlanPage";
import {FaqPage} from "../A14_FaqPage/FaqPage";
import {Trade2EarnPage} from "../A15_Trade2EarnPage/Trade2EarnPage";
import {WelcomeModal} from "../A5_WelcomeModal/WelcomeModal";
import {AffiliateModal} from "../A6_AffiliateModal/AffiliateModal";
import {SignUpSuccessModal} from "../A7_SignUpSuccessModal/SignUpSuccessModal";

export const App = observer(() => {
    const {burgerMenu, setScrollDown, pageYOffset, setPageYOffset} = useStore();

    useEffect(() => {
        const onScroll = (e: Event) => {
            if (window.pageYOffset > pageYOffset) {
                setScrollDown(true);
            } else {
                setScrollDown(false);
            }
            setPageYOffset(window.pageYOffset);
        };
        window.addEventListener('scroll', onScroll, {passive: true});
    }, [pageYOffset]);

    return (
        <div className={clsx({
            [style.app]: true,
            [style.app_burger]: burgerMenu,
        })}
        >

            {/*<div className='tradingview-widget-container'>*/}
            {/*    <div className='tradingview-widget-container__widget'/>*/}
            {/*    <div className='tradingview-widget-copyright'>*/}
            {/*        <a href='https://www.tradingview.com/' rel='noopener nofollow' target='_blank'>*/}
            {/*        <span className='blue-text'>*/}
            {/*            Track all markets on TradingView*/}
            {/*        </span>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className={style.wrapper}>
                <StarsScroll/>
            </div>
            <Header/>
            <BurgerMenu/>

            <JoinModal/>
            <WelcomeModal/>
            <AffiliateModal/>
            <SignUpSuccessModal/>

            <main className={style.main}>
                <Routes>
                    {
                        [
                            {path: "/", element: <HomePage/>},
                            {path: "/roadmap", element: <RoadmapPage/>},
                            {path: "/affiliate", element: <AffiliatePage/>},
                            {path: "/scaling-plan", element: <ScalingPlanPage/>},
                            {path: "/faq", element: <FaqPage/>},
                            {path: "/trade", element: <Trade2EarnPage/>},
                        ].map(({path, element}, key) => (
                            <Route key={key} path={path} element={element}/>
                        ))
                    }
                </Routes>
            </main>
            <Footer/>
        </div>
    );
});

