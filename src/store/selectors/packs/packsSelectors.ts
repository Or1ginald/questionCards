import { CardPackType } from 'api/types';
import { RootStateType } from 'store';

export const getCardPacksTotalCount = (state: RootStateType): number =>
  state.packs.cardPacksTotalCount;
export const getCardPacks = (state: RootStateType): Array<CardPackType> =>
  state.packs.cardPacks;
export const getPage = (state: RootStateType): number => state.packs.page;
export const getSortPacks = (state: RootStateType): string => state.packs.sortPacks;
export const getPackName = (state: RootStateType): string => state.packs.packName;
export const getMaxCardsCount = (state: RootStateType): number =>
  state.packs.maxCardsCount;
export const getMinCardsCount = (state: RootStateType): number =>
  state.packs.minCardsCount;
export const getPageCount = (state: RootStateType): number => state.packs.pageCount;
export const getUserID = (state: RootStateType): string => state.packs.user_id;
