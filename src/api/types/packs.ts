export type ResponsePacksType = {
  cardPacks: CardPackType[];
  cardPacksTotalCount: number; // totalCount
  maxCardsCount: number;
  minCardsCount: number;
  page: number; // currentPage
  pageCount: number; // perPage
};

export type CardPackType = {
  _id: string;
  userId?: string | undefined;
  name?: string;
  path?: string;
  cardsCount?: number;
  grade?: number;
  shots?: number;
  rating?: number;
  type?: string;
  created?: string;
  updated?: string;
  __v?: number;
  user_name?: string;
};
