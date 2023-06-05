import * as React from "react";
import style from "./HowToBecome.module.scss";
import {phases} from "./phases";

export const HowToBecome = () => {


    return (
        <div className={style.howToBecome}
        >
            <div className={style.container}>

                <div className={style.inner}>

                    <div className={style.titleWrapper}>
                        <p className={style.pretext}>
                            trade2earn
                        </p>
                        <h2 className={style.title}>
                            How To Become A Funded Star
                        </h2>
                    </div>

                    <div className={style.cardsMobile}>
                        {
                            phases.map(({title, text, img, background, color}, key) => (
                                <div key={key}
                                     className={style.card}
                                     style={{background}}
                                >

                                    <div className={style.phase}
                                         style={{
                                             borderColor: color,
                                             color,
                                         }}
                                    >
                                        {`phase ${key + 1}`}
                                    </div>

                                    <img src={img} alt="" className={style.planet}/>

                                    <p className={style.title}>
                                        {title}
                                    </p>

                                    <p className={style.text}>{text}</p>

                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}
