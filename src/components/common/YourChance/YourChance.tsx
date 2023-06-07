import * as React from "react";
import style from "./YourChance.module.scss";
import {ButtonCustom} from "../ButtonCustom/ButtonCustom";
import {svgIcons} from "../../../assets/svgIcons";
import {LinkCustom} from "../LinkCustom/LinkCustom";
import coin_green from "../../../assets/png/fly_coin_green.png";
import coin_yellow from "../../../assets/png/fly_coin_yellow.png";
import coin_blue from "../../../assets/png/fly_coin_blue.png";
import gradientLeft from "../../../assets/png/gradient_footer_left.png";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";

export const YourChance = observer(() => {
    const { setJoinModal } = useStore();
    const onJoin = () => setJoinModal(true);

    return (
        <div className={style.yourChance}>

            <img src={gradientLeft} alt="" className={style.gradientLeft}/>
            <img src={gradientLeft} alt="" className={style.gradientRight}/>

            <div className={style.titleWrapper}>
                <p className={style.pretext}>
                    JOIN THE TRADING UNIVERSE
                </p>
                <h2 className={style.title}>
                    This Is <span>Your Chance</span> To Trade Among The Stars
                </h2>

                <img src={coin_green} alt="" className={style.coin_green}/>
                <img src={coin_yellow} alt="" className={style.coin_yellow}/>
                <img src={coin_blue} alt="" className={style.coin_blue}/>
            </div>

            <div className={style.buttons}>
                <ButtonCustom label="Join Waitlist"
                              icon={svgIcons.arrow_right}
                              className={style.joinBtn}
                                //@ts-ignore
                              onClick={onJoin}
                />

                <LinkCustom label="Join Our Discord"
                            href="#"
                            className={style.tradeBtn}
                            icon={svgIcons.discord}
                />
            </div>

        </div>
    )
})
