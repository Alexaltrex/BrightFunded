import * as React from "react";
import style from "./Blog.module.scss";

export const Blog = () => {
    return (
        <div className={style.blog}>
            <div className={style.inner}>

                <div className={style.titleWrapper}>
                    <p className={style.pretext}>
                        Blog
                    </p>
                    <h2 className={style.title}>
                        News & Updates
                    </h2>
                </div>

                <p className={style.subtitle}>
                    BrightFunded updates and news at your fingertips.
                </p>

            </div>
        </div>
    )
}
