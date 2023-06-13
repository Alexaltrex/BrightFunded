import * as React from 'react';
import style from './HowToBecome.module.scss';
import {phases} from './phases';

export const HowToBecome = () => {
    return (
        <div className={style.howToBecome}
             id="challenge"
        >

            <div className={style.inner}>

                <div className={style.titleWrapper}>
                    <p className={style.pretext}>EVALUATION PROCESS</p>
                    <h2 className={style.title}>How To Become A Funded Star</h2>
                </div>

                <div className={style.cards}>
                    {
                        phases.map(({title, text, src, background, color, img}, key) => (
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

                                <img src={img} alt='' className={style.img}/>

                                {/*<div className={style.videoWrapper}>*/}
                                {/*    <video autoPlay={true}*/}
                                {/*           muted={true}*/}
                                {/*           playsInline={true}*/}
                                {/*           loop={true}*/}
                                {/*    >*/}
                                {/*        <source src={videoMp4}*/}
                                {/*            type='video/mp4; codecs="hvc1"'*/}
                                {/*        />*/}
                                {/*        /!*<source src={videoWebm} type='video/webm'/>*!/*/}
                                {/*    </video>*/}
                                {/*</div>*/}

                                <p className={style.title}>{title}</p>

                                <p className={style.text}>{text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};
