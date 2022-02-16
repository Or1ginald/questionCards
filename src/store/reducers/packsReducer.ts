import { ResponsePacksType } from 'api/types';

const SET_CURRENT_PAGE = 'PACKS/SET_CURRENT_PAGE';
const FETCH_PACKS = 'PACKS/FETCH_PACKS';
const REMOVE_PACK = 'PACKS/REMOVE_PACK';
const ADD_PACK = 'PACKS/ADD_PACK';
const UPDATE_PACK = 'PACKS/UPDATE_PACK';
const SET_WAS_TABLE_CHANGED = 'PACKS/SET_WAS_TABLE_CHANGED';
const SET_SORT_PACKS = 'PACKS/SET_SORT_PACKS';

export type packsReducerInitStateType = ResponsePacksType & {
  packName: string;
  sortPacks: string;
  user_id: string;
  wasTableChanged: boolean;
};

const packsReducerInitialState: packsReducerInitStateType = {
  cardPacks: [],
  cardPacksTotalCount: 0,
  maxCardsCount: 0,
  minCardsCount: 0,
  page: 1,
  pageCount: 10,
  packName: '',
  sortPacks: '1updated',
  user_id: '',
  wasTableChanged: false,
};

export const packsReducer = (
  state: packsReducerInitStateType = packsReducerInitialState,
  action: ActionsType,
): packsReducerInitStateType => {
  switch (action.type) {
    case FETCH_PACKS:
      return { ...state, ...action.payload };
    case REMOVE_PACK:
      return {
        ...state,
        cardPacks: state.cardPacks.filter(deck => deck._id !== action.id),
      };
    case ADD_PACK:
      return { ...state, cardPacks: [action.deck, ...state.cardPacks] };
    case UPDATE_PACK:
      return {
        ...state,
        cardPacks: state.cardPacks.map(deck =>
          deck._id === action.id ? { ...deck, name: action.title } : deck,
        ),
      };
    case SET_CURRENT_PAGE:
      return { ...state, page: action.pageNumber };
    case SET_WAS_TABLE_CHANGED:
      return { ...state, wasTableChanged: action.isChanged };
    case SET_SORT_PACKS:
      return { ...state, sortPacks: action.sortPacks };
    default:
      return state;
  }
};

// actions
export const fetchPacksAC = (payload: ResponsePacksType) =>
  ({
    type: FETCH_PACKS,
    payload,
  } as const);
export const deletePackAC = (id: string) =>
  ({
    type: REMOVE_PACK,
    id,
  } as const);
export const addPackAC = (deck: any) =>
  ({
    type: ADD_PACK,
    deck,
  } as const);

export const upDatePackAC = (title: any, id: string) =>
  ({
    type: UPDATE_PACK,
    title,
    id,
  } as const);
export const setCurrentPageAC = (pageNumber: number) =>
  ({
    type: SET_CURRENT_PAGE,
    pageNumber,
  } as const);
export const setWasTableChangedAC = (isChanged: boolean) =>
  ({
    type: SET_WAS_TABLE_CHANGED,
    isChanged,
  } as const);
export const setSortPacksAC = (sortPacks: string) =>
  ({
    type: SET_SORT_PACKS,
    sortPacks,
  } as const);

type ActionsType =
  | ReturnType<typeof fetchPacksAC>
  | ReturnType<typeof deletePackAC>
  | ReturnType<typeof addPackAC>
  | ReturnType<typeof upDatePackAC>
  | ReturnType<typeof setWasTableChangedAC>
  | ReturnType<typeof setSortPacksAC>
  | ReturnType<typeof setCurrentPageAC>;

// thunk

/* export const setMyDecksTC = (): AppThunk => (dispatch: Dispatch, getState) => {
    const {page, pageCount} = getState().decks;
    const {_id} = getState().profilePage.profile;
    dispatch(setAppStatusAC(requestStatus.loading));
    decksAPI
        .fetchMyDecks(page, pageCount, _id)
        .then(res => {
            dispatch(fetchDecksAC(res.data));
            dispatch(setAppStatusAC(requestStatus.succeeded));
        })
        .catch((e: AxiosError) => {
            dispatch(setAppStatusAC(requestStatus.succeeded));
            const errorNetwork = e.response
                ? e.response.data.error
                : `${e.message}, more details in the console`;
            dispatch(setErrorMessageNetworkAC(errorNetwork));
        });
};
export const removeDeckTC = (id: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    decksAPI
        .removeDeck(id)
        .then(() => {
            dispatch(deleteDeckAC(id));
            dispatch(setAppStatusAC(requestStatus.succeeded));
        })
        .catch((e: AxiosError) => {
            dispatch(setAppStatusAC(requestStatus.succeeded));
            const errorNetwork = e.response
                ? e.response.data.error
                : `${e.message}, more details in the console`;
            dispatch(setErrorMessageNetworkAC(errorNetwork));
        });
};

export const addDeckTC = (dataPayload: addNewDeckType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    decksAPI
        .addNewDeck(dataPayload)
        .then(res => {
            const deck = res.data.newCardsPack;
            dispatch(addDeckAC(deck));
            dispatch(setAppStatusAC(requestStatus.succeeded));
        })
        .catch((e: AxiosError) => {
            dispatch(setAppStatusAC(requestStatus.succeeded));
            const errorNetwork = e.response
                ? e.response.data.error
                : `${e.message}, more details in the console`;
            dispatch(setErrorMessageNetworkAC(errorNetwork));
        });
};

export const upDateDeckTC = (title: any, _id: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC(requestStatus.loading));
    decksAPI
        .updateDeck({_id})
        .then(() => {
            dispatch(upDateDeckAC(title, _id));
            dispatch(setAppStatusAC(requestStatus.succeeded));
        })
        .catch((e: AxiosError) => {
            dispatch(setAppStatusAC(requestStatus.succeeded));
            const errorNetwork = e.response
                ? e.response.data.error
                : `${e.message}, more details in the console`;
            dispatch(setErrorMessageNetworkAC(errorNetwork));
        });
}; */
