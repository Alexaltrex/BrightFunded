import * as React from "react";
import {useParams} from "react-router-dom";
import style from "./ArticlePage.module.scss";
import {ICard, news, tabs} from "../../B46_News/newsContent";
import {Card} from "../../B46_News/Card/Card";
import {YourChance} from "../../common/YourChance/YourChance";

const ArticlePage = () => {
    const {blogId} = useParams<{ blogId: string }>();

    const card = (news.find(el => el.id === Number(blogId as string))) as ICard;
    const {id, tab, title, date, similar, fullText} = card;

    const similarCards = similar.map(id => (news.find(el => el.id === id) as ICard));

    return (
        <div className={style.articlePage}>

            <div className={style.card}>

                <div className={style.top}>
                    <div className={style.inner}>

                        <div className={style.header}>
                            <p className={style.ticket}
                               style={{
                                   color: tabs[tab].color,
                                   background: tabs[tab].background,
                               }}
                            >
                                {tabs[tab].label}
                            </p>
                            <p className={style.title}>{title}</p>
                            <p className={style.date}>{date}</p>
                        </div>

                        <div className={style.content}>
                            {fullText}
                        </div>

                    </div>
                </div>

                {
                    similarCards.length > 0 && (
                        <div className={style.similar}>
                            <div className={style.inner}>
                                <p className={style.label}>Similar to what you read</p>

                                <div className={style.cards}>
                                    <div className={style.cardsInner}>
                                        {
                                            similarCards.map((item, key) => <Card key={key} {...item}/>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                }

            </div>

            <YourChance/>

        </div>
    )
}
export default ArticlePage
