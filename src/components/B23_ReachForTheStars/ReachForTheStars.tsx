import * as React from 'react';
import style from './ReachForTheStars.module.scss';
import gradientRight from '../../assets/png/gradient_footer_right2.png';
import { ButtonCustom } from '../common/ButtonCustom/ButtonCustom';
import { svgIcons } from '../../assets/svgIcons';

import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/useStore';
import { AnchorUnderline } from '../common/AnchorUnderline/AnchorUnderline';
import { socialLinks } from '../A0_App/socialLinks';

export const ReachForTheStars = observer(() => {
  const { setAffiliateModal } = useStore();
  const onClickHandler = () => setAffiliateModal(true);

  return (
    <div className={style.reachForTheStars}>
      <img src={gradientRight} alt='' className={style.gradientRight} />

      <div className='container'>
        <div className={style.titleWrapper}>
          <p className={style.pretext}>JOIN THE TRADING UNIVERSE</p>
          <h2 className={style.title}>
            Reach For <span>The Stars</span> As A BrightFunded Partner
          </h2>
        </div>

        <div className={style.buttons}>
          <ButtonCustom
            label='Sign Up'
            icon={svgIcons.arrow_right}
            className={style.btn}
            // @ts-ignore
            onClick={onClickHandler}
          />

          <AnchorUnderline
            label='Join Our Discord'
            href={socialLinks[0].href}
            className={style.tradeBtn}
            icon={svgIcons.discord}
          />
        </div>
      </div>
    </div>
  );
});
