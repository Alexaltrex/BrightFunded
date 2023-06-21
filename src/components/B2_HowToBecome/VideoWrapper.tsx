import style from './HowToBecome.module.scss'
import * as React from "react";

// @ts-ignore
import src_mp4_1 from "../../assets/mp4/step_1.mp4";
// @ts-ignore
import src_mp4_2 from "../../assets/mp4/step_2.mp4";
// @ts-ignore
import src_mp4_3 from "../../assets/mp4/step_3.mp4";

// @ts-ignore
import src_webm_1 from "../../assets/webm/step_1.webm";
// @ts-ignore
import src_webm_2 from "../../assets/webm/step_2.webm";
// @ts-ignore
import src_webm_3 from "../../assets/webm/step_3.webm";
import {FC} from "react";

export const phases = [
    {
        src_mp4: src_mp4_1,
        src_webm: src_webm_1,
    },
    {
        src_mp4: src_mp4_2,
        src_webm: src_webm_2,
    },
    {
        src_mp4: src_mp4_3,
        src_webm: src_webm_3,
    },
]


export const VideoWrapper: FC<{index: number}> = ({index}) => {
    return (
        <div className={style.videoWrapper}>
            <video autoPlay={true}
                   muted={true}
                   playsInline={true}
                   loop={true}
            >
                <source src={phases[index].src_mp4} type='video/mp4; codecs="hvc1"' />
                <source src={phases[index].src_webm} type='video/webm' />
            </video>
        </div>
    )
}
