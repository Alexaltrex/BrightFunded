import {FC} from "react";
import * as React from "react";
import style from "./ButtonCustom.module.scss";
import clsx from "clsx";

interface IButtonCustom extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label: string
    primary?: boolean
    className?: string
    icon?: JSX.Element
}

export const ButtonCustom: FC<IButtonCustom> = ({
                                                    label,
                                                    primary = true,
                                                    className,
                                                    icon,
                                                    ...props
                                                }) => {
    return (
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
