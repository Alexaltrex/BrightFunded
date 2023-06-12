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
            <main className={style.main}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/roadmap' element={<RoadmapPage/>}/>
                    <Route path='/affiliate' element={<AffiliatePage/>}/>
                    <Route path='/scaling-plan' element={<ScalingPlanPage/>}/>
                    <Route path='/faq' element={<FaqPage/>}/>
                    <Route path='/trade' element={<Trade2EarnPage/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
});

