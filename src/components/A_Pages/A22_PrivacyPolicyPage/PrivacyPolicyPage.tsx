import * as React from "react";
import style from "./PrivacyPolicyPage.module.scss";
import {content} from "./content";
import clsx from "clsx";

const PrivacyPolicyPage = () => {
    return (
        <div className={style.privacyPolicyPage}
             id="policy-top"
        >

            <h2 className={style.title}>
                <div className={style.inner}>
                    <p>Privacy Policy</p>
                </div>

            </h2>

            <div className={style.card}>
                <div className={style.inner}>

                    {
                        content.map(({title, text, list}, key) => (
                            <div className={style.block}
                                 key={key}
                            >
                                <div className={style.block_title}>
                                    <p>{`${key + 1}.`}</p>
                                    <p>{title}</p>
                                </div>

                                <div className={style.block_text}>
                                    {text}
                                </div>

                                {
                                    list.length > 0 && (
                                        <div className={clsx({
                                            [style.block_list]: true,
                                            [style.block_list_without_label]: !list[0].label,
                                        })}>
                                            {
                                                list.map(({label, text}, index) => (
                                                    <div className={style.list_item} key={index}>
                                                        {
                                                            label && (
                                                                <p className={style.item_label}>
                                                                    {label}
                                                                </p>
                                                            )
                                                        }
                                                        <p className={style.item_text}>{text}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }

                            </div>
                        ))
                    }
                </div>

            </div>


        </div>
    )
}
export default PrivacyPolicyPage
