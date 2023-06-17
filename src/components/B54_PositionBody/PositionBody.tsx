import * as React from "react";
import style from "./PositionBody.module.scss";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../assets/svgIcons";

const lists = [
    [
        "Respond promptly and professionally to customer inquiries via email, chat, and social media.",
        "Resolve customer issues and communicate complex concepts in a clear, understandable way.",
        "Collaborate with other teams to resolve complex issues and provide user feedback to enhance our services.",
        "Monitor and report on customer feedback and insights to improve our platform and services.",
        "Stay updated about our platform, services, and the financial trading landscape.",
    ],
    [
        "Respond promptly and professionally to customer inquiries via email, chat, and social media.",
        "Resolve customer issues and communicate complex concepts in a clear, understandable way.",
        "Collaborate with other teams to resolve complex issues and provide user feedback to enhance our services.",
        "Monitor and report on customer feedback and insights to improve our platform and services.",
        "Stay updated about our platform, services, and the financial trading landscape.",
    ],
    [
        "Be a part of a dedicated, diverse team with direct influence over the company's direction.",
        "Help shape the future of a global FinTech startup with massive growth potential.",
        "Connect with intelligent and passionate individuals from around the world.",
        "Enjoy the freedom to work remotely or from our office in Amsterdam.",
        "Join a culture that values friendship over formality.",
    ],
]


export const PositionBody = () => {
    return (
        <div className={style.positionBody}>
            <div className={style.inner}>

                <div className={style.block}>
                    <p className={style.block_title}>
                        About BrightFunded
                    </p>
                    <div className={style.text}>
                        <p>
                            Are you passionate about delivering excellent customer service and looking to join an
                            innovative, fast-paced FinTech startup? Look no further! We're searching for a dynamic
                            Customer
                            Support Specialist to join our team at BrightFunded and become an integral part of our
                            growth
                            story.
                        </p>
                        <br/>
                        <p>
                            At BrightFunded, we're on a mission to empower traders worldwide to build and monetize their
                            trading skills. Through our unique trading program and innovative Web 3.0 elements, we
                            encourage
                            our community to achieve remarkable results. As a Customer Support Specialist, you will be
                            the
                            go-to contact for our trader community, bridging the gap between our community and the
                            broader
                            BrightFunded team.
                        </p>
                    </div>

                </div>

                <div className={style.block}>
                    <p className={style.block_title}>
                        Key Responsibilities
                    </p>
                    <div className={style.block_list}>
                        {
                            lists[0].map((item, key) => (
                                <p key={key} className={style.list_item}>{item}</p>
                            ))
                        }
                    </div>

                </div>

                <div className={style.block}>
                    <p className={style.block_title}>
                        What magical talents will you bring to our team?
                    </p>
                    <div className={style.block_list}>
                        {
                            lists[1].map((item, key) => (
                                <p key={key} className={style.list_item}>{item}</p>
                            ))
                        }
                    </div>
                </div>

                <div className={style.block}>
                    <p className={style.block_title}>
                        Why Join BrightFunded?
                    </p>
                    <div className={style.block_list}>
                        {
                            lists[2].map((item, key) => (
                                <p key={key} className={style.list_item}>{item}</p>
                            ))
                        }
                    </div>
                </div>

                <div className={style.block}>
                    <p className={style.block_textLast}>
                        Ready to contribute to BrightFunded's journey toward becoming a globally recognized brand in retail
                        trading? We're excited to have you on board! Send your CV or LinkedIn profile to <a
                        href="mailto:careers@brightfunded.com">careers@brightfunded.com</a>, and we'll schedule an online or
                        in-person meeting promptly. Let's shape
                        the future of trading together!
                    </p>
                </div>

                <ButtonCustom label="Apply now"
                              icon={svgIcons.arrow_right}
                              className={style.btn}
                />


            </div>
        </div>
    )
}
