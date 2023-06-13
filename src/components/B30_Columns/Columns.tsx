import * as React from "react";
import style from "./Columns.module.scss";
import columns_mobile from "../../assets/png/columns_mobile.png";
import columns_desktop from "../../assets/png/columns_desktop.png";
import {cards} from "./cards";

// @ts-ignore
import videoWebm from "../../assets/webm/graph.webm";
// @ts-ignore
import videoMp4 from "../../assets/mp4/graph.mp4";

export const Columns = () => {
    return (
        <div className={style.columns}>
            <div className={style.inner}>
                {/*<img src={columns_mobile} alt="" className={style.columns_mobile}/>*/}
                {/*<img src={columns_desktop} alt="" className={style.columns_desktop}/>*/}

                <div className={style.videoWrapper}>
                    <video autoPlay={true}
                           muted={true}
                           playsInline={true}
                           loop={true}
                    >
                        <source src={videoMp4} type='video/mp4; codecs="hvc1"'/>
                        <source src={videoWebm} type='video/webm'/>
                    </video>
                </div>

                <div className={style.cards}>
                    {
                        cards.map(({title, text, icon}, key) => (
                            <div key={key}
                                 className={style.card}
                            >
                                <div className={style.iconWrapper}>{icon}</div>
                                <p className={style.title}>{title}</p>
                                <p className={style.text}>{text}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
