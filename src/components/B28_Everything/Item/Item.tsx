import {FC, useState} from "react";
import * as React from "react";
import {IListItem} from "../list";
import style from "./Item.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import Collapse from "@mui/material/Collapse";

interface IItem extends IListItem {

}

export const Item: FC<IItem> = ({
                                    question,
                                    answer
                                }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={style.item}>
            <button className={style.btn}
                    onClick={() => setOpen(!open)}
            >
                {open ? svgIcons.btn_minus : svgIcons.btn_plus}
            </button>

            <p className={style.question}>{question}</p>

            <Collapse in={open}>
                <p className={style.answer}>{answer}</p>
            </Collapse>

        </div>
    )
}
