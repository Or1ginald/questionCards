import React, { FormEvent, memo, useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';

import { setErrorAC } from '../../store/reducers/appReducer';
import {
  setConfirmPasswordAC,
  setPasswordAC,
} from '../../store/reducers/userAuthFormReducer';
import { createNewPasswordTC } from '../../store/reducers/userReducer';
import { isPasswordValid } from '../../utils';

import style from './CreateNewPassword.module.scss';

import { CustomButton, CustomTextInput } from 'components';
import { AutoCapitalize, PATH } from 'enum';
import { getConfirmPassword, getPassword } from 'store';

export const CreateNewPassword = memo(() => {
  const dispatch = useDispatch();
  const params = useParams<'token'>();
  const { token } = params as { token: string };

  const password = useSelector(getPassword) as string;
  const confirmPassword = useSelector(getConfirmPassword);

  const [isFormSent, setIsFormSent] = useState<boolean>(false);

  useEffect(
    () =>
      function cleanup() {
        console.log('cleanup');
        dispatch(setPasswordAC(null));
        dispatch(setConfirmPasswordAC(null));
      },
    [],
  );

  const handlePasswordChange = useCallback((value: string) => {
    dispatch(setPasswordAC(value));
  }, []);
  const handleConfirmPasswordChange = useCallback((value: string) => {
    dispatch(setConfirmPasswordAC(value));
  }, []);

  const onSubmitClick = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log(`Passwords aren't equal`);
      dispatch(setErrorAC(`Passwords aren't equal`));
      return;
    }
    if (!isPasswordValid(password)) {
      dispatch(setErrorAC('Not valid password'));
    }
    dispatch(createNewPasswordTC(token));
    setIsFormSent(true);
  };

  if (isFormSent) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <div className={style.createNewPasswordForm}>
      <div className={style.container}>
        <h1>New password</h1>
        <form onSubmit={onSubmitClick} className={style.form}>
          <CustomTextInput
            placeholder="Password"
            value={password ?? ''}
            onChange={handlePasswordChange}
            type="password"
            autoCapitalize={AutoCapitalize.false}
          />
          <CustomTextInput
            placeholder="Confirm password"
            value={confirmPassword ?? ''}
            onChange={handleConfirmPasswordChange}
            type="password"
            autoCapitalize={AutoCapitalize.false}
          />
          <div className={style.additions}>
            Should contain at least 8 letters or numbers
          </div>
          <div className={style.additions}>One capital and one small letter</div>
          <div>
            <CustomButton title="Confirm" type="submit" />
          </div>
          <div className={style.signUpContainer}>
            <div>Remembered yor password?</div>
            <Link to={PATH.LOGIN} className={style.signUpLink}>
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
});
