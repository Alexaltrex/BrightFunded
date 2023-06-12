import * as React from "react";
import style from "./Roadmap.module.scss";
import {phases} from "./phases";
import clsx from "clsx";
import {svgIcons} from "../../assets/svgIcons";
import planet_left from "../../assets/png/roadmap_planet_left.png";
import planet_right from "../../assets/png/roadmap_planet_right.png";

export const Roadmap = () => {
    const activePhase = 2;

    return (
        <div className={style.roadmap}>

            <img src={planet_left} alt="" className={style.planet_left}/>
            <img src={planet_right} alt="" className={style.planet_right}/>

            <div className={style.inner}>

                <h2 className={style.title}>Roadmap</h2>

                <p className={style.description}>
                    As the world's first <span>Web 3.0</span> based prop trading firm, our mission is to revolutionize the trading space. This roadmap offers a glimpse into our plans and priorities, showcasing our commitment to innovation and transparency. Explore our upcoming milestones, features, and improvements below, and join us on this exciting journey as we shape the future of trading together.
                </p>

                <div className={style.cards}>
                    {
                        phases.map(({text, title}, key) => (
                            <div className={style.wrapper}
                                 key={key}
                            >
                                <div className={clsx({
                                    [style.iconWrapper]: true,
                                    [style.iconWrapper_ended]: key < activePhase,
                                    [style.iconWrapper_active]: key === activePhase,
                                })}>
                                    {(key < activePhase) && <>{svgIcons.phase_ended}</>}
                                    {(key === activePhase) && <>{svgIcons.phase_active}</>}
                                </div>


                                <div className={clsx({
                                    [style.card]: true,
                                    [style.card_ended]: key < activePhase,
                                    [style.card_active]: key === activePhase,
                                })}
                                >
                                    <div className={style.phase}>
                                        <p>{`PHASE ${key + 1}`}</p>
                                    </div>

                                    <p className={style.card_title}>{title}</p>

                                    <p className={style.card_text}>{text}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>

        </div>
    )
}
