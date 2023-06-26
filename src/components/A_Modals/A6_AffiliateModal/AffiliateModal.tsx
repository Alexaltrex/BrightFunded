import Modal from '@mui/material/Modal';
import * as React from 'react';
import style from './AffiliateModal.module.scss';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../store/useStore';
import { FormikErrors, FormikHelpers, useFormik } from 'formik';
import { svgIcons } from '../../../assets/svgIcons';
import TextField from '@mui/material/TextField';
import { ButtonCustom } from '../../common/ButtonCustom/ButtonCustom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { countries } from './countries';

interface IValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  code: string;
  country: string;
}

const initialValues: IValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  code: '',
  country: '',
};

export const AffiliateModal = observer(() => {
  const { affiliateModal, setAffiliateModal, setSignUpSuccessModal } =
    useStore();

  const validate = ({
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    code,
    country,
  }: IValues): FormikErrors<IValues> => {
    const errors = {} as FormikErrors<IValues>;
    if (!firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!phone) {
      errors.phone = 'Phone is required';
    }
    if (!address) {
      errors.address = 'Address is required';
    }
    if (!city) {
      errors.city = 'City is required';
    }
    if (!code) {
      errors.code = 'Postal code is required';
    }
    if (!country) {
      errors.country = 'Country is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    }
    if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Not a valid email';
    }
    return errors;
  };

  const onSubmit = async (
    values: IValues,
    formikHelpers: FormikHelpers<IValues>
  ) => {
    try {
      console.log(values);
      setAffiliateModal(false);
      setSignUpSuccessModal(true);
    } catch (e: any) {
      console.log(e.message);
    } finally {
      formikHelpers.resetForm();
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const onClose = () => {
    setAffiliateModal(false);
    formik.resetForm();
  };

  return (
    <Modal
      open={affiliateModal}
      onClose={onClose}
      className={style.affiliateModal}
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

        <p className={style.title}>Affiliate Registration</p>

        <p className={style.description}>
          Your affiliate journey begins here - please provide your details
          below.
        </p>

        <form onSubmit={formik.handleSubmit} className={style.form}>
          <div className={style.top}>
            <TextField
              placeholder='First Name'
              size='small'
              {...formik.getFieldProps('firstName')}
              fullWidth
              className={style.field}
              sx={sxField}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />

            <TextField
              placeholder='Last Name'
              size='small'
              {...formik.getFieldProps('lastName')}
              fullWidth
              className={style.field}
              sx={sxField}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </div>

          <TextField
            placeholder='Email'
            size='small'
            {...formik.getFieldProps('email')}
            fullWidth
            className={style.field}
            sx={sxField}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            placeholder='Phone'
            size='small'
            {...formik.getFieldProps('phone')}
            fullWidth
            className={style.field}
            sx={sxField}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />

          <TextField
            placeholder='Address'
            size='small'
            {...formik.getFieldProps('address')}
            fullWidth
            className={style.field}
            sx={sxField}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />

          <TextField
            placeholder='City'
            size='small'
            {...formik.getFieldProps('city')}
            fullWidth
            className={style.field}
            sx={sxField}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />

          <TextField
            placeholder='Postal code'
            size='small'
            {...formik.getFieldProps('code')}
            fullWidth
            className={style.field}
            sx={sxField}
            error={formik.touched.code && Boolean(formik.errors.code)}
            helperText={formik.touched.code && formik.errors.code}
          />

          <Select //value={String(platform)}
            //onChange={onChangeHandler}
            className={style.field}
            {...formik.getFieldProps('country')}
            IconComponent={KeyboardArrowDownIcon}
            fullWidth
            sx={sxSelect(formik.values.country)}
            displayEmpty
            MenuProps={{ sx: sxMenu }}
            error={formik.touched.country && Boolean(formik.errors.country)}
            //helperText={formik.touched.country && formik.errors.country}
          >
            <MenuItem disabled value=''>
              Country
            </MenuItem>
            {countries.map((country, key) => (
              <MenuItem key={key} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>

          <ButtonCustom
            label='Sign Up'
            icon={svgIcons.arrow_right}
            className={style.joinBtn}
            type='submit'
          />
        </form>
      </div>
    </Modal>
  );
});

const sxField = {
  background: 'rgba(2, 38, 76, 0.05)',
  borderRadius: '10px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#E5EAEF',
    borderRadius: '10px',
  },
  '& .MuiInputBase-root': {
    borderRadius: '10px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '150%',
    letterSpacing: '-0.01em',
    color: '#1C1F31',
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#D3D2DE',
      },
    },
  },
  '& .MuiFormHelperText-root': {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '150%',
    letterSpacing: '-0.01em',
    //color: "#1C1F31",
    position: 'absolute',
    left: 0,
    bottom: '-18px',
  },
  '& .MuiInputBase-root.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#D3D2DE',
    },
  },
};

const sxSelect = (value: string) => ({
  //width: "calc(100vw - 40px)",
  background: 'rgba(2, 38, 76, 0.05)',
  borderRadius: '10px',
  border: '1px solid #E5EAEF',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '150%',
  letterSpacing: '-0.01em',
  color: value === '' ? '#9A99AF' : '#0E0B3D',
  transition: '0.3s',
  '&:hover': {
    border: '1px solid #D3D2DE',
  },
  '&.Mui-focused': {
    border: '1px solid #D3D2DE',
  },
  '& .MuiSelect-select': {
    padding: '8.5px 14px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
});

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
    color: '#0E0B3D',
    padding: '10px 15px',
  },
  '& .MuiMenuItem-root.Mui-selected': {
    backgroundColor: '#FFF',
    color: '#9A99AF',
  },
};
