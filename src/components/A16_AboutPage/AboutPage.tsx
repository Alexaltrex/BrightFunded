import * as React from "react";
import style from "./AboutPage.module.scss";
import {About} from "../B40_About/About";
import {Texts} from "../B41_Texts/Texts";
import {Board} from "../B42_Board/Board";
import {Technology} from "../B43_Technology/Technology";
import {BePart} from "../B44_BePart/BePart";
const AboutPage = () => {
    return (
        <div className={style.aboutPage}>
            <About/>
            <div className={style.cards}>
                <Texts/>
                <Board/>
                <Technology/>
            </div>
            <BePart/>

        </div>
    )
}

export default AboutPage

