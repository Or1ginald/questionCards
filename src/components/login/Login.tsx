import React, { FormEvent, memo, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setEmailAC, setPasswordAC } from '../../store/reducers/userAuthFormReducer';

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
        console.log('cleanup');
        dispatch(setEmailAC(null));
        dispatch(setPasswordAC(null));
      },
    [],
  );

  const handleEmailChange = useCallback((value: string) => {
    console.log('handler enter');
    dispatch(setEmailAC(value));
  }, []);
  const handlePasswordChange = useCallback((value: string) => {
    dispatch(setPasswordAC(value));
  }, []);

  const onSubmitClick = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log('Отправил на сервер, санка');
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
