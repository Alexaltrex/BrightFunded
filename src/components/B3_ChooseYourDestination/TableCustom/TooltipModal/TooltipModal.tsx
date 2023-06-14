import Modal from "@mui/material/Modal";
import * as React from "react";
import {svgIcons} from "../../../../assets/svgIcons";
import style from "./TooltipModal.module.scss";
import {FC} from "react";
import {data} from "../../data";
import {tooltips} from "../tooltips";

interface ITooltipModal {
    open: boolean
    onClose: () => void
    tooltipIndex: number
}

export const TooltipModal: FC<ITooltipModal> = ({
                                                    open,
                                                    onClose,
                                                    tooltipIndex
}) => {
    return (
        <Modal open={open}
               onClose={onClose}
               className={style.tooltipModal}
               sx={{
                   "& .MuiBackdrop-root": {
                       backgroundColor: "rgba(11, 12, 18, 0.5)",
                   },
               }}
        >
            <div className={style.card}>

                <button className={style.closeBtn}
                        onClick={onClose}
                >
                    {svgIcons.close_black}
                </button>

                <p className={style.title}>
                    {tooltipIndex === 7 ? "+ 14 days" : Object.keys(data)[tooltipIndex]}
                </p>

                <div className={style.description}>
                    {tooltips[tooltipIndex]}
                </div>
            </div>
        </Modal>
    )
}
