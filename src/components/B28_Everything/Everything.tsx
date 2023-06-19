import * as React from 'react';
import style from './Everything.module.scss';
import {FormikErrors, FormikHelpers, useFormik} from 'formik';
import {svgIcons} from '../../assets/svgIcons';
import {Item} from './Item/Item';
import {IListItem, topics} from './topics';
import {TopicItem} from './TopicItem/TopicItem';
import {HashLink} from 'react-router-hash-link';
import clsx from 'clsx';
import {useState} from 'react';
import {getSelectedString} from '../../helpers/getSelectedString';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface IValues {
    question: string;
}

export const Everything = () => {
    const initialValues: IValues = {
        question: '',
    };

    const validate = ({question}: IValues): FormikErrors<IValues> => {
        const errors = {} as FormikErrors<IValues>;
        if (!question) {
            errors.question = 'Question is required';
        }
        return errors;
    };

    const onSubmit = async (
        values: IValues,
        formikHelpers: FormikHelpers<IValues>
    ) => {
        try {
            console.log(values);
        } catch (e: any) {
            console.log(e.message);
        } finally {
            formikHelpers.resetForm();
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    const [searchList, setSearchList] = useState<null | IListItem[]>(null);
    const onSearch = (value: string) => {
        setSearchList(null);
        const list = [] as IListItem[];

        topics.forEach((el) => {
            el.list.forEach((item) => {
                const {
                    question,
                    answer
                } = item;
                const regexp = new RegExp(value, 'gi');
                const matchAllQuestion = question.matchAll(regexp);
                const matchAllArrQuestion = Array.from(matchAllQuestion); // теперь массив
                // const matchAllAnswer = answer.matchAll(regexp);
                // const matchAllArrAnswer = Array.from(matchAllAnswer); // теперь массив

                if (
                    matchAllArrQuestion.length > 0
                    //|| matchAllArrAnswer.length > 0
                ) {
                    list.push(item);
                }
            });
        });
        //console.log(list);
        setSearchList(list);
    };
    const onCloseHandler = () => {
        formik.resetForm();
        setSearchList(null);
    };

    const componentRef = React.useRef<HTMLDivElement>(null!);
    const triggerRef = React.useRef<HTMLDivElement>(null!);
    const topicsRef = React.useRef<HTMLDivElement>(null!);

    React.useLayoutEffect(() => {
        // if (triggerRef && triggerRef.current) {
            const topicsHeight = topicsRef.current.offsetHeight;

            let ctx = gsap.context(() => {
                gsap.to(topicsRef.current, {
                    ease: 'none',
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        pin: topicsRef.current,
                        start: () => '-=' + 50,
                        end: `bottom +=${topicsHeight + 50}`,
                    },
                });
            }, componentRef);
            return () => ctx.revert();
        // }
    });

    return (
        <div ref={componentRef} className={style.everything}>
            <div className={style.inner}>
                <h2 className={style.title}>Everything You Need To Know</h2>
                <p className={style.description}>
                    Can’t find what you are looking for?{' '}
                    <span>Get in touch with us!</span>
                </p>

                <form className={style.search} onSubmit={formik.handleSubmit}>
                    <input
                        {...formik.getFieldProps('question')}
                        className={style.input}
                        placeholder='Search for a question'
                        onChange={(e) => {
                            formik.handleChange(e);
                            //console.log(e.target.value);
                            onSearch(e.target.value);
                        }}
                    />

                    {formik.values.question.length > 0 && (
                        <button className={style.closeBtn} onClick={onCloseHandler}>
                            {svgIcons.close}
                        </button>
                    )}

                    <button type='submit' className={style.submitBtn}>
                        {svgIcons.search}
                    </button>
                </form>

                {/*<div>*/}
                    {
                        formik.values.question ? (
                            <div className={style.searchResult}>
                                <p className={style.count}>
                                    {`${searchList?.length || 0} matches/`}
                                </p>
                                {
                                    searchList && (
                                        <div className={style.resultList}>
                                            {
                                                searchList.map(({question, answer}, key) => (
                                                    <div key={key} className={style.resultCard}>
                                                        <p className={style.question}>
                                                            {getSelectedString(question, formik.values.question)}
                                                        </p>
                                                        <div className={style.answer}>
                                                            {answer}
                                                            {/*{getSelectedString(answer, formik.values.question)}*/}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )}
                            </div>
                        ) : (
                            <div ref={triggerRef} className={style.list}>
                                <div className={style.listMobile}>
                                    {topics.map((item, key) => (
                                        <TopicItem key={key} {...item} />
                                    ))}
                                </div>

                                <div className={style.listDesktop}>
                                    <div ref={topicsRef} className={style.topicsWrapper}>
                                        <div
                                            className={clsx({
                                                [style.topics]: true,
                                                // [style.topics_fixed]: pageYOffset > 340,
                                            })}
                                        >
                                            <p className={style.topics_label}>Topics</p>
                                            <div className={style.topics_list}>
                                                {topics
                                                    .map(({topic}) => topic)
                                                    .map((topic, key) => (
                                                        <HashLink
                                                            to={`/faq#${topic}`}
                                                            smooth={true}
                                                            className={style.link}
                                                        >
                                                            {topic}
                                                        </HashLink>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={style.faqBlocks}>
                                        {topics.map(({topic, list}, key) => (
                                            <div key={key} className={style.block}>
                                                <div className={style.anchor} id={topic}/>
                                                <p className={style.block_label}>{topic}</p>
                                                <div className={style.block_items}>
                                                    {list.map((item, key) => (
                                                        <Item key={key} {...item} />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                {/*</div>*/}

            </div>
        </div>
    );
}
