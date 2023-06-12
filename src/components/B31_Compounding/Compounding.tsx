import * as React from "react";
import style from "./Compounding.module.scss";
import {cards} from "./cards";

export const Compounding = () => {
    return (
        <div className={style.compounding}>
            <div className={style.inner}>

                <div className={style.top}>
                    <p className={style.title}>
                        Compounding Benefits
                    </p>
                    <p className={style.text}>
                        Why should you start on your <span>Trade2Earn</span> journey sooner rather than later?
                    </p>
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
