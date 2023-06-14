import * as React from 'react';
import style from './Roadmap.module.scss';
import { phases } from './phases';
import clsx from 'clsx';
import { svgIcons } from '../../assets/svgIcons';
import planet_left from '../../assets/png/roadmap_planet_left.png';
import planet_right from '../../assets/png/roadmap_planet_right.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from '@mui/material';

gsap.registerPlugin(ScrollTrigger);

export const Roadmap = () => {
  const isMobile = !useMediaQuery('(min-width:1440px)');
  const isMobile480 = useMediaQuery('(max-width:480px)');
  const activePhase = 1;
  const [inProgress, setInProgress]: any = React.useState(-1);

  const componentRef = React.useRef<HTMLDivElement>(null!);
  const triggerRef = React.useRef<HTMLDivElement>(null!);
  const progressLineRef = React.useRef<HTMLDivElement>(null!);

  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(progressLineRef.current, {
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: false,
          once: true,
          toggleActions: 'play none none none',
          start: () => ('-=' + isMobile ? (isMobile480 ? 20 : 0) : 312),
          end: 'bottom 50%+=100px',

          onUpdate: (stats) => {
            if (
              stats.progress <= (isMobile ? (isMobile480 ? 0.15 : 0.17) : 0.185)
            ) {
              progressLineRef.current.style.maxHeight = `${(
                stats.progress * 100
              ).toFixed(3)}%`;
            } else {
              progressLineRef.current.style.maxHeight = `${
                (isMobile ? (isMobile480 ? 0.15 : 0.17) : 0.185) * 100
              }%`;
            }

            if (
              stats.progress >= 0.01 &&
              stats.progress < (isMobile ? (isMobile480 ? 0.15 : 0.17) : 0.185)
            ) {
              setInProgress(0);
            } else {
              setInProgress(-1);
            }
            if (
              stats.progress >=
              (isMobile ? (isMobile480 ? 0.148 : 0.168) : 0.18)
            ) {
              setInProgress(1);
            }
          },
        },
      });
    }, componentRef);
    return () => ctx.revert();
  });

  return (
    <div ref={componentRef} className={style.roadmap}>
      <img src={planet_left} alt='' className={style.planet_left} />
      <img src={planet_right} alt='' className={style.planet_right} />

      <div className={style.inner}>
        <h2 className={style.title}>Roadmap</h2>

        <p className={style.description}>
          As the world's first <span>Web 3.0</span> based prop trading firm, our
          mission is to revolutionize the trading space. This roadmap offers a
          glimpse into our plans and priorities, showcasing our commitment to
          innovation and transparency. Explore our upcoming milestones,
          features, and improvements below, and join us on this exciting journey
          as we shape the future of trading together.
        </p>

        <div ref={triggerRef} className={style.cards}>
          <div className={style.cardsLine}>
            <div
              ref={progressLineRef}
              className={style.cardsLine__progress}
            ></div>
          </div>
          {phases.map(({ text, title }, key) => (
            <div className={style.wrapper} key={key}>
              <div
                className={clsx({
                  [style.iconWrapper]: true,
                  [style.iconWrapper_ended]: key < activePhase,
                  [style.iconWrapper_active]: key === activePhase,
                  [style.iconWrapper_inprogress]: key <= inProgress,
                })}
              >
                {key < activePhase && <>{svgIcons.phase_ended}</>}
                {key === activePhase && <>{svgIcons.phase_active}</>}
              </div>

              <div
                className={clsx({
                  [style.card]: true,
                  [style.card_ended]: key < activePhase,
                  [style.card_active]: key === activePhase,
                })}
              >
                <div className={style.phase}>
                  <p>{`PHASE ${key + 1}`}</p>
                </div>

                <p className={style.card_title}>{title}</p>

                <p className={style.card_text}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
