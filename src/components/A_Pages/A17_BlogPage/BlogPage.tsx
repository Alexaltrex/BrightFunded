import * as React from "react";
import style from "./BlogPage.module.scss";
import {Blog} from "../../B45_Blog/Blog";
import {News} from "../../B46_News/News";
import {YourChance} from "../../common/YourChance/YourChance";

const BlogPage = () => {
    return (
        <div className={style.blogPage} id="blog-top">
            <Blog/>
            <div className={style.card}>
                <News/>
            </div>
            <YourChance/>
        </div>
    )
}
export default BlogPage
