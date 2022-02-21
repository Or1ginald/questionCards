import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { logoutTC } from '../../store/reducers/userReducer';

import style from './Header.module.scss';

import { getIsAuth } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);

  return (
    <div className={style.header}>
      <div className={style.container}>
        <nav>
          <Link to="/">Logo</Link>

          {isAuth && (
            <>
              <Link to="profile">Profile</Link>
              <Link to="packsList">Packs</Link>
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div className={style.logout} onClick={() => dispatch(logoutTC())}>
                Logout
              </div>
            </>
          )}
        </nav>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      </div>
    </div>
  );
};
