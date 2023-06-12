import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../assets/svgIcons";
import * as React from "react";
import style from "./JoinOurDiscord.module.scss"
// import coin_green from "../../assets/png/fly_coin_green.png";
// import coin_yellow from "../../assets/png/fly_coin_yellow.png";
// import coin_blue from "../../assets/png/fly_coin_blue.png";
import gradientRight from "../../assets/png/gradient_footer_right.png";

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

                {/*<img src={coin_green} alt="" className={style.coin_green}/>*/}
                {/*<img src={coin_yellow} alt="" className={style.coin_yellow}/>*/}
                {/*<img src={coin_blue} alt="" className={style.coin_blue}/>*/}
            </div>

            <div className={style.buttons}>
                <ButtonCustom label="Join Our Discord"
                              icon={svgIcons.discord}
                              className={style.joinBtn}
                              href="https://discord.gg/9Ypd4ETZ"
                />

                {/*<LinkCustom label="Join Our Discord"*/}
                {/*            href="#"*/}
                {/*            className={style.tradeBtn}*/}
                {/*            icon={svgIcons.discord}*/}
                {/*/>*/}
            </div>

        </div>
    )
}
