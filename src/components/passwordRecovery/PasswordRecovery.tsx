import React, { FormEvent, memo } from 'react';

import { Link } from 'react-router-dom';

import style from './PasswordRecovery.module.scss';

import { CustomButton, CustomTextInput } from 'components';
import { AutoCapitalize, PATH } from 'enum';
import { useInput } from 'hooks';

export const PasswordRecovery = memo(() => {
  const { value: email, handleValue: handleEmail, resetValue: resetEmail } = useInput('');
  const onSubmitClick = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log('Отправил на сервер, санка');
    resetEmail();
  };
  return (
    <div className={style.passwordRecoveryForm}>
      <div className={style.container}>
        <h1>Restoring access</h1>
        <form onSubmit={onSubmitClick} className={style.form}>
          <CustomTextInput
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            type="text"
            autoCapitalize={AutoCapitalize.false}
          />
          <div className={style.additions}>Enter your backup email</div>
          <div>
            <CustomButton title="Send" type="submit" />
          </div>
          <div className={style.signUpContainer}>
            <div>Remembered yor password?</div>
            <Link to={PATH.REGISTRATION} className={style.signUpLink}>
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
});
