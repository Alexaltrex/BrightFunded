import * as React from "react";
import {FC} from "react";
import {Swiper, SwiperClass, SwiperSlide} from "swiper/react";
import { EffectFade } from 'swiper';
import "swiper/css";
import 'swiper/css/effect-fade';
import style from "./PlanetSlider.module.scss";
import {planets} from "./planets";
import {svgIcons} from "../../../assets/svgIcons";
import {ButtonCustom} from "../../common/ButtonCustom/ButtonCustom";

interface IPlanetSlider {
    setSwiper: (swiper: SwiperClass) => void
}

export const PlanetSlider: FC<IPlanetSlider> = ({
                                                    setSwiper
}) => {

    return (
        <Swiper className={style.planetSlider}
                slidesPerView={1}
                onSwiper={(swiper) => setSwiper(swiper)}
                //allowTouchMove={false}
                modules={[EffectFade]}
                effect="fade"
                fadeEffect={{
                    crossFade: true
                }}

        >
            {
                planets.map(({src, title, text}, key) => (
                    <SwiperSlide key={key}
                                 className={style.slide}

                    >
                        <div className={style.slideInner}>
                            <img src={src} alt="" className={style.img}/>
                            <div>
                                <p className={style.title}>{title}</p>
                                <p className={style.text}>{text}</p>
                            </div>

                            <ButtonCustom label="Join Waitlist"
                                          icon={svgIcons.arrow_right}
                                          className={style.joinBtn}
                            />
                        </div>

                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
