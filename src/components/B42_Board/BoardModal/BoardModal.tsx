import {FC} from "react";
import Modal from "@mui/material/Modal";
import * as React from "react";
import style from "./BoardModal.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {cards} from "../cards";

interface IBoardModal {
    index: number
    open: boolean
    onClose: () => void
}

export const BoardModal: FC<IBoardModal> = ({open, onClose, index}) => {
    return (
        <Modal open={open}
               onClose={onClose}
               className={style.boardModal}
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

                <div className={style.top}>
                    <img src={cards[index].img}
                         alt=""
                         className={style.avatar}
                    />

                    <div className={style.wrapper}>
                        <div className={style.textWrapper}>
                            <p className={style.name}>{cards[index].name}</p>
                            <p className={style.member}>Member of the Board</p>
                        </div>

                        <div className={style.socials}>
                            {
                                cards[index].socials.map(({icon, href}, index) => (
                                        <a key={index}
                                           href={href}
                                           target="_blank"
                                           rel="noopener noreferrer nofollow"
                                           className={style.link}
                                        >
                                            {icon}
                                        </a>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>

                <p className={style.fullText}>
                    {
                        cards[index].fullText
                    }
                </p>

            </div>
        </Modal>
    )
}
