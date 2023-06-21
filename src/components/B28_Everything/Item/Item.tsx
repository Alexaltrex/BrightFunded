import {FC, useState} from "react";
import * as React from "react";
import style from "./Item.module.scss";
import Collapse from "@mui/material/Collapse";
import plus from "../../../assets/png/btn_plus.png";
import minus from "../../../assets/png/btn_minus.png";
import {IListItem} from "../topics";
import {getSelectedString} from "../../../helpers/getSelectedString";

interface IItem extends IListItem {
    open?: boolean
    selectedString?: string
}

export const Item: FC<IItem> = ({
                                    question,
                                    answer,
                                    open = false,
                                    selectedString
                                }) => {
    const [show, setShow] = useState(open);

    return (
        <div className={style.faqItem}
             onClick={() => setShow(!show)}
        >
            <div className={style.faqItem_btn}>
                <img src={show ? minus : plus} alt=""/>
            </div>

            <p className={style.question}>
                {
                    selectedString ? getSelectedString(question, selectedString) : question
                }
            </p>

            <Collapse in={show}>
                <div className={style.answer}>{answer}</div>
            </Collapse>

        </div>
    )
}
