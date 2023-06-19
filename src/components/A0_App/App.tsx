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
import {JoinModal} from "../A_Modals/A4_JoinModal/JoinModal";
import {WelcomeModal} from "../A_Modals/A5_WelcomeModal/WelcomeModal";
import {AffiliateModal} from "../A_Modals/A6_AffiliateModal/AffiliateModal";
import {SignUpSuccessModal} from "../A_Modals/A7_SignUpSuccessModal/SignUpSuccessModal";
import {ContactModal} from "../A_Modals/A8_ContactModal/ContactModal";

const HomePage = lazy(() => import('../A_Pages/A10_HomePage/HomePage'));
const RoadmapPage = lazy(() => import('../A_Pages/A11_RoadmapPage/RoadmapPage'));
const AffiliatePage = lazy(() => import('../A_Pages/A12_AffiliatePage/AffiliatePage'));
const ScalingPlanPage = lazy(() => import('../A_Pages/A13_ScalingPlanPage/ScalingPlanPage'));
const FaqPage = lazy(() => import('../A_Pages/A14_FaqPage/FaqPage'));
const Trade2EarnPage = lazy(() => import('../A_Pages/A15_Trade2EarnPage/Trade2EarnPage'));
const AboutPage = lazy(() => import('../A_Pages/A16_AboutPage/AboutPage'));
const BlogPage = lazy(() => import('../A_Pages/A17_BlogPage/BlogPage'));
const ArticlePage = lazy(() => import('../A_Pages/A18_ArticlePage/ArticlePage'));
const ContactPage = lazy(() => import('../A_Pages/A19_ContactPage/ContactPage'));
const CareerPage = lazy(() => import('../A_Pages/A20_CareerPage/CareerPage'));
const PositionPage = lazy(() => import('../A_Pages/A21_PositionPage/PositionPage'));
const PrivacyPolicyPage = lazy(() => import('../A_Pages/A22_PrivacyPolicyPage/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('../A_Pages/A23_TermsPage/TermsPage'));

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
            <ContactModal/>

            <main className={style.main}>
                <Suspense fallback={<p>loading</p>}>
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
                                {path: "/blog", element: <BlogPage/>},
                                {path: "/blog/:blogId", element: <ArticlePage/>},
                                {path: "/contact", element: <ContactPage/>},
                                {path: "/career", element: <CareerPage/>},
                                {path: "/position/:positionId", element: <PositionPage/>},
                                {path: "/policy", element: <PrivacyPolicyPage/>},
                                {path: "/terms", element: <TermsPage/>},

                            ].map(({path, element}, key) => (
                                <Route key={key} path={path} element={element}/>
                            ))
                        }
                    </Routes>
                </Suspense>
            </main>


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

