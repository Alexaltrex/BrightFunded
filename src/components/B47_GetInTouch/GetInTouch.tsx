import * as React from "react";
import style from "./GetInTouch.module.scss";
import {burgerSocialLinks} from "../A0_App/socialLinks";
import {svgIcons} from "../../assets/svgIcons";
import {FormikErrors, FormikHelpers, useFormik} from "formik";
import TextField from "@mui/material/TextField";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";

interface IValues {
    firstName: string
    lastName: string
    email: string
    accountNumber: string
    message: string
}

const initialValues: IValues = {
    firstName: "",
    lastName: "",
    email: "",
    accountNumber: "",
    message: "",
}

export const GetInTouch = observer(() => {
    const { setContactModal } = useStore();

    const validate = ({firstName, lastName, email, message}: IValues): FormikErrors<IValues> => {
        const errors = {} as FormikErrors<IValues>;
        if (!firstName) {
            errors.firstName = "First Name is required";
        }
        if (!lastName) {
            errors.lastName = "Last Name is required";
        }
        if (!email) {
            errors.email = "Email is required";
        }
        if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = "Not a valid email";
        }
        if (!message) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const onSubmit = async (
        values: IValues,
        formikHelpers: FormikHelpers<IValues>
    ) => {
        try {
            console.log(values);
            setContactModal(true);
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
    });

    return (
        <div className={style.getInTouch}>
            <div className={style.inner}>

                <div className={style.top}>

                    <div className={style.titleWrapper}>
                        <p className={style.pretext}>
                            contact us
                        </p>
                        <h2 className={style.title}>
                            Get In <span>Touch</span>
                        </h2>
                    </div>

                    <p className={style.text}>
                        We are here to answer any question you may have.
                    </p>

                    <div className={style.socialLinks}>
                        {
                            burgerSocialLinks.map(({icon, href}, key) => (
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
                    </div>

                    <div className={style.items}>
                        <div className={style.item}>
                            <div className={style.iconWrapper}>{svgIcons.clock}</div>
                            <div className={style.right}>
                                <p className={style.label}>Available Hours</p>
                                <p className={style.text}>24/7 for Emails, Live Chat and Discord</p>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.iconWrapper}>{svgIcons.label}</div>
                            <div className={style.right}>
                                <p className={style.label}>Address</p>
                                <p className={style.text}>Raadhuisstraat 22, 1016DE, Amsterdam, The Netherlands</p>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.iconWrapper}>{svgIcons.mail}</div>
                            <div className={style.right}>
                                <p className={style.label}>Email</p>
                                <a href="mailto:support@brightfunded.com"
                                   className={style.link}
                                >
                                    support@brightfunded.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <form className={style.card}
                      onSubmit={formik.handleSubmit}
                >

                    <p className={style.formTitle}>
                        Have Questions?
                    </p>


                    <div className={style.top}>

                        <TextField placeholder="First Name"
                                   size="small"
                                   {...formik.getFieldProps("firstName")}
                                   fullWidth
                                   sx={sxField}
                                   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                   helperText={formik.touched.firstName && formik.errors.firstName}
                        />

                        <TextField placeholder="Last Name"
                                   size="small"
                                   {...formik.getFieldProps("lastName")}
                                   fullWidth
                                   className={style.field}
                                   sx={sxField}
                                   error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                   helperText={formik.touched.lastName && formik.errors.lastName}
                        />

                    </div>

                    <TextField placeholder="Email"
                               size="small"
                               {...formik.getFieldProps("email")}
                               fullWidth
                               className={style.field}
                               sx={sxField}
                               error={formik.touched.email && Boolean(formik.errors.email)}
                               helperText={formik.touched.email && formik.errors.email}
                    />

                    <div className={style.field}>
                        <TextField placeholder="Account Number"
                                   size="small"
                                   {...formik.getFieldProps("accountNumber")}
                                   fullWidth
                                   sx={sxField}
                        />
                        <p className={style.optional}>Optional</p>
                    </div>

                    <TextField placeholder="Message"
                               size="small"
                               {...formik.getFieldProps("message")}
                               fullWidth
                               className={style.textarea}
                               multiline={true}
                               minRows={6}
                               sx={sxField}
                               error={formik.touched.message && Boolean(formik.errors.message)}
                               helperText={formik.touched.message && formik.errors.message}
                    />

                    <ButtonCustom label="Submit"
                                  icon={svgIcons.arrow_right}
                                  className={style.btn}
                        // @ts-ignore
                                  type="submit"
                    />
                </form>

            </div>
        </div>
    )
})

const sxField = {
    background: "rgba(15, 17, 28, 0.9)",
    borderRadius: "10px",
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#161A2B",
        borderRadius: "12px",
    },
    "& .MuiInputBase-root": {
        borderRadius: "12px",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "150%",
        letterSpacing: "-0.01em",
        color: "#9A99AF",
        "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#161A2B",
            }
        },
    },
    "& .MuiInputBase-input": {
        "&:-internal-autofill-selected": {
            backgroundColor: "rgba(15, 17, 28, 0.9)!important"
        },
    },
    "& .MuiFormHelperText-root": {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "11px",
        lineHeight: "150%",
        letterSpacing: "-0.01em",
        color: "#ff7676",
        position: "absolute",
        left: 0,
        bottom: "-16px",
    },
    "& .MuiInputBase-root.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#161A2B",
        }
    },
    "& .MuiInputBase-root.Mui-error": {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff7676",
        }
    }
}
