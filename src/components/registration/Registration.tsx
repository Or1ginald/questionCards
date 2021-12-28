import { FormEvent, memo } from 'react';

import style from './Registration.module.scss';

import { CustomButton, CustomTextInput } from 'components';
import { AutoCapitalize } from 'enum';
import { useInput } from 'hooks';
import { ReturnComponentType } from 'types';

export const Registration = memo((): ReturnComponentType => {
  const { value: email, handleValue: handleEmail, resetValue: resetEmail } = useInput('');
  const {
    value: password,
    handleValue: handlePassword,
    resetValue: resetPassword,
  } = useInput('');
  const {
    value: confirmPassword,
    handleValue: handleConfirmPassword,
    resetValue: resetConfirmPassword,
  } = useInput('');
  const onSubmitClick = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Отправил на сервер, санка');
      resetEmail();
      resetPassword();
      resetConfirmPassword();
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
          <CustomTextInput
            placeholder="Confirm Password"
            onChange={handleConfirmPassword}
            value={confirmPassword}
            type={password}
          />
          <div>
            <CustomButton title="Create" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
});
