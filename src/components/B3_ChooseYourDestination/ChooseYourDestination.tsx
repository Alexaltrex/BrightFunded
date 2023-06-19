import * as React from "react";
import style from "./ChooseYourDestination.module.scss"
import {useEffect, useState} from "react";
import {Panel} from "./Panel/Panel";
import {TableCustom} from "./TableCustom/TableCustom";
import {PlanetSlider} from "./PlanetSlider/PlanetSlider";
import {SwiperClass} from "swiper/react";
import {useStore} from "../../store/useStore";
import {observer} from "mobx-react-lite";

export const ChooseYourDestination = observer(() => {
    const { setJoinModal } = useStore();

    // 0 - USD, 1 - EUR, 2 - POUND
    const [currency, setCurrency] = useState(0);
    // 0...4 => 10, 25, 50, 100, 200
    const [balance, setBalance] = useState<number | string | Array<number | string>>(0);
    const [planetSwiper, setPlanetSwiper] = useState<SwiperClass | null>(null);

    useEffect(() => {
        if (typeof balance === "number") {
            planetSwiper?.slideTo(balance)
        }
    }, [balance]);

    const onJoin = () => setJoinModal(true);

    return (
        <div className={style.chooseYourDestination}
             id="trading-objectives"
        >

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
                            <TableCustom currency={currency}
                                         balance={Number(balance) || 0}
                            />
                        </div>

                        <div className={style.rightBlock}>
                            <div className={style.slider}>
                                <PlanetSlider setSwiper={(s) => setPlanetSwiper(s)}
                                              onJoin={onJoin}
                                              currency={currency}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
})
