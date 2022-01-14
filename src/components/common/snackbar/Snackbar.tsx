import React, { memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setErrorAC } from '../../../store/reducers/appReducer';

import s from './SnackBar.module.scss';

import { getError } from 'store';

export const Snackbar = memo(() => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const autoHideDuration = 10000;
  useEffect(() => {
    const autoHide = setTimeout(() => {
      dispatch(setErrorAC(null));
    }, autoHideDuration);
    return () => {
      clearTimeout(autoHide);
    };
  });
  return (
    <div className={s.snackbar}>
      <div>{error}</div>
    </div>
  );
});
