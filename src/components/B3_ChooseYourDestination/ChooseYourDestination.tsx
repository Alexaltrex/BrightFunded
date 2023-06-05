import * as React from "react";
import style from "./ChooseYourDestination.module.scss"
import {useEffect, useState} from "react";
import {Panel} from "./Panel/Panel";
import {TableCustom} from "./TableCustom/TableCustom";
import {PlanetSlider} from "./PlanetSlider/PlanetSlider";
import {SwiperClass} from "swiper/react";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../assets/svgIcons";
import {planets} from "./PlanetSlider/planets";

export const ChooseYourDestination = () => {
    const [currency, setCurrency] = useState(0);
    const [balance, setBalance] = useState<number | string | Array<number | string>>(0);
    const [planetSwiper, setPlanetSwiper] = useState<SwiperClass | null>(null);

    useEffect(() => {
        if (typeof balance === "number") {
            planetSwiper?.slideTo(balance)
        }
    }, [balance])

    return (
        <div className={style.chooseYourDestination}>

            <div className={style.top}/>

            <div className={style.content}>
                <div className={style.inner}>

                    <div className={style.titleWrapper}>
                        <p className={style.pretext}>
                            choose your destination
                        </p>
                        <h2 className={style.title}>
                            Choose Your Destination And Get Funded
                        </h2>
                    </div>

                    <div className={style.rest}>

                        <div className={style.leftBlock}>
                            <Panel currency={currency}
                                   setCurrency={(c) => setCurrency(c)}
                                   balance={balance}
                                   setBalance={(b) => setBalance(b)}
                            />
                            <TableCustom currency={currency}/>
                        </div>

                        <div className={style.rightBlock}>

                            <div className={style.cardMobile}>
                                <img src={planets[Number(balance)].src} alt="" className={style.img}/>
                                <p className={style.title}>{planets[Number(balance)].title}</p>
                                <p className={style.text}>{planets[Number(balance)].text}</p>
                                <ButtonCustom label="Join Waitlist"
                                              icon={svgIcons.arrow_right}
                                              className={style.joinBtn}
                                />
                            </div>

                            <div className={style.sliderDesktop}>
                                <PlanetSlider setSwiper={(s) => setPlanetSwiper(s)}/>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}
