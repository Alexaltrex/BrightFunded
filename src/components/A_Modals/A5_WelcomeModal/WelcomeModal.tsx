import Modal from "@mui/material/Modal";
import * as React from "react";
import {svgIcons} from "../../../assets/svgIcons";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import style from "./WelcomeModal.module.scss";
import {ButtonCustom} from "../../common/ButtonCustom/ButtonCustom";
import {socialLinks} from "../../A0_App/socialLinks";

export const WelcomeModal = observer(() => {
    const {welcomeModal, setWelcomeModal} = useStore();
    const onClose = () => setWelcomeModal(false);

    return (
        <Modal
            open={welcomeModal}
            onClose={onClose}
            className={style.welcomeModal}
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
                    Welcome Aboard!
                </p>

                <p className={style.description}>

                    <p>
                        Congratulations on joining the BrightFunded waitlist! Your decision puts you at the forefront of
                        the trading revolution.
                    </p>
                    <br/>
                    <p>
                        You'll receive the latest updates and exclusive early access details as we get closer to our
                        launch. Stay tuned and join the conversation in our Discord and Telegram channels, or follow us
                        on our social media platforms for real-time updates and engaging discussions.
                    </p>
                </p>

                <ButtonCustom label="Join Our Discord"
                              icon={svgIcons.discord}
                              className={style.btn}
                              href={socialLinks[0].href}
                />

                <button className={style.okBtn}
                        onClick={onClose}
                >
                    ok
                </button>
            </div>
        </Modal>
    )
})
