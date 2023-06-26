import { svgIcons } from '../../../assets/svgIcons';
import { ButtonCustom } from '../../common/ButtonCustom/ButtonCustom';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import style from './ContactModal.module.scss';
import { useStore } from '../../../store/useStore';
import { observer } from 'mobx-react-lite';
import check from '../../../assets/png/check.png';
import { AnchorCustom } from '../../common/AnchorCustom/AnchorCustom';
import { socialLinks } from '../../A0_App/socialLinks';

export const ContactModal = observer(() => {
  const { contactModal, setContactModal } = useStore();
  const onClose = () => setContactModal(false);

  return (
    <Modal
      open={contactModal}
      onClose={onClose}
      className={style.contactModal}
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(11, 12, 18, 0.5)',
        },
      }}
    >
      <div className={style.card}>
        <button className={style.closeBtn} onClick={onClose}>
          {svgIcons.close_black}
        </button>

        <img src={check} alt='' className={style.img} />

        <p className={style.title}>We've Got Your Message!</p>

        <p className={style.description}>
          Thanks for reaching out! Your message has been received and we'll get
          back to you as soon as possible. In the meantime, you might find
          immediate answers in our vibrant Discord community. Join us there if
          you haven't already!
        </p>

        <AnchorCustom
          label='Join Our Discord'
          icon={svgIcons.discord}
          className={style.btn}
          href={socialLinks[0].href}
        />

        <button className={style.okBtn} onClick={onClose}>
          ok
        </button>
      </div>
    </Modal>
  );
});
