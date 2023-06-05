import {FC} from "react";
import * as React from "react";
import style from "./ButtonCustom.module.scss";
import clsx from "clsx";

interface IButtonCustom {
    label: string
    primary?: boolean
    className?: string
    icon?: JSX.Element
    href?: string
}

export const ButtonCustom: FC<IButtonCustom> = ({
                                                    label,
                                                    primary = true,
                                                    className,
                                                    icon,
                                                    href,
                                                    ...props
                                                }) => {


    return (
        <>
            {
                href ? (
                    <a href={href}
                       target="_blank"
                       rel="noopener noreferrer nofollow"
                       className={clsx(
                           style.buttonCustom,
                           !primary && style.buttonCustom_secondary,
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
                ) : (
                    <button className={clsx(
                        style.buttonCustom,
                        !primary && style.buttonCustom_secondary,
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
                    </button>
                )
            }
        </>


    )
}
