import * as React from "react";
import style from "./BurgerMenu.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import clsx from "clsx";
import {DropDownBurger} from "../common/DropDownBurger/DropDownBurger";
import {headerLinks} from "../A0_App/links";
import {Link} from "react-router-dom";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {burgerSocialLinks} from "../A0_App/socialLinks";

export const BurgerMenu = observer(() => {
    const {
        burgerMenu, setBurgerMenu,
        burgerOpen1, burgerOpen2,
        setBurgerOpen1, setBurgerOpen2,
    } = useStore();

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_open]: burgerMenu,
        })}>

            <div className={style.top}>
                <DropDownBurger buttonLabel="How to Trade"
                                className={style.item}
                                open={burgerOpen1}
                                onClickDropDown={() => setBurgerOpen1(!burgerOpen1)}
                                onClickLink={() => {
                                    setBurgerOpen1(false);
                                    setBurgerMenu(false);
                                }}
                                list={[
                                    {label: "The Challange", to: "/challange"},
                                    {label: "Trading Objectives", to: "/trading-objectives"},
                                    {label: "Scaling Plan", to: "/scaling-plan"},
                                ]}
                />

                <DropDownBurger buttonLabel="Our Identity"
                                className={style.item}
                                open={burgerOpen2}
                                onClickDropDown={() => setBurgerOpen2(!burgerOpen2)}
                                onClickLink={() => {
                                    setBurgerOpen2(false);
                                    setBurgerMenu(false);
                                }}
                                list={[
                                    {label: "About", to: "/about"},
                                    {label: "Roadmap", to: "/roadmap"},
                                ]}
                />

                {
                    headerLinks.map(({label, path}, key) => (
                        <div className={style.item}>
                            <Link key={key}
                                  to={path}
                                  className={style.link}
                                  onClick={() => {
                                      setBurgerOpen1(false);
                                      setBurgerOpen2(false);
                                      setBurgerMenu(false);
                                  }}
                            >
                                {label}
                            </Link>
                        </div>

                    ))
                }
            </div>

            <div className={style.bottom}>

                <ButtonCustom label="Trading Space"
                              primary={false}
                />

                <div className={style.socialLinks}>
                    {
                        burgerSocialLinks.map(({icon, href}, key) => (
                            <a key={key}
                               href={href}
                               target="_blank"
                               rel="noopener noreferrer nofollow"
                               className={style.link}
                            >
                                {icon}
                            </a>
                        ))
                    }
                </div>

            </div>


        </div>
    )
})
