import {FC, useState} from "react";
import {ITopic} from "../topics";
import style from './TopicItem.module.scss';
import * as React from "react";
import {svgIcons} from "../../../assets/svgIcons";
import clsx from "clsx";
import Collapse from "@mui/material/Collapse";
import {Item} from "../Item/Item";

interface ITopicItem extends ITopic {
}

export const TopicItem: FC<ITopicItem> = ({
                                              topic,
                                              list
                                          }) => {
    const [open, setOpen] = useState(false);
    const onClick = () => setOpen(!open);
    return (
        <div className={clsx({
            [style.topicItem]: true,
            [style.topicItem_open]: open,
        })}>

            <div className={style.topic_header}
                 onClick={onClick}
            >
                <p className={style.label}>{topic}</p>
                {svgIcons.arrow_down2}
            </div>

            <Collapse in={open}>
                <div className={style.list}>
                    {
                        list.map((item, key) => (
                                <Item key={key} {...item}/>
                            )
                        )
                    }
                </div>
            </Collapse>


        </div>
    )
}
