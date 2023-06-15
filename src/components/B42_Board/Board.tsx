import * as React from "react";
import style from "./Board.module.scss";
import {cards} from "./cards";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {useState} from "react";
import {BoardModal} from "./BoardModal/BoardModal";

export const Board = () => {
    const [open, setOpen] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);

    return (
        <div className={style.board}>

            <BoardModal open={open}
                        onClose={() => setOpen(false)}
                        index={cardIndex}
            />

            <div className={style.inner}>

                <h3 className={style.title}>
                    Board of Advisors
                </h3>

                <div className={style.cards}>
                    {
                        cards.map(({
                                       name,
                                       text,
                                       img,
                                       socials,
                                   }, key) => (
                            <div key={key}
                                 className={style.card}
                            >
                                <div className={style.top}>
                                    <div className={style.wrapper}>
                                        <img src={img}
                                             alt=""
                                             className={style.img}
                                        />
                                        <div className={style.right}>
                                            <p className={style.name}>{name}</p>
                                            <p className={style.member}>Member of the Board</p>
                                            <div className={style.socials}>
                                                {
                                                    socials.map(({icon, href}, index) => (
                                                            <React.Fragment key={index}>
                                                                {
                                                                    key !== 2 ? (
                                                                        <a href={href}
                                                                           target="_blank"
                                                                           rel="noopener noreferrer nofollow"
                                                                           className={style.link}
                                                                        >
                                                                            {icon}
                                                                        </a>
                                                                    ) : (
                                                                        <div className={style.link}
                                                                        >
                                                                            {icon}
                                                                        </div>
                                                                    )
                                                                }
                                                            </React.Fragment>
                                                        )
                                                    )
                                                }
                                            </div>
                                        </div>

                                    </div>

                                    <p className={style.text}>{text}</p>
                                </div>

                                <ButtonCustom label="Learn more"
                                              primary={false}
                                              className={style.btn}
                                    // @ts-ignore
                                              disabled={key === 2}
                                    // @ts-ignore
                                              onClick={() => {
                                                  setOpen(true);
                                                  setCardIndex(key);
                                              }}
                                />

                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}
