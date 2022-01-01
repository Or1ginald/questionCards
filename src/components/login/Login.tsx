import React, { ChangeEvent, FormEvent, memo, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  setEmailAC,
  setPasswordAC,
  setRememberMeAC,
} from '../../store/reducers/userAuthFormReducer';
import { setUserProfileDataTC } from '../../store/reducers/userReducer';

import style from './Login.module.scss';

import { CustomButton, CustomTextInput } from 'components';
import { AutoCapitalize, PATH } from 'enum';
import { getEmail, getPassword } from 'store';

export const Login = memo(() => {
  const dispatch = useDispatch();

  const email = useSelector(getEmail);
  const password = useSelector(getPassword);

  useEffect(
    () =>
      function cleanup() {
        dispatch(setEmailAC(null));
        dispatch(setPasswordAC(null));
      },
    [],
  );

  const handleEmailChange = useCallback((value: string) => {
    dispatch(setEmailAC(value));
  }, []);
  const handlePasswordChange = useCallback((value: string) => {
    dispatch(setPasswordAC(value));
  }, []);
  const onCheckBoxChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setRememberMeAC(e.currentTarget.checked));
  };

  const onSubmitClick = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(setUserProfileDataTC());
    dispatch(setEmailAC(null));
    dispatch(setPasswordAC(null));
    console.log('Редирект на профаил');
  };

  return (
    <div className={style.loginForm}>
      <div className={style.container}>
        <h1>Login</h1>
        <form onSubmit={onSubmitClick} className={style.form}>
          <CustomTextInput
            placeholder="Email"
            value={email ?? ''}
            onChange={handleEmailChange}
            type="text"
            autoCapitalize={AutoCapitalize.false}
          />
          <CustomTextInput
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password ?? ''}
            type="password"
          />
          <div className={style.additions}>
            <div>
              <input type="checkbox" onChange={onCheckBoxChange} />
              <span>Remember Me</span>
            </div>
            <Link to={PATH.PASSWORD_RECOVERY}>Forgot your password?</Link>
          </div>
          <div>
            <CustomButton title="Login" type="submit" />
          </div>
          <div className={style.signUpContainer}>
            <div>Don&apos;t have an account?</div>
            <Link to={PATH.REGISTRATION} className={style.signUpLink}>
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
});
