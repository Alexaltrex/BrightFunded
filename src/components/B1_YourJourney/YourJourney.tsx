import * as React from "react";
import style from "./YourJourney.module.scss";
import {cards} from "./cards";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";

export const YourJourney = () => {
    return (
        <div className={style.yourJourney}>
            <div className={style.inner}>

                <div className={style.titleWrapper}>
                    <p className={style.pretext}>
                        YOUR PARTNER IN TRADING
                    </p>
                    <h2 className={style.title}>
                        Your Journey To Trading Excellence Starts Here
                    </h2>
                </div>

                <div className={style.cards}>
                    {
                        cards.map(({tittle, text, buttonLabel, icon}, key) => (
                            <div key={key}
                                 className={style.card}
                            >
                                <div className={style.iconWrapper}>{icon}</div>

                                <p className={style.title}>{tittle}</p>
                                <p className={style.text}>{text}</p>

                                <ButtonCustom label={buttonLabel}
                                              primary={false}
                                              className={style.btn}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
