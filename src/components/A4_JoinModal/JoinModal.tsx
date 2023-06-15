import Modal from "@mui/material/Modal"
import {observer} from "mobx-react-lite";
import style from "./JoinModal.module.scss";
import {useStore} from "../../store/useStore";
import * as React from "react";
import {svgIcons} from "../../assets/svgIcons";
import {FormikErrors, FormikHelpers, useFormik} from "formik";
import TextField from "@mui/material/TextField";
import {ButtonCustom} from "../common/ButtonCustom/ButtonCustom";

interface IValues {
    name: string
    surname: string
    email: string
}

const initialValues: IValues = {
    name: "",
    surname: "",
    email: "",
}

export const JoinModal = observer(() => {
    const { joinModal, setJoinModal, setWelcomeModal } = useStore();

    const validate = ({name, surname, email}: IValues): FormikErrors<IValues> => {
        const errors = {} as FormikErrors<IValues>;
        if (!name) {
            errors.name = "First Name is required";
        }
        if (!surname) {
            errors.surname = "Last Name is required";
        }
        if (!email) {
            errors.email = "Email is required";
        }
        if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = "Not a valid email";
        }
        return errors;
    };

    const onSubmit = async (
        values: IValues,
        formikHelpers: FormikHelpers<IValues>
    ) => {
        try {
            console.log(values);
            setJoinModal(false);
            setWelcomeModal(true);
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

    const onClose = () => {
        setJoinModal(false);
        formik.resetForm();
    }

    return (
        <Modal
            open={joinModal}
            onClose={onClose}
            className={style.joinModal}
            sx={{
                "& .MuiBackdrop-root": {
                    backgroundColor: "rgba(11, 12, 18, 0.5)",
                },
            }}
        >
            <div className={style.card}>

                <button className={style.closeBtn}
                        onClick={onClose}
                >
                    {svgIcons.close_black}
                </button>

                <p className={style.title}>
                    Join The New Era
                </p>

                <p className={style.description}>
                    Get a head start on your journey. Fill in the details below, secure your <span>early access</span>,
                    and have a chance to <span>win rare trading perks</span>. Join us on Discord for more information.
                </p>

                <form onSubmit={formik.handleSubmit}
                      className={style.form}
                >
                    <div className={style.top}>

                        <TextField placeholder="First Name"
                                   size="small"
                                   {...formik.getFieldProps("name")}
                                   fullWidth
                                   className={style.field}
                                   sx={sxField}
                                   error={formik.touched.name && Boolean(formik.errors.name)}
                                   helperText={formik.touched.name && formik.errors.name}
                        />

                        <TextField placeholder="Last Name"
                                   size="small"
                                   {...formik.getFieldProps("surname")}
                                   fullWidth
                                   className={style.field}
                                   sx={sxField}
                                   error={formik.touched.surname && Boolean(formik.errors.surname)}
                                   helperText={formik.touched.surname && formik.errors.surname}
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

                    <ButtonCustom label="Join Waitlist"
                                  icon={svgIcons.arrow_right}
                                  className={style.joinBtn}
                        // @ts-ignore
                                  type="submit"
                    />
                </form>

                <p className={style.text}>Don’t worry, we hate spam just as much as you do.</p>

            </div>
        </Modal>
    )
})

const sxField = {
    background: "rgba(2, 38, 76, 0.05)",
    borderRadius: "10px",
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#E5EAEF",
        borderRadius: "10px",
    },
    "& .MuiInputBase-root": {
        borderRadius: "10px",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "150%",
        letterSpacing: "-0.01em",
        color: "#1C1F31",
        "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#D3D2DE",
            }
        }
    },
    "& .MuiFormHelperText-root": {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "150%",
        letterSpacing: "-0.01em",
        //color: "#1C1F31",
        position: "absolute",
        left: 0,
        bottom: "-18px",
    },
    "& .MuiInputBase-root.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D3D2DE",
        }
    }
}
