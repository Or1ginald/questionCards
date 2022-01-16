import React, { memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setNotificationAC } from '../../../store/reducers/appReducer';

import s from './Notification.module.scss';

import { getNotification } from 'store';

export const Notification = memo(() => {
  const dispatch = useDispatch();
  const notification = useSelector(getNotification);

  const autoHideDuration = 6000;
  useEffect(() => {
    const autoHide = setTimeout(() => {
      dispatch(setNotificationAC(null));
    }, autoHideDuration);
    return () => {
      clearTimeout(autoHide);
    };
  });
  return (
    <div className={s.notification}>
      <div>{notification}</div>
    </div>
  );
});
