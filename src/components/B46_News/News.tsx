import * as React from 'react';
import style from './News.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { Card } from './Card/Card';
import { ButtonCustom } from '../common/ButtonCustom/ButtonCustom';
import { svgIcons } from '../../assets/svgIcons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { news, tabs } from './newsContent';

export const News = () => {
  const [tab, setTab] = useState(0);

  const onChangeHandler = (event: SelectChangeEvent) => {
    setTab(+event.target.value);
  };

  return (
    <div className={style.news}>
      <div className={`container ${style.inner}`}>
        <div className={style.tabsMobile}>
          <p className={style.label}>Category</p>
          <Select
            value={String(tab)}
            onChange={onChangeHandler}
            className={style.select}
            IconComponent={KeyboardArrowDownIcon}
            fullWidth
            sx={sxSelect}
            MenuProps={{ sx: sxMenu }}
          >
            {tabs.map(({ label }, key) => (
              <MenuItem key={key} value={String(key)}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className={style.tabsDesktop}>
          {tabs.map(({ label }, key) => (
            <button
              key={key}
              className={clsx({
                [style.tab]: true,
                [style.tab_selected]: key === tab,
              })}
              onClick={() => setTab(key)}
            >
              <p>{label}</p>
            </button>
          ))}
        </div>

        <div className={style.cards}>
          <div className={style.inner}>
            {[...news]
              .filter((item) => (tab === 0 ? true : item.tab === tab))
              .map((item, key) => (
                <Card key={key} {...item} />
              ))}
          </div>
        </div>

        {/*<ButtonCustom label="Load more"*/}
        {/*              primary={false}*/}
        {/*              icon={svgIcons.arrow_down_blue}*/}
        {/*              className={style.btn}*/}
        {/*/>*/}
      </div>
    </div>
  );
};

const sxSelect = {
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
};

const sxMenu = {
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
};
