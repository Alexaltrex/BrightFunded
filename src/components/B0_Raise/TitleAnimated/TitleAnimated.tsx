import * as React from "react";
import style from "./TitleAnimated.module.scss";
import "./anim.scss";

export const TitleAnimated = () => {
    return (
        <div className={style.titleAnimated}>
            <p className="anim1">Our Capital</p>
            <p className="anim2">Trade2Earn</p>
            <p className="anim3">BrightFunded </p>
        </div>
    )
}
