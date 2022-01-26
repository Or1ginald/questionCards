import { AxiosError } from 'axios';
import { Dispatch } from 'redux';

import { setIsLoadingAC } from '../../reducers/appReducer';
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
      console.log(res.data);
      dispatch(fetchPacksAC(res.data));
    })
    .catch((e: AxiosError) => {
      console.log(e.message);
      // const errorNetwork = e.response
      //   ? e.response.data.error
      //   : `${e.message}, more details in the console`;
      // // dispatch(setErrorMessageNetworkAC(errorNetwork));
    })
    .finally(() => {
      dispatch(setIsLoadingAC(false));
    });
};
