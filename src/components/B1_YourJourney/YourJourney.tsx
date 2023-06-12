import * as React from "react";
import style from "./YourJourney.module.scss";
import {cards} from "./cards";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {HashLink} from "react-router-hash-link";

export const YourJourney = observer(() => {
    const {setJoinModal} = useStore();

    const handlers = [
        () => setJoinModal(true),
        () => {
        },
        () => {
        },
    ]

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
                                            //@ts-ignore
                                                      onClick={handlers[key]}
                                        />
                                    )
                                }
                                {
                                    key === 1 && (
                                        <HashLink to="/roadmap#roadmap-top"
                                                  className={style.link}
                                                  smooth
                                        >
                                            <ButtonCustom label={buttonLabel}
                                                          primary={false}
                                                          className={style.btn}
                                            />
                                        </HashLink>
                                    )
                                }
                                {
                                    key === 2 && (
                                        <HashLink to="/about#about-top"
                                                  className={style.link}
                                                  smooth
                                        >
                                            <ButtonCustom label={buttonLabel}
                                                          primary={false}
                                                          className={style.btn}
                                            />
                                        </HashLink>
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
