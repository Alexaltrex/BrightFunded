import {FC, useEffect, useState} from "react";
import * as React from "react";
import style from "./LinkCustom.module.scss";
import "./style.scss"
import clsx from "clsx";

interface ILinkCustom extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    label: string
    className?: string
    icon: JSX.Element
    href: string
}

export const LinkCustom: FC<ILinkCustom> = ({
                                                    label,
                                                    className,
                                                    icon,
                                                    href,
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
        <a href={href}
           target="_blank"
           rel="noopener noreferrer nofollow"
           className={clsx(
               style.linkCustom,
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
        </a>
    )
}
