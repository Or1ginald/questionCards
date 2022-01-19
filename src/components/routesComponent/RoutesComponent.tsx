import React, { memo } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { PacksList } from '../packsList';

import s from './RoutesComponent.module.scss';

import {
  CreateNewPassword,
  Login,
  PasswordRecovery,
  Profile,
  Registration,
} from 'components';
import { PATH } from 'enum';
import { ReturnComponentType } from 'types';

export const RoutesComponent = memo((): ReturnComponentType => {
  console.log('fff');

  return (
    <div className={s.container}>
      <Routes>
        <Route element={<Navigate to={PATH.PROFILE} />} path="/" />
        <Route element={<Navigate to={PATH.PROFILE} />} path="/questionCards" />
        <Route element={<Profile />} path={PATH.PROFILE} />
        <Route element={<Registration />} path={PATH.REGISTRATION} />
        <Route element={<Login />} path={PATH.LOGIN} />
        <Route element={<PacksList />} path={PATH.PACKS_LIST} />
        {/* <Route element={<Table />} path={PATH.PACKS_LIST} /> */}
        <Route element={<PasswordRecovery />} path={PATH.PASSWORD_RECOVERY} />
        <Route path={PATH.CREATE_NEW_PASSWORD} element={<CreateNewPassword />}>
          <Route path=":token" element={<CreateNewPassword />} />
        </Route>
      </Routes>
    </div>
  );
});
