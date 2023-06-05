import * as React from "react";
import style from "./Header.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {Link} from "react-router-dom";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {headerLinks} from "../A0_App/links";
import {DropDownHeader} from "../common/DropDownHeader/DropDownHeader";

export const Header = observer(() => {
    const {
        burgerMenu, setBurgerMenu,
        setBurgerOpen1, setBurgerOpen2,
    } = useStore();
    const onBurgerHandler = () => {
        setBurgerMenu(!burgerMenu);
        setBurgerOpen1(false);
        setBurgerOpen2(false);
    };

    return (
        <>
            <header className={style.header}>
                <div className={style.inner}>

                    <Link className={style.logo}
                          to="/"
                          onClick={() => {
                              setBurgerMenu(false);
                              setBurgerOpen1(false);
                              setBurgerOpen2(false);
                          }}
                    >
                        {svgIcons.logo}
                    </Link>

                    <div className={style.links}>

                        <DropDownHeader buttonLabel="How to Trade"
                                        className={style.item}
                                        list={[
                                            {label: "The Challange", to: "/challange"},
                                            {label: "Trading Objectives", to: "/trading-objectives"},
                                            {label: "Scaling Plan", to: "/scaling-plan"},
                                        ]}
                        />

                        <DropDownHeader buttonLabel="Our Identity"
                                        className={style.item}
                                        list={[
                                            {label: "About", to: "/about"},
                                            {label: "Roadmap", to: "/roadmap"},
                                        ]}
                        />

                        {
                            headerLinks.map(({label, path}, key) => (
                                <Link key={key}
                                      to={path}
                                      className={style.link}
                                >
                                    {label}
                                </Link>
                            ))
                        }
                    </div>


                    <ButtonCustom label="Trading Space"
                                  primary={false}
                                  className={style.tradeBtn}
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
