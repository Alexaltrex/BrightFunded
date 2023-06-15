import * as React from "react";
import style from "./Header.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {headerLinks} from "../A0_App/links";
import {DropDownHeader} from "../common/DropDownHeader/DropDownHeader";
import gradientLeft from "../../assets/png/gradient_header_left.png";
import gradientRight from "../../assets/png/gradient_header_right.png";
import clsx from "clsx";
import {HashLink} from "react-router-hash-link";

export const Header = observer(() => {
    const {
        burgerMenu, setBurgerMenu,
        setBurgerOpen1, setBurgerOpen2,
        pageYOffset, scrollDown, setJoinModal,
    } = useStore();
    const onBurgerHandler = () => {
        setBurgerMenu(!burgerMenu);
        setBurgerOpen1(false);
        setBurgerOpen2(false);
    };
    const onTrading = () => setJoinModal(true);

    return (
        <>
            <header className={clsx({
                [style.header]: true,
                [style.header_scroll]: pageYOffset > 0,
                [style.header_hide]: false, //pageYOffset > 110 && scrollDown && !burgerMenu,
            })}
            >
                {
                    pageYOffset === 0 && (
                        <>
                            <img src={gradientLeft} alt="" className={style.gradientLeft}/>
                            <img src={gradientRight} alt="" className={style.gradientRight}/>
                        </>
                    )

                }

                <div className={style.inner}>

                    <HashLink className={style.logo}
                              to="/#home-top"
                              smooth
                              onClick={() => {
                                  setBurgerMenu(false);
                                  setBurgerOpen1(false);
                                  setBurgerOpen2(false);
                              }}
                    >
                        {svgIcons.logo}
                    </HashLink>

                    <div className={style.links}>

                        <DropDownHeader buttonLabel="How to Trade"
                                        className={style.item}
                                        list={[
                                            {label: "The Challenge", to: "/#challenge"},
                                            {label: "Trading Objectives", to: "/#trading-objectives"},
                                            {label: "Scaling Plan", to: "/scaling-plan#top-scaling-plan"},
                                        ]}
                        />

                        <DropDownHeader buttonLabel="Our Identity"
                                        className={style.item}
                                        list={[
                                            {label: "About", to: "/about#about-top"},
                                            {label: "Roadmap", to: "/roadmap#roadmap-top"},
                                        ]}
                        />

                        {
                            headerLinks.map(({label, path}, key) => (
                                <HashLink key={key}
                                          to={path}
                                          className={style.link}
                                          smooth
                                >
                                    {label}
                                </HashLink>
                            ))
                        }
                    </div>


                    <ButtonCustom label="Trading Space"
                                  primary={false}
                                  className={style.tradeBtn}
                        // @ts-ignore
                                  onClick={onTrading}
                    />

                    <button className={style.burgerBtn}
                            onClick={onBurgerHandler}
                    >
                        {burgerMenu ? svgIcons.close : svgIcons.burger}
                    </button>

                </div>
            </header>
        </>

    )
})
