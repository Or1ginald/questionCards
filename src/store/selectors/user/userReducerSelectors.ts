import { RootStateType } from 'store';
import { Nullable } from 'types';

export const getUserId = (state: RootStateType): Nullable<string> => state.user._id;
export const getUserEmail = (state: RootStateType): Nullable<string> => state.user.email;
export const getUserName = (state: RootStateType): Nullable<string> => state.user.name;
export const getUserAvatar = (state: RootStateType): Nullable<string> | undefined =>
  state.user.avatar;
export const getUserPublicCardPacksCount = (state: RootStateType): Nullable<number> =>
  state.user.publicCardPacksCount;
export const getUserCreated = (state: RootStateType): Nullable<Date> =>
  state.user.created;
export const getUserUpdated = (state: RootStateType): Nullable<Date> =>
  state.user.updated;
export const getUserIsAdmin = (state: RootStateType): Nullable<boolean> =>
  state.user.isAdmin;
export const getUserIsVerified = (state: RootStateType): Nullable<boolean> =>
  state.user.verified;
export const getUserDoRememberMe = (state: RootStateType): Nullable<boolean> =>
  state.user.rememberMe;
export const getUserError = (state: RootStateType): Nullable<string> | undefined =>
  state.user.error;
