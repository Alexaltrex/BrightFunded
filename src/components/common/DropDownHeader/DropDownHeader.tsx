import * as React from "react";
import {FC, useRef, useState} from "react";
import clsx from "clsx";
import style from "./DropDownHeader.module.scss"
import {Popover} from "@mui/material";
import {svgIcons} from "../../../assets/svgIcons";
import {Link} from "react-router-dom";

interface IDropDownHeader {
    className?: string
    buttonLabel: string
    list: {
        label: string
        to: string
    }[]
}

export const DropDownHeader: FC<IDropDownHeader> = ({
                                                        className,
                                                        buttonLabel,
                                                        list
                                                    }) => {
    const [open, setOpen] = useState(false);

    const onMouseEnter = () => {
        setOpen(true)
    }
    const onMouseLeave = () => {
        setOpen(false)
    }

    return (
        <div className={clsx(
            style.dropDownHeader,
            Boolean(className) && className
        )}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
        >
            <button className={clsx({
                [style.btn]: true,
                [style.btn_open]: open,
            })}

            >
                <p>{buttonLabel}</p>
                {svgIcons.arrow_down}
            </button>

            {
                open && (
                    <div className={style.dropDownWrapper}>
                        <div className={style.dropDown}>
                            {
                                list.map(({label, to}, key) => (
                                    <Link key={key}
                                          to={to}
                                          className={style.item}
                                    >
                                        <p>{label}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                )

            }
        </div>
    )
}
