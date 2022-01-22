import React from 'react';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import s from './CustomButton.module.scss';

type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: React.ReactNode;
};

export const CustomButton = React.memo((props: ButtonPropsType) => {
  const { onClick, title, disabled, type, children } = props;
  const onButtonClick = (): void => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Tippy content={title} theme="material">
      <button
        className={s.button}
        onClick={onButtonClick}
        disabled={disabled}
        type={type}
      >
        {children ?? title}
      </button>
    </Tippy>
  );
});
