import * as React from 'react';
import style from './Panel.module.scss';
import { FC } from 'react';
import clsx from 'clsx';
import { Slider } from '@mui/material';
import { theme } from '../../../theme';
import { balances } from '../data';

const marks = [
  {
    value: 0,
    label: '$10k',
  },
  {
    value: 1,
    label: '$25k',
  },
  {
    value: 2,
    label: '$50k',
  },
  {
    value: 3,
    label: '$100k',
  },
  {
    value: 4,
    label: '$200k',
  },
];

interface IPanel {
  currency: number;
  setCurrency: (c: number) => void;
  balance: number | string | Array<number | string>;
  setBalance: (b: number | string | Array<number | string>) => void;
}

export const Panel: FC<IPanel> = ({
  currency,
  setCurrency,
  balance,
  setBalance,
}) => {
  const onChangeHandler = (event: Event, newValue: number | number[]) => {
    setBalance(newValue);
  };

  return (
    <div className={style.panel}>
      <div className={style.currencyWrapper}>
        <p className={style.label}>Currency</p>

        <div className={style.buttons}>
          {[{ label: '$USD' }, { label: '€EUR' }, { label: '£POUND' }].map(
            ({ label }, key) => (
              <button
                key={key}
                className={clsx({
                  [style.btn]: true,
                  [style.btn_selected]: key === currency,
                })}
                onClick={() => setCurrency(key)}
              >
                <p>{label}</p>
              </button>
            )
          )}
        </div>
      </div>

      <div className={style.balanceWrapper}>
        <p className={style.label}>Balance</p>

        <div className={style.sliderWrapper}>
          <Slider
            className={style.slider}
            value={typeof balance === 'number' ? balance : 0}
            onChange={onChangeHandler}
            marks={balances[currency].map((b, i) => ({ value: i, label: b }))}
            min={0}
            max={4}
            valueLabelDisplay='off'
            sx={{
              marginBottom: 0,
              '& .MuiSlider-markLabel': {
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '150%',
                textAlign: 'center',
                letterSpacing: '-0.01em',
                color: '#73747D',
                top: '40px',
                [theme.breakpoints.up('lg')]: {
                  fontSize: '14px',
                  top: '35px',
                },
              },
              '& .MuiSlider-markLabelActive': {
                color: '#FFF',
              },
              '& .MuiSlider-mark': {
                width: '2px',
                height: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.07)',
              },
              '& .MuiSlider-markActive': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', //0.02
              },

              '& .MuiSlider-thumb': {
                width: '18px',
                height: '18px',
                background:
                  'linear-gradient(34.49deg, #0781FE -12.58%, #00C7B4 102.84%)',
                border: '2px solid #11131F',
                borderRadius: '50%',
                '&:hover': {
                  boxShadow: 'none',
                },
                '&::before': {
                  display: 'none',
                },
              },
              '& .Mui-focusVisible': {
                boxShadow: 'none!important',
              },
              '& .MuiSlider-rail': {
                color: '#1C1F31',
                height: '8px',
                borderRadius: 0,
                position: 'relative',
                opacity: '1',
                '&::before': {
                  position: 'absolute',
                  content: `''`,
                  display: 'block',
                  height: '8px',
                  width: '25px',
                  background: '#04A3DB',
                  top: 0,
                  left: 0,
                  transform: 'translateX(-100%)',
                  borderRadius: '4px 0 0 4px',
                },
                '&::after': {
                  position: 'absolute',
                  content: `''`,
                  display: 'block',
                  height: '8px',
                  width: '25px',
                  background: '#1C1F31',
                  top: 0,
                  right: 0,
                  transform: 'translateX(100%)',
                  borderRadius: '0 4px 4px 0',
                },
              },
              '& .MuiSlider-track': {
                height: '8px',
                color: '#04A3DB',
                borderRadius: 0,
                border: 'none',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
