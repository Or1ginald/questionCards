import { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { authMeTC } from '../../store/reducers/userReducer';
import style from '../registration/Registration.module.scss';

import { getUserAvatar, getUserEmail, getUserId, getUserName } from 'store';

export const Profile = memo(() => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const avatar = useSelector(getUserAvatar);

  if (!userId) {
    dispatch(authMeTC());
    return <div>authMe req</div>;
  }
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
