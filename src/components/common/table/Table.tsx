import React, { memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getIsLoading } from '../../../store';
// import { setPacksTC } from '../../../store/reducers/packsReducer';
import { setPacksTC } from '../../../store/reducers/packsReducer';
import { Spinner } from '../spinner';

export const Table = memo(() => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(setPacksTC());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const a = 1;
  return <div>{a}</div>;
});
