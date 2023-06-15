import * as React from "react";
import style from "./About.module.scss";

export const About = () => {
    return (
        <div className={style.about}
             id="about-top"
        >
            <div className={style.inner}>

                <h2 className={style.title}>
                    About <span>BrightFunded</span>
                </h2>

                <p className={style.description}>
                    “Turning your trading experience into an unforgettable journey.”
                </p>

            </div>
        </div>
    )
}
