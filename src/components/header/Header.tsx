import { Link } from 'react-router-dom';

import style from './Header.module.scss';

import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => (
  <div className={style.header}>
    <div className={style.container}>
      <Link to="/index">Logo</Link>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="packs">Packs</Link>
      </nav>
      <Link to="logout">Log out</Link>
    </div>
  </div>
);
