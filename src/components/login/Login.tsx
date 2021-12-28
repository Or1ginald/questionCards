import React, { FormEvent, memo } from 'react';

import { Link } from 'react-router-dom';

import style from './Login.module.scss';

import { CustomButton, CustomTextInput } from 'components';
import { AutoCapitalize, PATH } from 'enum';
import { useInput } from 'hooks';

export const Login = memo(() => {
  const { value: email, handleValue: handleEmail, resetValue: resetEmail } = useInput('');
  const {
    value: password,
    handleValue: handlePassword,
    resetValue: resetPassword,
  } = useInput('');
  const onSubmitClick = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log('Отправил на сервер, санка');
    resetEmail();
    resetPassword();
    console.log('Редирект на профаил');
  };

  return (
    <div className={style.loginForm}>
      <div className={style.container}>
        <h1>Login</h1>
        <form onSubmit={onSubmitClick} className={style.form}>
          <CustomTextInput
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            type="text"
            autoCapitalize={AutoCapitalize.false}
          />
          <CustomTextInput
            placeholder="Password"
            onChange={handlePassword}
            value={password}
            type={password}
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
