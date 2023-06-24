import * as React from 'react';
import style from './TableCustom.module.scss';
import { FC, useState } from 'react';
import { headers } from '../data';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import clsx from 'clsx';
import { data } from '../data';
import { svgIcons } from '../../../assets/svgIcons';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { tooltips } from './tooltips';
import Fade from '@mui/material/Fade';
import { TooltipModal } from './TooltipModal/TooltipModal';

//========= TOOLTIP CUSTOM =========//
const TooltipCustom = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {},
}));

//========= TABLE CUSTOM =========//
interface ITableCustom {
  currency: number;
  balance: number;
}

export const TableCustom: FC<ITableCustom> = ({ currency, balance }) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [step, setStep] = useState(0);

  const [showTooltipModal, setShowTooltipModal] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState(0);
  const onTooltipClick = (index: number) => {
    setShowTooltipModal(true);
    setTooltipIndex(index);
  };

  return (
    <>
      <TooltipModal
        open={showTooltipModal}
        onClose={() => setShowTooltipModal(false)}
        tooltipIndex={tooltipIndex}
      />

      <div className={style.tableCustomMobile}>
        <div className={style.table}>
          <div className={clsx(style.row, style.row_header)}>
            <div className={style.prop} />
            <div className={style.value} />
          </div>
          {Object.keys(data).map((prop, key) => (
            <div key={key} className={style.row}>
              <div className={style.propCell}>
                <p className={style.prop}>{prop}</p>
                <button
                  className={style.popupBtn}
                  onClick={() => onTooltipClick(key)}
                >
                  {svgIcons.info}
                </button>
              </div>
              <div className={style.value} />
            </div>
          ))}

          <div className={style.sliderWrapper}>
            <Swiper
              slidesPerView={1}
              onSwiper={(swiper) => setSwiper(swiper)}
              onSlideChange={(swiper) => setStep(swiper.realIndex)}
              spaceBetween={0}
            >
              {[0, 1, 2].map((step) => (
                <SwiperSlide key={step}>
                  <div className={clsx(style.row, style.row_header)}>
                    <p>{`Step ${step + 1}`}</p>
                    <p>{headers[step]}</p>
                  </div>
                  {Object.keys(data)
                    // @ts-ignore
                    .map((prop) => data[prop][currency][balance][step])
                    .map((value, key) => (
                      <div key={key} className={style.row}>
                        <p>{value}</p>
                        {step === 0 && key === 0 && (
                          <p
                            className={style.tooltipText}
                            onClick={() => onTooltipClick(7)}
                          >
                            +14 Days
                          </p>
                        )}
                      </div>
                    ))}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={style.navigation}>
          {[0, 1, 2].map((key) => (
            <div
              key={key}
              className={clsx({
                [style.item]: true,
                [style.item_selected]: key === step,
              })}
              onClick={() => swiper?.slideTo(key)}
            />
          ))}
        </div>
      </div>

      <div className={style.tableCustomDesktop}>
        <div className={style.header}>
          <div />
          {headers.map((header, key) => (
            <div key={key}>
              <p>{`Step ${key + 1}`}</p>
              <p>{header}</p>
            </div>
          ))}
        </div>

        {Object.keys(data).map((prop, key) => (
          <div key={key} className={style.row}>
            <div>
              {prop}
              <TooltipCustom
                title={
                  <div className={style.tooltipContent}>{tooltips[key]}</div>
                }
                arrow
                sx={{
                  '& .MuiTooltip-tooltip': {
                    backgroundColor: 'transparent',
                    padding: 0,
                  },
                }}
                placement='top'
                TransitionComponent={Fade}
              >
                {svgIcons.info}
              </TooltipCustom>
            </div>

            {/*@ts-ignore*/}
            <div className={clsx(key === 0 && step === 0 && style.withTooltip)}>
              {/*@ts-ignore*/}
              <p>{data[prop][currency][balance][0]}</p>
              {key === 0 && step === 0 && (
                <TooltipCustom
                  title={
                    <div className={style.tooltipContent}>{tooltips[7]}</div>
                  }
                  arrow
                  sx={{
                    '& .MuiTooltip-tooltip': {
                      backgroundColor: 'transparent',
                      padding: 0,
                    },
                  }}
                  placement='top'
                  TransitionComponent={Fade}
                >
                  <p className={style.tooltipText}>+14 Days</p>
                </TooltipCustom>
              )}
            </div>
            {/*@ts-ignore*/}
            <div>{data[prop][currency][balance][1]}</div>
            {/*@ts-ignore*/}
            <div>{data[prop][currency][balance][2]}</div>
          </div>
        ))}
      </div>
    </>
  );
};
