import * as React from "react";
import style from "./ScalingPlanPage.module.scss";
import {ScalingPlan} from "../../B24_ScalingPlan/ScalingPlan";
import {HowToScaleUp} from "../../B25_HowToScaleUp/HowToScaleUp";
import {TheSky} from "../../B26_TheSky/TheSky";
import { Table } from "../../B27_Table/Table";
import {YourChance} from "../../common/YourChance/YourChance";

const ScalingPlanPage = () => {
    return (
        <div className={style.scalingPlanPage}
             id="top-scaling-plan"
        >
            <ScalingPlan/>
            <div className={style.card}>
                <HowToScaleUp/>
                <TheSky/>
                <Table/>
            </div>
            <YourChance/>
        </div>
    )
}
export default ScalingPlanPage
