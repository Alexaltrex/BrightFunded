import * as React from "react";
import {useParams} from "react-router-dom";
import style from "./ArticlePage.module.scss";
import {ICard, news, tabs} from "../../B46_News/const";
import {Card} from "../../B46_News/Card/Card";
import {YourChance} from "../../common/YourChance/YourChance";

export const ArticlePage = () => {
    const {blogId} = useParams<{ blogId: string }>();

    const card = (news.find(el => el.id === Number(blogId as string))) as ICard;
    const {id, tab, title, date, fullImg, similar} = card;

    const similarCards = similar.map(id => (news.find(el => el.id === id) as ICard));

    return (
        <div className={style.articlePage}>

            <div className={style.card}>

                <div className={style.header}>
                    <div className={style.inner}>
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
                </div>

                <div className={style.imgWrapper}>
                    <div className={style.inner}>
                        <img src={fullImg} alt=""/>
                    </div>
                </div>

                <div className={style.body}>
                    <div className={style.inner}>

                        <div className={style.block}>
                            <p className={style.title}>
                                Introduction
                            </p>
                            <div className={style.text}>
                                <p>
                                    In the eyes of a student, a mentor is someone who leads the conversation, can answer
                                    all the questions, and provides in-depth training to prepare the student for any
                                    upcoming challenges in the chosen subject. A mentor can sometimes be a teacher but
                                    with a more in-depth and personal approach. In reality, not many teachers have
                                    adequate experience in the chosen field but have a solid theoretical background in
                                    the subject, and this is the reason why many people choose to have a mentor as a
                                    mentor is mostly perceived as someone who has succeeded in a particular field and
                                    can provide not only theoretical knowledge but also experience-based knowledge that
                                    can benefit the student in many ways. For example, instead of making the same
                                    mistakes as the mentor was making at the beginning of their journey, the student may
                                    learn from those mistakes, thus advancing their skills even beyond the mentor.
                                </p>
                            </div>
                        </div>

                        <div className={style.block}>
                            <p className={style.title}>
                                Why do novice traders search for mentors?
                            </p>
                            <div className={style.text}>
                                <p>
                                    There are many reasons why traders search for mentors. One of the main reasons is
                                    the desire to get better and to improve within the shortest amount of time and
                                    effort. However, getting a mentor could be a double-edged sword. If you get a
                                    quality mentor, your skills and knowledge will undoubtedly be enhanced. On the other
                                    hand, if you choose an unqualified one, not only are you wasting your hard-earned
                                    money but also your precious time. The good news is that it is possible to find a
                                    quality mentor, and getting one at every stage of your trading journey is necessary.
                                    Even the top-performing traders require mentorship from time to time, for example, a
                                    performance coach to help them with their psychology or mentoring from senior
                                    economists/analysts to discuss market fundamentals.
                                </p>
                                <br/>
                                <p>
                                    Just like in sports, high-performing athletes need mentors to keep their mental
                                    health, psychology, and overall performance in check. These mentors are also
                                    considered coaches as there is little difference between those two. Therefore, it is
                                    needless to say that not only novice traders seek quality mentors, but also
                                    professionals need mentors. Some may argue that getting a high-quality mentor may be
                                    easier for professionals as they have the contacts and resources to obtain one.
                                    However, it is far from the truth that novice traders cannot get a high-quality
                                    mentor at a reasonable cost.
                                </p>
                            </div>
                        </div>

                        <div className={style.block}>
                            <p className={style.title}>
                                How to recognize a high-quality mentor?
                            </p>
                            <div className={style.text}>
                                <p>
                                    In the current era of the world wide web, there are numerous available mentorship
                                    programs, trading coaches, trading courses, and so on. Some like to show off their
                                    achievements in terms of materialistic things such as supercars, flashy lifestyles,
                                    and pictures of cash. Although sometimes the reality can be that the materialistic
                                    things are not even the results of their trading as they tend to claim. It is
                                    important to stay vigilant and know that when something is too good to be true, most
                                    of the time it is not. There is nothing wrong with showing off, however, when there
                                    is a service related to it, it is probably a marketing stunt to make you believe
                                    that you will also achieve the same by joining the program.
                                </p>
                            </div>
                        </div>

                        <div className={style.listWrapper}>
                            <p className={style.label}>Here users can:</p>
                            <div className={style.list}>

                                {
                                    [
                                        "Invest",
                                        "Earn",
                                        "Govern",
                                        "Own the Metaverse",
                                    ].map((el, key) => (
                                        <p className={style.item} key={key}>{el}</p>
                                    ))
                                }
                            </div>
                        </div>


                    </div>
                </div>

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

            </div>

            <YourChance/>

        </div>
    )
}
