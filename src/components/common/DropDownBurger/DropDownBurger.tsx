import * as React from "react";
import {FC, useState} from "react";
import style from "./DropDownBurger.module.scss";
import clsx from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import {Collapse} from "@mui/material";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

interface IDropDownBurger {
    className?: string
    buttonLabel: string
    list: {
        label: string
        to: string
    }[]
    open: boolean
    onClickDropDown: () => void
    onClickLink: (e:any) => void
}

export const DropDownBurger: FC<IDropDownBurger> = ({
                                                        className,
                                                        buttonLabel,
                                                        list,
                                                        open,
                                                        onClickDropDown,
                                                        onClickLink
                                                    }) => {
    return (
        <div className={clsx(
            style.dropDownBurger,
            Boolean(className) && className
        )}>
            <button className={clsx({
                [style.btn]: true,
                [style.btn_open]: open,
            })}
                    onClick={onClickDropDown}
            >
                <p>{buttonLabel}</p>
                {svgIcons.arrow_down}
            </button>
            <Collapse in={open}>
                <div className={style.list}>
                    {
                        list.map(({label, to}, key) => (
                            <HashLink key={key}
                                      to={to}
                                      className={style.item}
                                      onClick={()=>{onClickLink(to)}}
                                      smooth
                            >
                                <p>{label}</p>
                            </HashLink>
                        ))
                    }
                </div>
            </Collapse>
        </div>
    )
}
