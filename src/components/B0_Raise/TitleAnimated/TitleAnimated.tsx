import * as React from "react";
import style from "./TitleAnimated.module.scss";
import "./anim.scss";
import {FC, useRef, useState} from "react";
import clsx from "clsx";
import Fade from "@mui/material/Fade";
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';
import {styled} from '@mui/material/styles';
import {ClickAwayListener} from "@mui/material";
import { useOutsideButNotOnTargetClick } from "../../../helpers/useOutsideClick";

const text = "Clients who successfully complete the BrightFunded Evaluation Process are granted the opportunity to trade for BrightFunded B.V. To avoid any misunderstandings, BrightFunded offers demo accounts with virtual capital to clients at all phases of the partnership.";

//========= TOOLTIP CUSTOM =========//
const TooltipCustomMobile = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        // backgroundColor: theme.palette.common.white,
        // color: 'rgba(0, 0, 0, 0.87)',
        // boxShadow: theme.shadows[1],
        // fontSize: 11,
    },
}));
const TooltipCustomDesktop = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        // backgroundColor: theme.palette.common.white,
        // color: 'rgba(0, 0, 0, 0.87)',
        // boxShadow: theme.shadows[1],
        // fontSize: 11,
    },
}));

//========= TooltipContent ========//
const TooltipContent = () => {
    return (
        <div className={style.tooltipContent}>
            <p>{text}</p>
        </div>
    )
}

//========= TitleCustom =========//
interface ITitleCustom {
    onMouseEnter: () => void
    onMouseLeave: () => void
    hover: boolean
}

//========= TitleAnimated =========//
export const TitleAnimated = () => {
    const [hover, setHover] = useState(false);
    const [open, setOpen] = useState(false);

    const outsideRef = useRef<HTMLDivElement>(null!);
    const targetRef = useRef<HTMLDivElement>(null!);
    useOutsideButNotOnTargetClick(outsideRef, targetRef, () => setOpen(false));

    return (
        <>
            <div className={style.wrapperMobile}>
                    <TooltipCustomMobile title={
                        <div className={style.tooltipContent}
                             ref={targetRef}
                        >
                        <p>{text}</p>
                    </div>
                    }
                                   open={open}
                                   onClose={() => setOpen(false)}
                                   placement="top"
                                   TransitionComponent={Fade}
                                   sx={{
                                       "& .MuiTooltip-tooltip": {
                                           backgroundColor: "transparent",
                                           padding: 0,
                                       }
                                   }}
                                   PopperProps={{
                                       disablePortal: true,
                                   }}
                                   disableFocusListener
                                   disableHoverListener
                                   disableTouchListener
                    >
                        <div className={clsx({
                            [style.titleAnimated]: true,
                            [style.titleAnimated_tooltip]: open,
                        })}
                             onClick={() => setOpen(true)}
                             ref={outsideRef}
                        >
                            <p className={clsx("anim1")}>Our <span>Capital</span></p>
                            <p className={clsx("anim2")}>Trade2Earn</p>
                            <p className={clsx("anim3")}>BrightFunded </p>
                        </div>
                    </TooltipCustomMobile>
            </div>

            <div className={style.wrapperDesktop}>
                <TooltipCustomDesktop title={<TooltipContent/>}
                               open={hover}
                               placement="top"
                               TransitionComponent={Fade}
                               sx={{
                                   "& .MuiTooltip-tooltip": {
                                       backgroundColor: "transparent",
                                       padding: 0,
                                   }
                               }}
                >
                    <div className={clsx({
                        [style.titleAnimated]: true,
                        [style.titleAnimated_tooltip]: hover,
                    })}
                         onMouseEnter={() => setHover(true)}
                         onMouseLeave={() => setHover(false)}
                    >
                        <p className={clsx("anim1")}>Our <span>Capital</span></p>
                        <p className={clsx("anim2")}>Trade2Earn</p>
                        <p className={clsx("anim3")}>BrightFunded </p>
                    </div>
                </TooltipCustomDesktop>
            </div>
        </>


    )
}
