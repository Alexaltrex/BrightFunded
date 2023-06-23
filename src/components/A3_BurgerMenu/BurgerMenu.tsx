import * as React from "react";
import style from "./BurgerMenu.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import clsx from "clsx";
import {DropDownBurger} from "../common/DropDownBurger/DropDownBurger";
import {headerLinks} from "../A1_Header/links";
import {Link} from "react-router-dom";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {burgerSocialLinks} from "../A0_App/socialLinks";

export const BurgerMenu = observer(() => {
    const {
        burgerMenu, setBurgerMenu,
        burgerOpen1, burgerOpen2,
        setBurgerOpen1, setBurgerOpen2,
        setJoinModal,
    } = useStore();

    const onTradingHandler = () => setJoinModal(true);

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
                                onClickLink={(to) => {
                                    setBurgerOpen1(false);
                                    setBurgerMenu(false);
                                    if(!to.includes('#')){
                                        window.scrollTo(0,0);
                                    }
                                   
                                }}
                                list={[
                                    {label: "The Challange", to: "/#challenge"},
                                    {label: "Trading Objectives", to: "/#trading-objectives"},
                                    {label: "Scaling Plan", to: "/scaling-plan"},
                                ]}
                />

                <DropDownBurger buttonLabel="Our Identity"
                                className={style.item}
                                open={burgerOpen2}
                                onClickDropDown={() => setBurgerOpen2(!burgerOpen2)}
                                onClickLink={(to) => {
                                    setBurgerOpen2(false);
                                    setBurgerMenu(false);
                                    if(!to.includes('#')){
                                        window.scrollTo(0,0);
                                    }
                                }}
                                list={[
                                    {label: "About", to: "/about#about-top"},
                                    {label: "Roadmap", to: "/roadmap#roadmap-top"},
                                ]}
                />

                {
                    headerLinks.map(({label, to}, key) => (
                        <div className={style.item}>
                            <Link key={key}
                                  to={to}
                                  className={style.link}
                                  onClick={() => {
                                      setBurgerOpen1(false);
                                      setBurgerOpen2(false);
                                      setBurgerMenu(false);
                                      window.scrollTo(0,0);
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
                              onClick={onTradingHandler}
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
