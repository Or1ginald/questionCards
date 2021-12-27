import React from 'react';

import s from './CustomButton.module.scss';

type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export const CustomButton = React.memo((props: ButtonPropsType) => {
  const { onClick, title, disabled, type } = props;
  const onButtonClick = (): void => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button className={s.button} onClick={onButtonClick} disabled={disabled} type={type}>
      {title}
    </button>
  );
});
