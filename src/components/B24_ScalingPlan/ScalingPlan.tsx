import * as React from "react";
import style from "./ScalingPlan.module.scss";
import rocket from "../../assets/png/rocket.png";

export const ScalingPlan = () => {
    return (
        <div className={style.scalingPlan}>

            <img src={rocket} alt="" className={style.rocket}/>


            <div className={style.inner}>

                <div className={style.top}>
                    <h2 className={style.title}>Scaling Plan</h2>
                    <p className={style.description}>
                        Scale your funded account every 4 months with <span>30%</span> and obtain a <span>100% profit split.</span>
                    </p>
                </div>

                <p className={style.text}>
                    With the <span>Trade2Earn program</span>, you already get rewarded based on your daily commitment. However, we also believe in long-term dedication, which should be rewarded proportionately. We are doing this by offering you the <span>BrightFunded Scaling Plan</span>. With this, you can truly launch your trading journey to the limitless heights!
                </p>

            </div>
        </div>
    )
}
