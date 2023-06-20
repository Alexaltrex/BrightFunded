import * as React from "react";
import style from "./YourJourney.module.scss";
import {cards} from "./cards";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {HashLinkCustom} from "../common/HashLinkCustom/HashLinkCustom";

export const YourJourney = observer(() => {
    const {setJoinModal} = useStore();

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
                                {
                                    key === 0 && (
                                        <ButtonCustom label={buttonLabel}
                                                      primary={false}
                                                      className={style.btn}
                                                      onClick={() => setJoinModal(true)}
                                        />
                                    )
                                }
                                {
                                    key === 1 && (
                                        <HashLinkCustom to="/roadmap#roadmap-top"
                                                        className={style.link}
                                                        label={buttonLabel}
                                                        primary={false}
                                        />
                                    )
                                }
                                {
                                    key === 2 && (
                                        <HashLinkCustom to="/about#about-top"
                                                        className={style.link}
                                                        label={buttonLabel}
                                                        primary={false}
                                        />
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
})
