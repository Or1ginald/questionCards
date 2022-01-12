import React, { FormEvent, memo, useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setEmailAC } from '../../store/reducers/userAuthFormReducer';
import { forgotPasswordTC } from '../../store/reducers/userReducer';

import style from './PasswordRecovery.module.scss';

import { CustomButton, CustomTextInput } from 'components';
import { AutoCapitalize, PATH } from 'enum';
import { getEmail } from 'store';

export const PasswordRecovery = memo(() => {
  const dispatch = useDispatch();

  const email = useSelector(getEmail);

  const [isFormSent, setIsFormSent] = useState<boolean>(false);

  useEffect(
    () =>
      function cleanup() {
        console.log('cleanup');
        dispatch(setEmailAC(null));
      },
    [],
  );

  const handleEmailChange = useCallback((value: string) => {
    dispatch(setEmailAC(value));
  }, []);

  const onSubmitClick = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(forgotPasswordTC());
    dispatch(setEmailAC(null));
    setIsFormSent(true);
  };

  if (isFormSent) {
    // return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <div className={style.passwordRecoveryForm}>
      <div className={style.container}>
        <h1>Restoring access</h1>
        <form onSubmit={onSubmitClick} className={style.form}>
          <CustomTextInput
            placeholder="Email"
            value={email ?? ''}
            onChange={handleEmailChange}
            type="text"
            autoCapitalize={AutoCapitalize.false}
          />
          <div className={style.additions}>Enter your backup email</div>
          <div>
            <CustomButton title="Send" type="submit" />
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
