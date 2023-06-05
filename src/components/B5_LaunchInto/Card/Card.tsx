import {FC} from "react";
import {ICard} from "../cards";
import style from "./Card.module.scss";
import * as React from "react";

export const Card: FC<ICard> = ({title, text, src}) => {
    return (
        <div className={style.card}>
            <div className={style.imgWrapper}>
                <img src={src} alt=""/>
            </div>
            <p className={style.title}>{title}</p>
            <p className={style.text}>{text}</p>
        </div>
    )
}
