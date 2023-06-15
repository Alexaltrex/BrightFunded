import * as React from "react";
import style from "./FaqPage.module.scss"
import {YourChance} from "../common/YourChance/YourChance";
import {Everything} from "../B28_Everything/Everything";

export const FaqPage = () => {
    return (
        <div className={style.faqPage}
             id="faq-top"
        >
            <Everything/>
            <YourChance/>
        </div>
    )
}
export default FaqPage
