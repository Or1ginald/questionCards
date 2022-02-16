import { Dispatch } from 'redux';

import { setErrorAC, setIsLoadingAC } from '../../reducers/appReducer';
import { fetchPacksAC } from '../../reducers/packsReducer';

import { packsAPI } from 'api';
import { AppThunk } from 'types';

export const setPacksTC = (): AppThunk => (dispatch: Dispatch, getState) => {
  const { page, pageCount, maxCardsCount, minCardsCount, packName, sortPacks, user_id } =
    getState().packs;
  dispatch(setIsLoadingAC(true));
  packsAPI
    .getPacks(packName, minCardsCount, maxCardsCount, sortPacks, page, pageCount, user_id)
    .then(res => {
      dispatch(fetchPacksAC(res.data));
    })
    .catch(e => {
      dispatch(setErrorAC(e.message ?? e.response.data.error));
    })
    .finally(() => {
      dispatch(setIsLoadingAC(false));
    });
};
