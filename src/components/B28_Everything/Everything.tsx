import * as React from "react";
import style from "./Everything.module.scss";
import {FormikErrors, FormikHelpers, useFormik} from "formik";
import {svgIcons} from "../../assets/svgIcons";
import {IListItem, list} from "./list";
import {Item} from "./Item/Item";
import {topics} from "./topics";
import {TopicItem} from "./TopicItem/TopicItem";
import {HashLink} from "react-router-hash-link";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import clsx from "clsx";
import {useState} from "react";
import {getSelectedString} from "../../helpers/getSelectedString";

interface IValues {
    question: string
}

export const Everything = observer(() => {
    const {pageYOffset} = useStore();

    const initialValues: IValues = {
        question: "",
    }
    const validate = ({question}: IValues): FormikErrors<IValues> => {
        const errors = {} as FormikErrors<IValues>;
        if (!question) {
            errors.question = "Question is required";
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
        validate
    })

    const [searchList, setSearchList] = useState<null | IListItem[]>(null);
    const onSearch = (value: string) => {
        setSearchList(null);
        const list = [] as IListItem[];

        topics.forEach(el => {
            el.list.forEach(item => {
                const {question, answer} = item;
                const regexp = new RegExp(value, 'gi');
                const matchAllQuestion = question.matchAll(regexp);
                const matchAllArrQuestion = Array.from(matchAllQuestion); // теперь массив
                const matchAllAnswer = answer.matchAll(regexp);
                const matchAllArrAnswer = Array.from(matchAllAnswer); // теперь массив

                if (matchAllArrQuestion.length > 0 || matchAllArrAnswer.length > 0) {
                    list.push(item);
                }
            })
        })
        console.log(list)
        setSearchList(list);
    }
    const onCloseHandler = () => {
        formik.resetForm();
        setSearchList(null);
    }



    return (
        <div className={style.everything}>
            <div className={style.inner}>

                <h2 className={style.title}>Everything you need to know</h2>
                <p className={style.description}>
                    Can’t find what you are looking for? <span>Get in touch with us!</span>
                </p>

                <form className={style.search}
                      onSubmit={formik.handleSubmit}
                >
                    <input {...formik.getFieldProps("question")}
                           className={style.input}
                           placeholder="Search for a question"
                           onChange={(e) => {
                               formik.handleChange(e);
                               //console.log(e.target.value);
                               onSearch(e.target.value)
                           }}
                    />


                    {
                        formik.values.question.length > 0 && (
                            <button className={style.closeBtn}
                                    onClick={onCloseHandler}
                            >
                                {svgIcons.close}
                            </button>
                        )
                    }

                    <button type="submit"
                            className={style.submitBtn}
                    >
                        {svgIcons.search}
                    </button>


                    {/*{*/}
                    {/*    formik.errors.question && (*/}
                    {/*        <div className={style.error}>*/}
                    {/*            {formik.errors.question}*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}
                </form>

                {
                    formik.values.question ? (
                        <div className={style.searchResult}>
                            <p className={style.count}>{`${searchList?.length || 0} matches/`}</p>
                            {
                                searchList && (
                                    <div className={style.resultList}>
                                        {
                                            searchList.map(({question, answer}, key) => (
                                                <div key={key}
                                                     className={style.resultCard}
                                                >
                                                    <p className={style.question}>
                                                        {getSelectedString(question, formik.values.question)}
                                                    </p>
                                                    <p className={style.answer}>
                                                        {getSelectedString(answer, formik.values.question)}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )

                            }
                        </div>
                    ) : (
                        <div className={style.list}>
                            <div className={style.listMobile}>
                                {
                                    topics.map((item, key) => (
                                        <TopicItem key={key} {...item}/>
                                    ))
                                }
                            </div>

                            <div className={style.listDesktop}>

                                <div className={style.topicsWrapper}>
                                    <div className={clsx({
                                        [style.topics]: true,
                                        [style.topics_fixed]: pageYOffset > 340,
                                    })}>
                                        <p className={style.topics_label}>Topics</p>
                                        <div className={style.topics_list}>
                                            {
                                                topics.map(({topic}) => topic)
                                                    .map((topic, key) => (
                                                        <HashLink to={`/faq#${topic}`}
                                                                  smooth={true}
                                                                  className={style.link}
                                                        >
                                                            {topic}
                                                        </HashLink>
                                                    ))
                                            }
                                        </div>
                                    </div>
                                </div>


                                <div className={style.faqBlocks}>
                                    {
                                        topics.map(({topic, list}, key) => (
                                            <div key={key}
                                                 className={style.block}

                                            >
                                                <div className={style.anchor}
                                                     id={topic}
                                                />
                                                <p className={style.block_label}>{topic}</p>
                                                <div className={style.block_items}>
                                                    {
                                                        list.map((item, key) => (
                                                            <Item key={key} {...item}/>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>


                            </div>


                        </div>
                    )
                }


            </div>
        </div>
    )
})
