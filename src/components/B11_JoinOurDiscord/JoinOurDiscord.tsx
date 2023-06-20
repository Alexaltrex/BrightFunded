import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../assets/svgIcons";
import * as React from "react";
import style from "./JoinOurDiscord.module.scss"
import gradientRight from "../../assets/png/gradient_footer_right.png";
import {AnchorCustom} from "../common/AnchorCustom/AnchorCustom";
import {socialLinks} from "../A0_App/socialLinks";

export const JoinOurDiscord = () => {

    return (
        <div className={style.joinOurDiscord}>

            <img src={gradientRight} alt="" className={style.gradientRight}/>

            <div className={style.titleWrapper}>
                <p className={style.pretext}>
                    INFLUENCE THE FUTURE
                </p>
                <h2 className={style.title}>
                    <p>Join Our Discord</p>
                    <p>And <span>Influence</span> The Roadmap</p>
                </h2>
            </div>

            <div className={style.buttons}>
                <AnchorCustom label="Join Our Discord"
                              icon={svgIcons.discord}
                              className={style.joinBtn}
                              href={socialLinks[0].href}
                />
            </div>

        </div>
    )
}
