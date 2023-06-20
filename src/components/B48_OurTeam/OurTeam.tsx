import * as React from "react";
import style from "./OurTeam.module.scss";
import gradientLeft from "../../assets/png/gradient_footer_left.png";
import gradientRight from "../../assets/png/gradient_footer_right.png";
import {svgIcons} from "../../assets/svgIcons";
import {socialLinks} from "../A0_App/socialLinks";
import {AnchorCustom} from "../common/AnchorCustom/AnchorCustom";

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

            <AnchorCustom label="Join Our Discord"
                          href={socialLinks[0].href}
                          className={style.btn}
                          icon={svgIcons.discord}
            />

        </div>
    )
}
