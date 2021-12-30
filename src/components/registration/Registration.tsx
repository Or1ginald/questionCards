import { FormEvent, memo, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setConfirmPasswordAC,
  setEmailAC,
  setPasswordAC,
} from '../../store/reducers/userAuthFormReducer';

import style from './Registration.module.scss';

import { CustomButton, CustomTextInput } from 'components';
import { AutoCapitalize } from 'enum';
import { getConfirmPassword, getEmail, getPassword } from 'store';
import { ReturnComponentType } from 'types';

export const Registration = memo((): ReturnComponentType => {
  console.log('rerender');
  const dispatch = useDispatch();

  const email = useSelector(getEmail);
  const password = useSelector(getPassword);
  const confirmPassword = useSelector(getConfirmPassword);

  useEffect(
    () =>
      function cleanup() {
        console.log('cleanup');
        dispatch(setEmailAC(null));
        dispatch(setPasswordAC(null));
        dispatch(setConfirmPasswordAC(null));
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
  const handleConfirmPasswordChange = useCallback((value: string) => {
    dispatch(setConfirmPasswordAC(value));
  }, []);

  const onSubmitClick = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Отправил на сервер, санка');
      dispatch(setEmailAC(null));
      dispatch(setPasswordAC(null));
      dispatch(setConfirmPasswordAC(null));
      console.log('Редирект на логин');
    }
    if (password !== confirmPassword) {
      console.log('Пароли не совпадают');
    }
  };
  return (
    <div className={style.registrationForm}>
      <div className={style.container}>
        <h1>Registration</h1>
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
          <CustomTextInput
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
            value={confirmPassword ?? ''}
            type="password"
          />
          <div>
            <CustomButton title="Create" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
});
