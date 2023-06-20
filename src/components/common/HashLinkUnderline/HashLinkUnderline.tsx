import {FC, useEffect, useState} from "react";
import * as React from "react";
import style from "./HashLinkUnderline.module.scss";
import "./style.scss"
import clsx from "clsx";
import {HashLink, HashLinkProps} from "react-router-hash-link";

interface IHashLinkUnderline extends HashLinkProps {
    label: string
    className?: string
    icon: JSX.Element
}

export const HashLinkUnderline: FC<IHashLinkUnderline> = ({
                                                              label,
                                                              className,
                                                              icon,
                                                              ...props
                                                          }) => {
    const [hover, setHover] = useState(false);
    const [enter, setEnter] = useState(false);
    const [leave, setLeave] = useState(false);
    const [mouseEvent, setMouseEvent] = useState(false)
    useEffect(() => {
        if (hover) {
            setEnter(true);
            setLeave(false);
        } else {
            setEnter(false);
            setLeave(true);
        }
    }, [hover])

    return (
        <HashLink className={clsx(
            style.hashLinkUnderline,
            Boolean(className) && className,
            enter && mouseEvent && "mouseEnter",
            leave && mouseEvent && "mouseLeave"
        )}
                  onMouseEnter={() => {
                      setHover(true);
                      setMouseEvent(true);
                  }}
                  onMouseLeave={() => {
                      setHover(false);
                      setMouseEvent(true);
                  }}
                  {...props}
        >
            <p>{label}</p>
            {
                icon && (
                    <>{icon}</>
                )
            }
        </HashLink>
    )
}

