import * as React from "react";
import style from "./YourChance.module.scss";
import {ButtonCustom} from "../ButtonCustom/ButtonCustom";
import {svgIcons} from "../../../assets/svgIcons";


import gradientLeft from "../../../assets/png/gradient_footer_left.png";
import gradientRight from "../../../assets/png/gradient_footer_right.png";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import {AnchorUnderline} from "../AnchorUnderline/AnchorUnderline";
import {socialLinks} from "../../A0_App/socialLinks";

export const YourChance = observer(() => {
    const { setJoinModal } = useStore();
    const onJoin = () => setJoinModal(true);

    return (
        <div className={style.yourChance}>

            <img src={gradientLeft} alt="" className={style.gradientLeft}/>
            <img src={gradientRight} alt="" className={style.gradientRight}/>

            <div className={style.titleWrapper}>
                <p className={style.pretext}>
                    JOIN THE TRADING UNIVERSE
                </p>
                <h2 className={style.title}>
                    This Is <span>Your Chance</span> To Trade Among The Stars
                </h2>
            </div>

            <div className={style.buttons}>
                <ButtonCustom label="Join Waitlist"
                              icon={svgIcons.arrow_right}
                              className={style.joinBtn}
                                //@ts-ignore
                              onClick={onJoin}
                />

                <AnchorUnderline label="Join Our Discord"
                                 href={socialLinks[0].href}
                                 className={style.tradeBtn}
                                 icon={svgIcons.discord}
                />
            </div>

        </div>
    )
})
