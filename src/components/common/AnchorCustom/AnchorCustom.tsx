import {FC} from "react";
import * as React from "react";
import style from "./AnchorCustom.module.scss";
import clsx from "clsx";

interface IAnchorCustom extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    label: string
    primary?: boolean
    className?: string
    icon?: JSX.Element
}

export const AnchorCustom: FC<IAnchorCustom> = ({
                                                    label,
                                                    primary = true,
                                                    className,
                                                    icon,
                                                    ...props
                                                }) => {
    return (
        <a target="_blank"
           rel="noopener noreferrer nofollow"
           className={clsx(
               style.anchorCustom,
               !primary && style.anchorCustom_secondary,
               Boolean(className) && className
           )}
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
