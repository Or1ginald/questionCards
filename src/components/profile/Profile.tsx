import { memo } from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import style from '../registration/Registration.module.scss';

import { Spinner } from 'components';
import { PATH } from 'enum';
import {
  getIsAuth,
  getIsInitialized,
  // getIsLoading,
  getUserAvatar,
  getUserEmail,
  getUserName,
} from 'store';

export const Profile = memo(() => {
  // const dispatch = useDispatch();

  const isAuth = useSelector(getIsAuth);
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const avatar = useSelector(getUserAvatar);
  // const isLoading = useSelector(getIsLoading);
  const isInitialized = useSelector(getIsInitialized);

  // useEffect(
  //   () =>
  //     function cleanup() {
  //       dispatch(setErrorAC(null));
  //     },
  //   [],
  // );

  if (!isInitialized) {
    return <Spinner />;
    // return <h1>HUI</h1>;
  }

  if (!isAuth) {
    return <Navigate to={PATH.LOGIN} />;
  }

  // if (isLoading) {
  //   return <Spinner />;
  //   // return <h1>HUI</h1>;
  // }

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
