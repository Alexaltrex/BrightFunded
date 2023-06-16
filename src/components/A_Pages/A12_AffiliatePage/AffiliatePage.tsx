import * as React from "react";
import style from "./AffiliatePage.module.scss";
import {Affiliate} from "../../B20_Affiliate/Affiliate";
import {WhatSets} from "../../B21_WhatSets/WhatSets";
import {HowToBecome} from "../../B22_HowToBecome/HowToBecome";
import {ReachForTheStars} from "../../B23_ReachForTheStars/ReachForTheStars";

const AffiliatePage = () => {
    return (
        <div className={style.affiliatePage} id="top">
            <Affiliate/>
            <WhatSets/>
            <HowToBecome/>
            <ReachForTheStars/>
        </div>
    )
}
export default AffiliatePage
