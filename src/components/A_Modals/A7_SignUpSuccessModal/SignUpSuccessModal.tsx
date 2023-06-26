import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/useStore';
import style from './SignUpSuccessModal.module.scss';
import { svgIcons } from '../../../assets/svgIcons';
import { ButtonCustom } from '../../common/ButtonCustom/ButtonCustom';
import Modal from '@mui/material/Modal';
import * as React from 'react';

export const SignUpSuccessModal = observer(() => {
  const { signUpSuccessModal, setSignUpSuccessModal } = useStore();
  const onClose = () => setSignUpSuccessModal(false);

  return (
    <Modal
      open={signUpSuccessModal}
      onClose={onClose}
      className={style.signUpSuccessModal}
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

        <p className={style.title}>Welcome Aboard!</p>

        <p className={style.description}>
          <p>
            Brilliant decision! Your application for the BrightFunded Affiliate
            Program has been successfully submitted and is now under review.
          </p>
          <br />
          <p>
            Keep an eye on your inbox for a confirmation email from us, which
            will include further details about your affiliate partner account
            and your exclusive referral link.
          </p>
          <br />
          <p>Together, we're set to revolutionize the world of trading!</p>
        </p>

        <ButtonCustom label='OK' className={style.btn} onClick={onClose} />
      </div>
    </Modal>
  );
});
