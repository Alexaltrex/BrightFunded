import {FC} from "react";
import {ICard, tabs} from "../const";
import * as React from "react";
import style from "./Card.module.scss";
import {Link} from "react-router-dom";

export const Card: FC<ICard> = ({
                                    id,
                                    tab,
                                    title,
                                    text,
                                    date,
                                    img,
                                }) => {
    return (
        <div className={style.card}>
            <Link className={style.lincardk}
                  to={`/blog/${id}`}
            >
                <img src={img} alt="" className={style.img}/>
            </Link>


            <p className={style.ticket}
               style={{
                   color: tabs[tab].color,
                   background: tabs[tab].background,
               }}
            >
                {tabs[tab].label}
            </p>

            <p className={style.title}>{title}</p>
            <p className={style.text}>{text}</p>
            <p className={style.date}>{date}</p>

        </div>
    )
}
