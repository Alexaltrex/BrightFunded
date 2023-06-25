import * as React from 'react';
import style from './CurrencyTable.module.scss';
import {useState} from 'react';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {dataMock} from './dataMock';
import clsx from 'clsx';
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {svgIcons} from '../../assets/svgIcons';

const platforms = ['Forex', 'Indices', 'Crypto', 'Commodities', 'Customs'];

const params = [
    // 'Bid Price',
    // 'Ask Price',
    'Spread',
    'Commissions',
    'Overall costs',
];

export const CurrencyTable = () => {
    const [platform, setPlatform] = useState(0);

    const onChangeHandler = (event: SelectChangeEvent) => {
        setPlatform(+event.target.value);
    };

    const [param, setParam] = useState(0);
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);

    return (
        <div className={style.currencyTable}>
            <div className={`container ${style.inner}`}>
                <div className={style.selectWrapper}>
                    <Select
                        value={String(platform)}
                        onChange={onChangeHandler}
                        className={style.select}
                        IconComponent={KeyboardArrowDownIcon}
                        fullWidth
                        sx={{
                            //width: "calc(100vw - 40px)",
                            background: 'rgba(2, 38, 76, 0.05)',
                            borderRadius: '10px',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '15px',
                            lineHeight: '22px',
                            letterSpacing: '-0.02em',
                            color: '#0E0B3D',
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                        }}
                        MenuProps={{
                            sx: {
                                '& .MuiPaper-root': {
                                    borderRadius: '12px',
                                },
                                '& .MuiList-root': {
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.12)',
                                },
                                '& .MuiMenuItem-root': {
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: '15px',
                                    lineHeight: '22px',
                                    letterSpacing: '-0.02em',
                                    color: ' #0E0B3D',
                                    padding: '10px 15px',
                                },
                                '& .MuiMenuItem-root.Mui-selected': {
                                    backgroundColor: '#FFF',
                                    color: '#9A99AF',
                                },
                            },
                        }}
                    >
                        {
                            [0, 1, 2, 3, 4].map((platform, key) => (
                                <MenuItem key={key} value={platform}>
                                    {platforms[platform]}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </div>

                <div className={style.tableMobile}>
                    <div className={style.row}>
                        <div className={style.currency}>Symbol</div>
                        <div className={style.value}/>
                    </div>
                    {Object.keys(dataMock).map((currency, key) => (
                        <div key={key} className={style.row}>
                            <div className={style.currency}>{currency}</div>
                            <div className={style.value}/>
                        </div>
                    ))}

                    <div className={style.swiperWrapper}>
                        <Swiper
                            slidesPerView={1}
                            onSwiper={(swiper) => setSwiper(swiper)}
                            onSlideChange={(swiper) => setParam(swiper.realIndex)}
                        >
                            {[
                                0, 1, 2,
                                //3, 4
                            ].map((key) => (
                                <SwiperSlide key={key} className={style.slide}>
                                    <div className={style.cell}>{params[param]}</div>
                                    {
                                        // @ts-ignore
                                        Object.keys(dataMock)
                                            // @ts-ignore
                                            .map(
                                                // @ts-ignore
                                                (currency) => dataMock[currency][params[key]][platform]
                                                // @ts-ignore
                                            )
                                            .map((el, index) => (
                                                <div key={index} className={style.cell}>
                                                    <p>
                                                        {el.value}
                                                        {el?.dir === 1 && <>{svgIcons.dir_up}</>}
                                                        {el?.dir === -1 && <>{svgIcons.dir_down}</>}
                                                    </p>
                                                </div>
                                            ))
                                    }
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className={style.navigation}>
                    {[
                        0, 1, 2,
                        //3, 4
                    ].map((key) => (
                        <div
                            key={key}
                            className={clsx({
                                [style.item]: true,
                                [style.item_selected]: param === key,
                            })}
                            onClick={() => swiper?.slideTo(key)}
                        />
                    ))}
                </div>

                <div className={style.tableDesktop}>
                    <div className={style.buttons}>
                        {[
                            0, 1, 2, 3, 4
                        ].map((key) => (
                            <button
                                key={key}
                                className={clsx({
                                    [style.btn]: true,
                                    [style.btn_selected]: key === platform,
                                })}
                                onClick={() => setPlatform(key)}
                            >
                                {platforms[key]}
                            </button>
                        ))}
                    </div>

                    <div className={style.rows}>
                        <div className={style.row}>
                            {['Symbol', ...params].map((prop, key) => (
                                <div key={key} className={style.cell}>
                                    {prop}
                                </div>
                            ))}
                        </div>

                        {Object.keys(dataMock).map((currency, key) => (
                            <div key={key} className={style.row}>
                                <div className={style.cell}>{currency}</div>
                                {
                                    // @ts-ignore
                                    params
                                        // @ts-ignore
                                        .map((param) => dataMock[currency][param][platform])
                                        .map((obj, index) => (
                                            <div key={index} className={style.cell}>
                                                <p>
                                                    {obj?.value}
                                                    {obj?.dir === 1 && <>{svgIcons.dir_up}</>}
                                                    {obj?.dir === -1 && <>{svgIcons.dir_down}</>}
                                                </p>
                                            </div>
                                        ))
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
