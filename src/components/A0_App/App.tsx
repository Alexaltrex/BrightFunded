import React from 'react';
import style from "./App.module.scss"
import {Header} from "../A1_Header/Header";
import {Route, Routes} from 'react-router-dom';
import {HomePage} from "../A10_HomePage/HomePage";
import {BurgerMenu} from "../A3_BurgerMenu/BurgerMenu";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import clsx from "clsx";
import {TestPage} from "../A11_TestPage/TestPage";
import {JoinModal} from "../A4_JoinModal/JoinModal";

import { StarsScroll } from '../common/Stars/StarsScroll';

export const App = observer(() => {
    const { burgerMenu } = useStore();

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
                    <Route path='/test' element={<TestPage/>}/>
                </Routes>
            </main>
        </div>
    );
});

