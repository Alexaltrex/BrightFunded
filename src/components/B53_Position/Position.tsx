import * as React from "react";
import {FC} from "react";
import {categories, IPosition} from "../B51_OpenPositions/positions";
import style from "./Position.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {AnchorCustom} from "../common/AnchorCustom/AnchorCustom";

export const Position: FC<IPosition> = ({
                                            id,
                                            category,
                                            title,
                                            text,
                                            address,
                                            time,
                                        }) => {

    return (
        <div className={style.position}>
            <div className={style.inner}>
                <p className={style.ticket}
                   style={{
                       color: categories[category].color,
                       background: categories[category].background,
                   }}
                >
                    {categories[category].label}
                </p>

                <p className={style.title}>{title}</p>

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

                <AnchorCustom label="Apply now"
                              icon={svgIcons.arrow_right}
                              className={style.btn}
                              href="mailto:careers@brightfunded.com"
                />
            </div>
        </div>
    )
}
