import { setErrorAC, setIsLoadingAC, setNotificationAC } from '../../reducers/appReducer';

import { packsAPI } from 'api';
import { setPacksTC } from 'store/middlewares';
import { AppThunk } from 'types';

export const deletePackTC =
  (packId: string, closeModal: () => void): AppThunk =>
  dispatch => {
    dispatch(setIsLoadingAC(true));
    packsAPI
      .deletePack(packId)
      .then(() => {
        dispatch(setPacksTC());
        dispatch(setNotificationAC('Pack was deleted'));
      })
      .catch(e => {
        dispatch(setErrorAC(e.message ?? e.response.data.error));
      })
      .finally(() => {
        closeModal();
        dispatch(setIsLoadingAC(false));
      });
  };
