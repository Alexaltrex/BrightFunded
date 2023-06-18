import {FC, useState} from "react";
import * as React from "react";
import style from "./Item.module.scss";
import Collapse from "@mui/material/Collapse";
import plus from "../../../assets/png/btn_plus.png";
import minus from "../../../assets/png/btn_minus.png";
import {IListItem} from "../topics";

interface IItem extends IListItem {

}

export const Item: FC<IItem> = ({
                                    question,
                                    answer
                                }) => {
    const [show, setShow] = useState(false);

    return (
        <div className={style.faqItem}
             onClick={() => setShow(!show)}
        >
            <div className={style.faqItem_btn}>
                <img src={show ? minus : plus} alt=""/>
            </div>

            <p className={style.question}>{question}</p>

            <Collapse in={show}>
                <div className={style.answer}>{answer}</div>
            </Collapse>

        </div>
    )
}
