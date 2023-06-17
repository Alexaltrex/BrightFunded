import {Link} from "react-router-dom";
import {categories, IPosition} from "../positions";
import {FC} from "react";
import style from "./Card.module.scss";
import * as React from "react";
import {svgIcons} from "../../../assets/svgIcons";

export const Card: FC<IPosition> = ({
                                        id,
                                        category,
                                        title,
                                        text,
                                        address,
                                        time,
                                    }) => {
    return (
        <Link className={style.card}
              to={`/position/${id}`}
        >
            <div className={style.top}>

                <p className={style.ticket}
                   style={{
                       color: categories[category].color,
                       background: categories[category].background,
                   }}
                >
                    {categories[category].label}
                </p>

                <p className={style.title}>{title}</p>
            </div>

            <div className={style.bottom}>
                <p className={style.text}>{text}</p>
                <div className={style.items}>
                    <div className={style.item}>
                        {svgIcons.label}
                        <p className={style.item_text}>{address}</p>
                    </div>
                    <div className={style.item}>
                        {svgIcons.time}
                        <p className={style.item_text}>{time}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
