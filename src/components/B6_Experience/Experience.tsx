import * as React from "react";
import style from "./Experience.module.scss";
import meta4 from "../../assets/png/meta4.png";
import meta5 from "../../assets/png/meta5.png";

export const Experience = () => {
    return (
        <div className={style.experience}>
            <div className={style.inner}>

                <div className={style.titleWrapper}>
                    <p className={style.pretext}>
                        TRADING PLATFORMS
                    </p>
                    <h2 className={style.title}>
                        Experience Trading On The Most Convenient Platforms
                    </h2>
                </div>

                <p className={style.description}>
                    We power your Trading Journey with the most user-friendly trading platforms. Fueled by direct feeds
                    from prime liquidity providers, we offer raw spreads, minimal commission, and a demo environment as
                    authentic as the cosmos. Keep an eye on our updates as we reveal our trading platforms in the
                    upcoming weeks before our official launch.
                </p>

                {/*<div className={style.items}>*/}
                {/*    {*/}
                {/*        [*/}
                {/*            {*/}
                {/*                src: meta4,*/}
                {/*                href: "", //"https://www.metatrader4.com/ru",*/}
                {/*            },*/}
                {/*            {*/}
                {/*                src: meta5,*/}
                {/*                href: "", //"https://www.metatrader5.com/ru",*/}
                {/*            }*/}
                {/*        ].map(({src, href}, key) => (*/}
                {/*            <div key={key}*/}
                {/*               className={style.item}*/}
                {/*               // href={href}*/}
                {/*               // target="_blank"*/}
                {/*               // rel="nofollow noopener noreferrer"*/}
                {/*            >*/}
                {/*                <img src={src} alt=""/>*/}
                {/*            </div>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</div>*/}

            </div>
        </div>
    )
}
