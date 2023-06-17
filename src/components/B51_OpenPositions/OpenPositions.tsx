import * as React from "react";
import style from "./OpenPositions.module.scss";
import {useState} from "react";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import {categories, positions} from "./positions";
import clsx from "clsx";
import {Card} from "./Card/Card";


export const OpenPositions = () => {
    const [category, setCategory] = useState(0);
    const onChangeHandler = (event: SelectChangeEvent) => {
        setCategory(+event.target.value);
    };

    return (
        <div className={style.openPositions}>
            <div className={style.inner}>

                <div className={style.top}>
                    <p className={style.title}>
                        Open Positions
                    </p>
                    <div className={style.right}>
                        <p className={style.text}>
                            At <span>BrightFunded</span>, your potential is waiting to be discovered.
                        </p>
                        <p className={style.description}>
                            Check out our current job openings and step into an environment where you are encouraged to
                            push boundaries and make an impact.
                        </p>
                    </div>

                </div>

                <div className={style.selectCategory}>

                    <div className={style.selectCategoryMobile}>
                        <p className={style.label}>Category</p>
                        <Select value={String(category)}
                                onChange={onChangeHandler}
                                className={style.select}
                                IconComponent={KeyboardArrowDownIcon}
                                fullWidth
                                sx={sxSelect}
                                MenuProps={{sx: sxMenu}}
                        >
                            {
                                categories.map(({label}, key) => (
                                    <MenuItem key={key} value={String(key)}>
                                        {label}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </div>

                    <div className={style.selectCategoryDesktop}>
                        {
                            categories.map(({label}, key) => (
                                <button key={key}
                                        className={clsx({
                                            [style.tab]: true,
                                            [style.tab_selected]: key === category,
                                        })}
                                        onClick={() => setCategory(key)}
                                >
                                    <p>{label}</p>
                                </button>
                            ))
                        }
                    </div>

                </div>

                <div className={style.cards}>
                    <div className={style.inner}>
                        {
                            [...positions]
                                .filter(position => category === 0 ? true : position.category === category)
                                .map((position, key) => (
                                        <Card key={key} {...position}/>
                                    )
                                )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

const sxSelect = {
    //width: "calc(100vw - 40px)",
    background: "rgba(2, 38, 76, 0.05)",
    borderRadius: "10px",
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "22px",
    letterSpacing: "-0.02em",
    color: "#0E0B3D",
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
}

const sxMenu = {
    "& .MuiPaper-root": {
        borderRadius: "12px",
    },
    "& .MuiList-root": {
        paddingTop: 0,
        paddingBottom: 0,
        boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.12)"
    },
    "& .MuiMenuItem-root": {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "15px",
        lineHeight: "22px",
        letterSpacing: "-0.02em",
        color: " #0E0B3D",
        padding: "10px 15px",
    },
    "& .MuiMenuItem-root.Mui-selected": {
        backgroundColor: "#FFF",
        color: "#9A99AF",
    }
}
