/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import { Grid, InputAdornment } from '@mui/material';
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CustomIcons from '../../utils/Icons';
import Typography from '../../Component/Typography';
import TextInput from '../../Component/Input';
import CustomButton from '../../Component/CustomButton';
import './style.css';
import Footer from '../../Component/Footer';
import { CREATE_ADMIN_LOGIN } from '../../constants/actionType/index';
import { emailValidator, passwordValidator } from '../../Component/Regex';
import Toaster from '../../Component/Toaster/index';
/**
 * @name LoginScreen
 * @returns {React.ReactElement} returns the LoginScreen
 */
const LoginScreen = (props) => {
  const { NavigatorSwitch } = props;
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [toaster, setToaster] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  const [successMessage, setsuccessMessage] = React.useState('');
  const { admin, status } = useSelector((state) => state?.loginData);
  console.log(status, 'asadsasas');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  localStorage.setItem('LoginChecker', admin.Success);
  localStorage.setItem('header', admin.data);
  const values = localStorage.getItem('LoginChecker');
  /**
   *
   */
  const onClickHandle = (e) => {
    e.preventDefault();
    dispatch({ type: CREATE_ADMIN_LOGIN, payload: loginDetails });

    if (!emailValidator(loginDetails.email)) return seterrorMessage('Please enter valid email id');

    if (!passwordValidator(loginDetails.password))
      return seterrorMessage(
        'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters',
      );

    setsuccessMessage('');
  };

  useEffect(() => {
    if (values === 'true') {
      navigate('/dashboard');
      // NavigatorSwitch(true);
    }
  }, [navigate, NavigatorSwitch, values]);

  /**
   *
   * @param {*} e --change they data on input
   * @param {*} key --
   */
  const onChange = (e, key) => {
    setLoginDetails((prevState) => ({
      ...prevState,
      [key]: e.target.value,
    }));
  };

  /**
   *  onToasterClose used for toaser close func
   */
  const onToasterClose = () => {
    setToaster(false);
  };
  React.useEffect(() => {
    if (status) {
      setToaster(false);
    }
  }, [status]);
  return (
    <Grid item container>
      {toaster && <Toaster open severity={status?.type} message={status?.message} close={onToasterClose} />}

      <Grid item md={7} xs={7} sm={7}>
        <img
          src="https://w0.peakpx.com/wallpaper/386/249/HD-wallpaper-golden-retriever-puppy-running-labrador-cute-dog-pets-cute-animals-dogs-labrador.jpg"
          alt=""
          className="loginImage"
        />
      </Grid>

      <Grid item md={5} xs={5} sm={5} className="loginContent">
        {successMessage && <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>}
        <Grid className="Right_align">
          <Grid className="login_box">
            <Grid className="align_login">
              <img src={CustomIcons.Logo} alt="" className="logoStyle" />
            </Grid>
            <Grid>
              <Typography text="Welcome" type="header" customStyle={{ fontWeight: 'bold' }} />
              <Typography
                text="to PetHowz"
                type="header"
                colorType="text"
                customStyle={{ paddingLeft: '5px', fontWeight: 'bold' }}
              />
            </Grid>
            <Grid>
              <Grid className="span_text">
                <Typography
                  text="Enter Your Email Address and Password"
                  type="link"
                  customStyle={{ color: '#a5a0a1' }}
                />
              </Grid>
              <Grid>
                <Typography text="" type="link" customStyle={{ color: '#a5a0a1', textAlign: 'center' }} />
              </Grid>
            </Grid>
            <Grid className="input_width">
              <TextInput
                value={loginDetails.email}
                onChange={(e) => onChange(e, 'email')}
                placeholder="Email"
                inputProps={{
                  sx: {
                    '&::placeholder': {
                      fontSize: '12px',
                    },
                  },
                }}
                iconProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={CustomIcons.Email} alt="" style={{ height: '14px' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid className="input_width">
              <TextInput
                value={loginDetails.password}
                type="password"
                onChange={(e) => onChange(e, 'password')}
                placeholder="Password"
                inputProps={{
                  sx: {
                    '&::placeholder': {
                      fontSize: '12px',
                    },
                  },
                }}
                iconProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={CustomIcons.KeyIcon} alt="" style={{ height: '10px' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid className="input_width">
              {/* <NavLink to="/dashboard" style={{ textDecoration: 'none', color: '#fff' }}> */}
              <CustomButton
                btnTitle="LOGIN"
                color="primary"
                variant="contained"
                btnStyles={{ color: 'white' }}
                onClickHandle={onClickHandle}
              />
              {/* </NavLink> */}
            </Grid>
            {errorMessage && <div className="bar">{errorMessage}</div>}
          </Grid>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LoginScreen;
LoginScreen.propTypes = {
  NavigatorSwitch: propTypes.string,
};
LoginScreen.defaultProps = {
  NavigatorSwitch: '',
};
