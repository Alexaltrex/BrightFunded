import React, {lazy, Suspense, useEffect, useState} from 'react';
import style from "./App.module.scss"
import {Header} from "../A1_Header/Header";
import {Route, Routes} from 'react-router-dom';
import {BurgerMenu} from "../A3_BurgerMenu/BurgerMenu";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import clsx from "clsx";
import {StarsScroll} from '../common/Stars/StarsScroll';
import {Footer} from "../A2_Footer/Footer";
import {JoinModal} from "../A4_JoinModal/JoinModal";
import {WelcomeModal} from "../A5_WelcomeModal/WelcomeModal";
import {AffiliateModal} from "../A6_AffiliateModal/AffiliateModal";
import {SignUpSuccessModal} from "../A7_SignUpSuccessModal/SignUpSuccessModal";

const HomePage = lazy(() => import('../A10_HomePage/HomePage'));
const RoadmapPage = lazy(() => import('../A11_RoadmapPage/RoadmapPage'));
const AffiliatePage = lazy(() => import('../A12_AffiliatePage/AffiliatePage'));
const ScalingPlanPage = lazy(() => import('../A13_ScalingPlanPage/ScalingPlanPage'));
const FaqPage = lazy(() => import('../A14_FaqPage/FaqPage'));
const Trade2EarnPage = lazy(() => import('../A15_Trade2EarnPage/Trade2EarnPage'));
const AboutPage = lazy(() => import('../A16_AboutPage/AboutPage'));

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
            <div className={style.wrapper}>
                <StarsScroll/>
            </div>
            <Header/>
            <BurgerMenu/>

            <JoinModal/>
            <WelcomeModal/>
            <AffiliateModal/>
            <SignUpSuccessModal/>

            <Suspense fallback={<p>loading</p>}>
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
                                {path: "/about", element: <AboutPage/>},
                            ].map(({path, element}, key) => (
                                <Route key={key} path={path} element={element}/>
                            ))
                        }
                    </Routes>
                </main>
            </Suspense>

            <Footer/>

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
        </div>
    );
});

