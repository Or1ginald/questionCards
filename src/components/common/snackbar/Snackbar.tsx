import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import s from './SnackBar.module.scss';

import { getError } from 'store';

export const Snackbar = memo(() => {
  const error = useSelector(getError);
  return (
    <div className={s.snackbar}>
      <div>{error}</div>
    </div>
  );
});
