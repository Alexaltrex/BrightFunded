import * as React from "react";
import style from "./WhyBrightFunded.module.scss";
import {cards} from "../B25_HowToScaleUp/cards";

const desc = "We have a straightforward belief: Gather a passionate, diverse team and create an environment that allows you to unleash your full potential."

export const WhyBrightFunded = () => {
    return (
        <div className={style.whyBrightFunded}>
            <div className={style.inner}>

                <div className={style.top}>
                    <p className={style.title}>
                        Why <span>BrightFunded</span>?
                    </p>
                    <div className={style.right}>
                        <p className={style.text}>
                            We're more interested in building a community of friends than a mere workforce.
                        </p>
                        <p className={style.desc}>
                            {desc}
                        </p>
                    </div>

                </div>

                <div className={style.cards}>
                    {
                        cards.map(({title, text, icon}, key) => (
                            <div key={key}
                                 className={style.card}
                            >
                                <div className={style.icon}>{icon}</div>
                                <p className={style.card_title}>{title}</p>
                                <p className={style.card_text}>{text}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
