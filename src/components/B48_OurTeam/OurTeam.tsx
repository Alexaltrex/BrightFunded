import * as React from "react";
import style from "./OurTeam.module.scss";
import gradientLeft from "../../assets/png/gradient_footer_left.png";
import gradientRight from "../../assets/png/gradient_footer_right.png";
import {svgIcons} from "../../assets/svgIcons";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";

export const OurTeam = () => {
    return (
        <div className={style.ourTeam}>

            <img src={gradientLeft} alt="" className={style.gradientLeft}/>
            <img src={gradientRight} alt="" className={style.gradientRight}/>

            <div className={style.titleWrapper}>
                <p className={style.pretext}>
                    Discord Support
                </p>
                <h2 className={style.title}>
                    <p>Our Team Is Also Ready To Assist</p>
                    <p>On <span>Discord</span></p>
                </h2>
            </div>

            <ButtonCustom label="Join Our Discord"
                          href="https://discord.gg/9Ypd4ETZ"
                          className={style.btn}
                          icon={svgIcons.discord}
            />

        </div>
    )
}
