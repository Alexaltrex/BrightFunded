import * as React from "react";
import style from "./GetInstant.module.scss"
import {items} from "./items";
import planet from "../../assets/png/neptune.png";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../assets/svgIcons";
import {LinkCustom} from "../common/LinkCustom/LinkCustom";

export const GetInstant = () => {
    return (
        <div className={style.getInstant}>
            <div className={style.inner}>

                <div className={style.titleWrapper}>
                    <p className={style.pretext}>
                        EVALUATION PROCESS
                    </p>
                    <h2 className={style.title}>
                        How To Become A Funded Star
                    </h2>
                </div>

                <div className={style.rest}>

                    <div className={style.items}>

                        <img src={planet}
                             alt=""
                             className={style.planet}
                        />

                        {
                            items.map(({title, text, icon}, key) => (
                                <div key={key}
                                     className={style.item}
                                >
                                    <p className={style.title}>{title}</p>
                                    <p className={style.text}>{text}</p>
                                    <div className={style.iconWrapper}>{icon}</div>
                                </div>
                            ))
                        }
                    </div>

                    <div className={style.buttons}>
                        <ButtonCustom label="Join Waitlist"
                                      icon={svgIcons.arrow_right}
                                      className={style.joinBtn}
                        />

                        <LinkCustom label="Learn more"
                                    href="#"
                                    className={style.learnBtn}
                                    icon={svgIcons.arrow_right}
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}
