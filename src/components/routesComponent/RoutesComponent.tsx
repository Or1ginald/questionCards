import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import s from './RoutesComponent.module.scss';

import { Login, PasswordRecovery, Profile, Registration } from 'components';
import { PATH } from 'enum';
import { ReturnComponentType } from 'types';

export const RoutesComponent = (): ReturnComponentType => (
  <div className={s.container}>
    <Routes>
      <Route element={<Navigate to={PATH.PROFILE} />} path="/" />
      <Route element={<Profile />} path={PATH.PROFILE} />
      <Route element={<Registration />} path={PATH.REGISTRATION} />
      <Route element={<Login />} path={PATH.LOGIN} />
      <Route element={<PasswordRecovery />} path={PATH.PASSWORD_RECOVERY} />
    </Routes>
  </div>
);
