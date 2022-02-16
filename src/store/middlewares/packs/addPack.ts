import { setErrorAC, setIsLoadingAC, setNotificationAC } from '../../reducers/appReducer';

import { packsAPI } from 'api';
import { setPacksTC } from 'store/middlewares';
import { AppThunk } from 'types';

export const addPackTC =
  (name: string, closeModal: () => void): AppThunk =>
  dispatch => {
    dispatch(setIsLoadingAC(true));
    packsAPI
      .addPack(name)
      .then(() => {
        closeModal();
      })
      .then(() => {
        // @ts-ignore
        dispatch(setPacksTC());
        dispatch(setNotificationAC('Pack was added'));
      })
      .catch(e => {
        dispatch(setErrorAC(e.message ?? e.response.data.error));
      })
      .finally(() => {
        dispatch(setIsLoadingAC(false));
      });
  };
