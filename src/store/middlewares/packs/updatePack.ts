import { setErrorAC, setIsLoadingAC, setNotificationAC } from '../../reducers/appReducer';

import { packsAPI } from 'api';
import { setPacksTC } from 'store/middlewares';
import { AppThunk } from 'types';

export const updatePackTC =
  (packId: string, newName: string, closeModal: () => void): AppThunk =>
  dispatch => {
    dispatch(setIsLoadingAC(true));
    packsAPI
      .updatePack(packId, newName)
      .then(() => {
        closeModal();
      })
      .then(() => {
        dispatch(setPacksTC());
        dispatch(setNotificationAC('Pack was updated'));
      })
      .catch(e => {
        dispatch(setErrorAC(e.message ?? e.response.data.error));
        // const errorNetwork = e.response
        //   ? e.response.data.error
        //   : `${e.message}, more details in the console`;
        // // dispatch(setErrorMessageNetworkAC(errorNetwork));
      })
      .finally(() => {
        dispatch(setIsLoadingAC(false));
      });
  };
