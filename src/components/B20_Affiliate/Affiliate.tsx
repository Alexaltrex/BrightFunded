import * as React from "react";
import style from "./Affiliate.module.scss";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../assets/svgIcons";

export const Affiliate = () => {
    return (
        <div className={style.affiliate}>
            <div className={style.inner}>

                <h2 className={style.title}>
                    Affiliate <span>Partnership</span>
                </h2>

                <p className={style.text}>
                    Welcome to BrightFunded’s groundbreaking Affiliate Partnership Program. This is your opportunity to transform your community, website, blog, or social media channel into a profitable venture, generating <span>passive income effortlessly.</span> By referring a new trader, you receive an attractive 10% commission on <span>every purchase</span> they make. An industry game-changer.
                </p>

                <ButtonCustom label="Sign Up"
                              icon={svgIcons.arrow_right}
                              className={style.signBtn}
                />

            </div>
        </div>
    )
}
