import * as React from "react";
import style from "./CareerPage.module.scss";
import {BeBright} from "../../B49_BeBright/BeBright";

const CareerPage = () => {
    return (
        <div className={style.careerPage}
             id="career#career-top"
        >
            <BeBright/>
            <div className={style.card}>
                CareerPage
            </div>
        </div>
    )
}

export default CareerPage;
