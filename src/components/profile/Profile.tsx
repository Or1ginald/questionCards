import { memo } from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import style from '../registration/Registration.module.scss';

import { Spinner } from 'components';
import { PATH } from 'enum';
import {
  getIsAuth,
  getIsInitialized,
  getIsLoading,
  getUserAvatar,
  getUserEmail,
  getUserName,
} from 'store';
// import { getPage, getPageCount } from 'store/selectors';

export const Profile = memo(() => {
  const isAuth = useSelector(getIsAuth);
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const avatar = useSelector(getUserAvatar);
  console.log(avatar);

  /* const page = useSelector(getPage);
  const pageCount = useSelector(getPageCount);
  const maxCardsCount = useSelector(getMaxCardsCount);
  const minCardsCount = useSelector(getMinCardsCount);
  const packName = useSelector(getPackName);
  const sortPacks = useSelector(getSortPacks);
  const user_id = useSelector(getUserID); */

  const isLoading = useSelector(getIsLoading);
  const isInitialized = useSelector(getIsInitialized);
  // @ts-ignore
  // const packs = useSelector(state => state.packs);

  if (!isInitialized) {
    return <Spinner />;
  }

  if (!isAuth) {
    return <Navigate to={PATH.LOGIN} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  // // eslint-disable-next-line no-debugger
  // debugger;

  return (
    <div className={style.registrationForm}>
      <div className={style.container}>
        <h1>Profile</h1>
        {avatar && <img src="" alt="profile" />}
        <div>{userName}</div>
        <div>{userEmail}</div>
      </div>
    </div>
  );
});
