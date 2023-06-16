import * as React from "react";
import style from "./TestPage.module.scss";
import {useEffect, useRef} from "react";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const TestPage = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef<HTMLDivElement>(null!);

    // useEffect(() => {
    //     const element = ref.current;
    //     gsap.fromTo(
    //         "#sticky",
    //         {
    //             left: 0,
    //         },
    //         {
    //             left: "auto",
    //             right: 0,
    //             duration: 2,
    //             ease: "none.none",
    //             // scrollTrigger: {
    //             //     trigger: "#sticky",
    //             //     markers: true,
    //             //     start: "top 200px",
    //             //     end: "100px top",
    //             //     scrub: true
    //             // }
    //         }
    //     )
    // }, [])

    return (
        <div className={style.testPage}>
            <div className={style.inner}>
                <div className={style.left}>
                    <div className={style.sticky}
                         ref={ref}
                         id="sticky"
                    >

                    </div>
                    <div className={style.second}>

                    </div>
                </div>
                {/*<div className={style.right}>*/}

                {/*</div>*/}
            </div>
        </div>
    )
}
