import * as React from "react";
import style from "./TermsPage.module.scss";
import {terms} from "./terms";

const TermsPage = () => {
    return (
        <div className={style.termsPage}
             id="terms-top"
        >

            <div className={style.titleBlock}>
                <div className={style.inner}>
                    <h2 className={style.title}>Terms & Conditions</h2>
                </div>
            </div>

            <div className={style.card}>
                <div className={style.inner}>
                    {
                        terms.map(({label, text}, key) => (
                            <div className={style.block} key={key}>
                                <h3 className={style.label}>
                                    <p>{`${key +1}.`}</p>
                                    <p>{label}</p>
                                </h3>
                                <div className={style.text}>{text}</div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
export default TermsPage
