import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { logoutTC } from '../../store/reducers/userReducer';

import style from './Header.module.scss';

import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
  const dispatch = useDispatch();
  return (
    <div className={style.header}>
      <div className={style.container}>
        <Link to="/index">Logo</Link>
        <nav>
          <Link to="profile">Profile</Link>
          <Link to="packsList">Packs</Link>
        </nav>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div className={style.logout} onClick={() => dispatch(logoutTC())}>
          Log out
        </div>
      </div>
    </div>
  );
};
