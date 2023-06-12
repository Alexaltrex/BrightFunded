import * as React from "react";
import style from "./TableCustom.module.scss"
import {FC, useState} from "react";
import {dataMock, headers} from "../dataMock";
import {Swiper, SwiperClass, SwiperSlide} from "swiper/react";
import "swiper/css";
import clsx from "clsx";
import { data } from "../data";


interface ITableCustom {
    currency: number
    balance: number
}

export const TableCustom: FC<ITableCustom> = ({
                                                  currency,
                                                  balance,
}) => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [step, setStep] = useState(0);

    return (
        <>
            <div className={style.tableCustomMobile}>

                <div className={style.table}>
                    <div className={clsx(style.row, style.row_header)}>
                        <div className={style.prop}/>
                        <div className={style.value}/>
                    </div>
                    {
                        Object.keys(data).map((prop, key) => (
                            <div key={key}
                                 className={style.row}
                            >
                                <div className={style.prop}>
                                    {prop}
                                </div>
                                <div className={style.value}/>
                            </div>
                        ))
                    }

                    <div className={style.sliderWrapper}>
                        <Swiper slidesPerView={1}
                                onSwiper={(swiper) => setSwiper(swiper)}
                                onSlideChange={swiper => setStep(swiper.realIndex)}
                                spaceBetween={0}
                        >
                            {
                                [0, 1, 2].map(step => (
                                    <SwiperSlide key={step}
                                    >
                                        <div className={clsx(style.row, style.row_header)}
                                        >
                                            <p>{`Step ${step + 1}`}</p>
                                            <p>{headers[step]}</p>
                                        </div>
                                        {
                                            Object.keys(data)
                                                // @ts-ignore
                                                .map(prop => data[prop][currency][balance][step])
                                                .map((value, key) => (
                                                    <div key={key}
                                                         className={style.row}
                                                    >
                                                        <p>{
                                                            value//[key]
                                                        }</p>
                                                    </div>
                                                ))
                                        }
                                    </SwiperSlide>
                                ))
                            }


                        </Swiper>
                    </div>
                </div>

                <div className={style.navigation}>
                    {
                        [0, 1, 2].map(key => (
                            <div key={key}
                                 className={clsx({
                                     [style.item]: true,
                                     [style.item_selected]: key === step,
                                 })}
                                 onClick={() => swiper?.slideTo(key)}
                            />
                        ))
                    }
                </div>

            </div>

            <div className={style.tableCustomDesktop}>

                <div className={style.header}>
                    <div/>
                    {
                        headers.map((header, key) => (
                            <div>
                                <p>{`Step ${key + 1}`}</p>
                                <p>{header}</p>
                            </div>
                        ))
                    }
                </div>

                {
                    Object.keys(data).map((prop, key) => (
                        <div key={key}
                             className={style.row}
                        >
                            <div>{prop}</div>
                            {/*@ts-ignore*/}
                            <div>{data[prop][currency][balance][0]}</div>
                            {/*@ts-ignore*/}
                            <div>{data[prop][currency][balance][1]}</div>
                            {/*@ts-ignore*/}
                            <div>{data[prop][currency][balance][2]}</div>
                        </div>
                    ))

                }
            </div>
        </>
    )
}
