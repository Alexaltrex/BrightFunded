import * as React from "react";
import style from "./ReachForTheStars.module.scss";
// import coin_green from "../../assets/png/fly_coin_green.png";
// import coin_yellow from "../../assets/png/fly_coin_yellow.png";
// import coin_blue from "../../assets/png/fly_coin_blue.png";
import gradientRight from "../../assets/png/gradient_footer_right2.png";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../assets/svgIcons";
import {LinkCustom} from "../common/LinkCustom/LinkCustom";

export const ReachForTheStars = () => {

    return (
        <div className={style.reachForTheStars}>

            <img src={gradientRight} alt="" className={style.gradientRight}/>

            <div className={style.titleWrapper}>
                <p className={style.pretext}>
                    JOIN THE TRADING UNIVERSE
                </p>
                <h2 className={style.title}>

                    Reach For <span>The Stars</span> As A BrightFunded Partner
                </h2>

                {/*<img src={coin_green} alt="" className={style.coin_green}/>*/}
                {/*<img src={coin_yellow} alt="" className={style.coin_yellow}/>*/}
                {/*<img src={coin_blue} alt="" className={style.coin_blue}/>*/}
            </div>

            <div className={style.buttons}>
                <ButtonCustom label="Sign Up"
                              icon={svgIcons.arrow_right}
                              className={style.btn}
                    // @ts-ignore
                    //onClick={onJoin}
                />

                <LinkCustom label="Join Our Discord"
                            href="https://discord.gg/9Ypd4ETZ"
                            className={style.tradeBtn}
                            icon={svgIcons.discord}
                />
            </div>

        </div>
    )
}
