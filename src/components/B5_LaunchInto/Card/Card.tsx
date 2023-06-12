import {FC} from "react";
import {ICard} from "../cards";
import style from "./Card.module.scss";
import * as React from "react";

export const Card: FC<ICard> = ({title, text, src, src_m, background}) => {
    return (
        <div className={style.card}

        >
            <div className={style.imgWrapperMobile}
                 style={{ background }}
            >
                <img src={src_m} alt=""/>
            </div>
            <div className={style.imgWrapperDesktop}
                 style={{ background }}
            >
                <img src={src} alt=""/>
            </div>
            <p className={style.title}>{title}</p>
            <p className={style.text}>{text}</p>
        </div>
    )
}
