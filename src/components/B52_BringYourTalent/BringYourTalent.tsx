import * as React from "react";
import style from "./BringYourTalent.module.scss";
import gradientLeft from "../../assets/png/gradient_footer_left.png";
import gradientRight from "../../assets/png/gradient_footer_right.png";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {svgIcons} from "../../assets/svgIcons";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";


export const BringYourTalent = observer(() => {
    const { setJoinModal } = useStore();
    const onJoin = () => setJoinModal(true);

    return (
        <div className={style.bringYourTalent}>

            <img src={gradientLeft} alt="" className={style.gradientLeft}/>
            <img src={gradientRight} alt="" className={style.gradientRight}/>

            <div className={style.titleWrapper}>
                <p className={style.pretext}>
                    Join Us
                </p>
                <h2 className={style.title}>
                    Bring <span>Your Talent</span> To Our Team
                </h2>

            </div>

            <ButtonCustom label="Join The Team"
                          icon={svgIcons.arrow_right}
                          className={style.btn}
                //@ts-ignore
                          //onClick={onJoin}
            />


        </div>
    )
})
