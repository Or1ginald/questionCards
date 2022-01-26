import { AxiosError } from 'axios';

import { setIsLoadingAC, setNotificationAC } from '../../reducers/appReducer';

import { packsAPI } from 'api';
import { setPacksTC } from 'store/middlewares';
import { AppThunk } from 'types';

export const deletePackTC =
  (packId: string, closeModal: () => void): AppThunk =>
  dispatch => {
    dispatch(setIsLoadingAC(true));
    packsAPI
      .deletePack(packId)
      .then(res => {
        console.log(res.data);
      })
      .then(() => {
        dispatch(setPacksTC());
        dispatch(setNotificationAC('Pack was deleted'));
      })
      .catch((e: AxiosError) => {
        console.log(e.message);
        // const errorNetwork = e.response
        //   ? e.response.data.error
        //   : `${e.message}, more details in the console`;
        // // dispatch(setErrorMessageNetworkAC(errorNetwork));
      })
      .finally(() => {
        closeModal();
        dispatch(setIsLoadingAC(false));
      });
  };
