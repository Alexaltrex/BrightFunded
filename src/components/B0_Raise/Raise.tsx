import * as React from "react";
import style from "./Raise.module.scss";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../assets/svgIcons";
import {LinkCustom} from "../common/LinkCustom/LinkCustom";
import {burgerSocialLinks} from "../A0_App/socialLinks";
import {items} from "./items";
import {Swiper, SwiperClass, SwiperSlide} from "swiper/react";
import "swiper/css";
import {useState} from "react";
import clsx from "clsx";
import coinBack from "../../assets/png/coin-back.png";
// @ts-ignore
import videoWebm from "../../assets/webm/coin.webm";
// @ts-ignore
import videoMp4 from "../../assets/mp4/coin.mp4";
import {TitleAnimated} from "./TitleAnimated/TitleAnimated";
import {observer} from "mobx-react-lite";
import { useStore } from "../../store/useStore";

export const Raise = observer(() => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const { setJoinModal } = useStore();

    return (
        <>
            <div className={style.raise}>
                <div className={style.inner}>

                    <div className={style.centerBlock}>

                        <h1 className={style.title}>
                            Raise Your Trading Game With <TitleAnimated/>
                        </h1>

                        <p className={style.description}>
                            Trade yourself up to <span>$400k</span> in capital.
                            Receive <span>80%</span> to <span>100%</span> of the profits. Get rewarded
                            with <span>Trade2Earn.</span>
                        </p>

                        <div className={style.btns}>
                            <ButtonCustom label="Join Waitlist"
                                          icon={svgIcons.arrow_right}
                                          className={style.joinBtn}
                                          // @ts-ignore
                                          onClick={() => setJoinModal(true)}
                            />

                            <LinkCustom label="Trade2Earn"
                                        href="#"
                                        className={style.tradeBtn}
                                        icon={svgIcons.arrow_right}
                            />
                        </div>

                        <div className={style.videoWrapper}>
                            <img src={coinBack} alt="" className={style.coinBack}/>
                            <div className={style.inner}>

                                <video autoPlay={true}
                                       muted={true}
                                       playsInline={true}
                                       loop={true}
                                >
                                    <source src={videoMp4} type='video/mp4; codecs="hvc1"'/>
                                    <source src={videoWebm} type='video/webm'/>
                                </video>
                            </div>

                        </div>

                    </div>

                    <div className={style.left}>
                        <div className={style.socialLinks}>
                            {
                                burgerSocialLinks.map(({icon, href}, key) => (
                                    <a key={key}
                                       href={href}
                                       target="_blank"
                                       rel="noopener noreferrer nofollow"
                                       className={style.link}
                                    >
                                        {icon}
                                    </a>
                                ))
                            }
                        </div>

                        <p className={style.description}>
                            Trade yourself up to <span>$400k</span> in capital.
                            Receive <span>80%</span> to <span>100%</span> of the profits. Get rewarded
                            with <span>Trade2Earn.</span>
                        </p>
                    </div>

                    <div className={style.right}>
                        {
                            items.map(({value, text}, key) => (
                                <div key={key}
                                     className={style.item}
                                >
                                    <p className={style.value}>{value}</p>
                                    <p className={style.text}>{text}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

            <div className={style.slider}>
                <Swiper slidesPerView={1}
                        loop={true}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
                        className={style.swiper}
                        spaceBetween={0}
                >
                    {
                        items.map(({value, text}, key) => (
                            <SwiperSlide key={key} className={style.slide}>
                                <div className={style.card}>
                                    <p className={style.value}>{value}</p>
                                    <p className={style.text}>{text}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className={style.dots}>
                    {
                        [0, 1, 2].map(el => (
                            <div key={el}
                                 className={clsx({
                                     [style.dot]: true,
                                     [style.dot_selected]: el === currentIndex,
                                 })}
                            />
                        ))
                    }
                </div>
            </div>
        </>

    )
})
