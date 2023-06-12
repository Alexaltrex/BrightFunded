import * as React from "react";
import style from "./Trade.module.scss";
import clsx from "clsx";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../assets/svgIcons";
import {LinkCustom} from "../common/LinkCustom/LinkCustom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";


export const Trade = observer(() => {
    const { setJoinModal } = useStore();
    const onJoin = () => setJoinModal(true);

    return (
        <div className={style.trade}>
            <div className={style.inner}>

                <h2 className={style.title}>
                    Trade<span>2</span>Earn
                </h2>

                <p className={clsx(style.text, style.text_1)}>
                    At <span>BrightFunded</span>, we believe that you should be rewarded for your daily commitment and dedication to trading. That's why we are excited to introduce a groundbreaking concept in the world of trading: <span>Trade2Earn</span>.
                </p>

                <p className={clsx(style.text, style.text_2)}>
                    With every trade, you're not just striving for success, <span>you're earning it</span>. BrightFunded Tokens turn your hard work into exciting rewards, creating an incentive that goes beyond profits. It's not just trading; it's Trade2Earn. With BrightFunded, your commitment to trading takes on a whole <span>new level of value</span>.
                </p>

                <div className={style.buttons}>
                    <ButtonCustom label="Join Waitlist"
                                  icon={svgIcons.arrow_right}
                                  className={style.joinBtn}
                        //@ts-ignore
                                  onClick={onJoin}
                    />

                    <LinkCustom label="Join Our Discord"
                                href="#"
                                className={style.tradeBtn}
                                icon={svgIcons.discord}
                    />
                </div>

            </div>
        </div>
    )
})
