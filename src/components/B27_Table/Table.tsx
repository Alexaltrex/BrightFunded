import * as React from 'react';
import style from './Table.module.scss';
import { data } from './data';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import { div } from 'three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements';
import clsx from 'clsx';

export const Table = () => {
  const [param, setParam] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={style.table}>
      <div className={`container ${style.inner}`}>
        <div className={style.tableMobile}>
          <div className={style.tableWrapper}>
            <div className={style.header}>
              <div className={style.propCell}>Elapsed Time</div>
              <div className={style.valueCell} />
            </div>
            {data['Elapsed Time'].map((prop, key) => (
              <div className={style.row} key={key}>
                <div className={style.propCell}>{prop}</div>
                <div className={style.valueCell} />
              </div>
            ))}
            <div className={style.swiperWrapper}>
              <Swiper
                slidesPerView={1}
                onSwiper={(swiper) => setSwiper(swiper)}
                onSlideChange={(swiper) => setParam(swiper.realIndex)}
              >
                {[0, 1, 2]
                  .map((index) => [
                    Object.keys(data)[index + 1],
                    ...Object.values(data)[index + 1],
                  ])
                  .map((value, key) => (
                    <SwiperSlide key={key} className={style.slide}>
                      {value.map((v, i) => (
                        <div className={style.cell} key={i}>
                          {v}
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
                  [style.item_selected]: param === key,
                })}
                onClick={() => swiper?.slideTo(key)}
              />
            ))}
          </div>
        </div>

        <div className={style.tableDesktop}>
          <div className={style.header}>
            {Object.keys(data).map((value, key) => (
              <div className={style.headerCell} key={key}>
                {value}
              </div>
            ))}
          </div>
          <div className={style.body}>
            {Array.from({ length: 7 }, (_, k) => k)
              // @ts-ignore
              .map((index) =>
                // @ts-ignore
                Object.keys(data).map((value) => data[value][index])
              )
              .map((row, key) => (
                <div className={style.row} key={key}>
                  {row.map((v, j) => (
                    <div className={style.cell} key={j}>
                      {v}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>

        <p className={style.table_text}>
          The table shows the scaling process based on the maximum allocation of
          $400,000.
        </p>
      </div>
    </div>
  );
};
