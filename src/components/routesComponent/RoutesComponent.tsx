import { memo } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import s from './RoutesComponent.module.scss';

import { Profile, Registration } from 'components';
import { PATH } from 'enum';

export const RoutesComponent = memo(() => (
  <div className={s.container}>
    <Routes>
      <Route element={<Navigate to={PATH.PROFILE} />} path="/" />
      <Route element={<Profile />} path={PATH.PROFILE} />
      <Route element={<Registration />} path={PATH.REGISTRATION} />
    </Routes>
  </div>
));
