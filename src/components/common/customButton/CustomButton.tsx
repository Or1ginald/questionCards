import React from 'react';

import Tippy from '@tippyjs/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tippy.js/dist/tippy.css'; // optional

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
    <Tippy content={title} theme="material">
      <button
        className={s.button}
        onClick={onButtonClick}
        disabled={disabled}
        type={type}
      >
        {title}
      </button>
    </Tippy>
  );
});
