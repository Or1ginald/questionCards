import React, { useEffect } from 'react';

import cl from './Modal.module.scss';

import { ReturnComponentType } from 'types';

/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

export const Modal = (props: ModalPropsType): ReturnComponentType => {
  const { children, isActive, setIsActive } = props;
  const rootClasses = [cl.myModal];
  // const ESCAPE_BUTTON = 27;

  if (isActive) {
    rootClasses.push(cl.active);
  }

  const onExitClick = (): void => {
    setIsActive(false);
  };

  useEffect(() => {
    const close = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        setIsActive(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <div className={rootClasses.join(' ')} onClick={onExitClick}>
      <div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

type ModalPropsType = {
  isActive: boolean;
  setIsActive: (isVisible: boolean) => void;
  children: React.ReactNode;
};
