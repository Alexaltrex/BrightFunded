import * as React from "react";
import {FC} from "react";
import {Swiper, SwiperClass, SwiperSlide} from "swiper/react";
import {EffectFade} from 'swiper';
import "swiper/css";
import 'swiper/css/effect-fade';
import style from "./PlanetSlider.module.scss";
import {planets} from "./planets";
import {svgIcons} from "../../../assets/svgIcons";
import {ButtonCustom} from "../../common/ButtonCustom/ButtonCustom";
import {balancesFull} from "../data";

interface IPlanetSlider {
    setSwiper: (swiper: SwiperClass) => void
    onJoin: () => void
    currency: number
}

export const PlanetSlider: FC<IPlanetSlider> = ({
                                                    setSwiper,
                                                    onJoin,
                                                    currency,
                                                }) => {

    return (
        <Swiper className={style.planetSlider}
                slidesPerView={1}
                allowTouchMove={false}
                onSwiper={(swiper) => setSwiper(swiper)}
            //allowTouchMove={false}
                modules={[EffectFade]}
                effect="fade"
                fadeEffect={{
                    crossFade: true
                }}
                speed={750}

        >
            {
                planets.map(({src, title, text, value}, key) => (
                    <SwiperSlide key={key}
                                 className={style.slide}

                    >
                        <div className={style.slideInner}>
                            <img src={src} alt="" className={style.img}/>
                            <div>
                                <div className={style.titleWrapper}>
                                    <p className={style.title}>{title}</p>
                                    <p className={style.value}>{balancesFull[currency][key]}</p>
                                </div>

                                <p className={style.text}>{text}</p>
                            </div>

                            <ButtonCustom label="Join Waitlist"
                                          icon={svgIcons.arrow_right}
                                          className={style.joinBtn}
                                //@ts-ignore
                                          onClick={onJoin}
                            />
                        </div>

                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
