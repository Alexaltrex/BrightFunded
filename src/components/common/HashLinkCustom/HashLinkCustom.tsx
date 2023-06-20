import {FC} from "react";
import * as React from "react";
import style from "./HashLinkCustom.module.scss";
import clsx from "clsx";
import {HashLink, HashLinkProps} from "react-router-hash-link";

interface IHashLinkCustom extends HashLinkProps {
    label: string
    primary?: boolean
    className?: string
    icon?: JSX.Element
}

export const HashLinkCustom: FC<IHashLinkCustom> = ({
                                                        label,
                                                        primary = true,
                                                        className,
                                                        icon,
                                                        ...props
                                                    }) => {

    return (
        <HashLink className={clsx(
            style.hashLinkCustom,
            !primary && style.hashLinkCustom_secondary,
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
        </HashLink>
    )
}
