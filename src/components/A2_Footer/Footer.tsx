import * as React from "react";
import style from "./Footer.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {Link} from "react-router-dom";
import {socialLinks} from "../A0_App/socialLinks";

const links = [
    {label: "Privacy Policy", to: "/policy"},
    {label: "Terms & Conditions", to: "/terms"},
    {label: "Affiliate Program", to: "/program"},
    {label: "FAQ", to: "/faq"},
    {label: "Contact", to: "/contact"},
    {label: "Careers", to: "/careers"},
    {label: "Blog", to: "/blog"},
]


export const Footer = () => {

    return (
        <footer className={style.footer}>

            <div className={style.top}>

                <div className={style.inner}>

                    <Link className={style.logo}
                          to="/"
                    >
                        {svgIcons.logo}
                    </Link>

                    <nav className={style.linksMobile}>
                        <div className={style.column}>
                            {
                                [links[0], links[1], links[2], links[3]].map(({label, to}, key) => (
                                    <Link key={key}
                                          to={to}
                                          className={style.link}
                                    >
                                        {label}
                                    </Link>
                                ))
                            }
                        </div>
                        <div className={style.column}>
                            {
                                [links[4], links[5], links[6]].map(({label, to}, key) => (
                                    <Link key={key}
                                          to={to}
                                          className={style.link}
                                    >
                                        {label}
                                    </Link>
                                ))
                            }
                        </div>
                    </nav>

                    <nav className={style.linksDesktop}>
                        {
                            links.map(({label, to}, key) => (
                                <Link key={key}
                                      to={to}
                                      className={style.link}
                                >
                                    {label}
                                </Link>
                            ))
                        }
                    </nav>

                </div>

            </div>

            <div className={style.bottom}>

                <div className={style.inner}>

                    <nav className={style.socialLinks}>
                        {
                            socialLinks.map(({icon, href}, key) => (
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
                    </nav>

                    <p className={style.text}>© 2023 BrightFunded</p>

                </div>

            </div>

        </footer>
    )
}
