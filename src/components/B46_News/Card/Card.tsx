import {FC} from "react";

import * as React from "react";
import style from "./Card.module.scss";
import {Link} from "react-router-dom";
import {ICard, tabs} from "../newsContent";

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
            <Link className={style.link}
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
