import React, { memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../enum';
import { getCardPacks, getIsAuth } from '../../store';
import { setPacksTC } from '../../store/reducers/packsReducer';

import { Table } from 'components';

export const PacksList = memo(() => {
  const dispatch = useDispatch();

  // const isLoading = useSelector(getIsLoading);
  const isAuth = useSelector(getIsAuth);
  const cardPacks = useSelector(getCardPacks);

  useEffect(() => {
    dispatch(setPacksTC());
  }, []);

  if (!isAuth) {
    return <Navigate to={PATH.LOGIN} />;
  }

  // if (isLoading) {
  //   return <Spinner />;
  // }
  return <Table cardPacks={cardPacks} />;
});
