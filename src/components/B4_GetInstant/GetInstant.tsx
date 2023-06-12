import * as React from "react";
import style from "./GetInstant.module.scss"
import {items} from "./items";
import planet from "../../assets/png/neptune.png";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../assets/svgIcons";
import {useStore} from "../../store/useStore";
import { observer } from "mobx-react-lite";
import {HashLink} from "react-router-hash-link";
import {ButtonLink} from "../common/ButtonLink/ButtonLink";

export const GetInstant = observer(() => {
    const { setJoinModal } = useStore();
    const onJoin = () => setJoinModal(true);

    return (
        <div className={style.getInstant}>
            <div className={style.inner}>

                <div className={style.titleWrapper}>
                    <p className={style.pretext}>
                        trade2earn
                    </p>
                    <h2 className={style.title}>
                        Get Instant Rewarded
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
                                      //@ts-ignore
                                      onClick={onJoin}
                        />

                        <HashLink to="/trade#trade-top"
                                  style={{textDecoration: "none"}}
                                  smooth
                        >
                            <ButtonLink label="Learn more"
                                        className={style.learnBtn}
                                        icon={svgIcons.arrow_right}
                            />
                        </HashLink>

                    </div>

                </div>

            </div>
        </div>
    )
})
