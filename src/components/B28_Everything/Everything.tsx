import * as React from "react";
import style from "./Everything.module.scss";
import {FormikErrors, FormikHelpers, useFormik} from "formik";
import {svgIcons} from "../../assets/svgIcons";
import {list} from "./list";
import {Item} from "./Item/Item";

interface IValues {
    question: string
}

export const Everything = () => {
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
                    />
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

                <div className={style.list}>
                    {
                        list.map((item, key) => <Item {...item} key={key}/>)
                    }
                </div>

            </div>
        </div>
    )
}
