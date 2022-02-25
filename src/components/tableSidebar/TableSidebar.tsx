import React, { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getUserId } from '../../store';
import { setUserIdAC } from '../../store/reducers/packsReducer';

import st from './tableSidebar.module.scss';

import { CustomButton } from 'components';

export const TableSidebar = memo(() => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);

  const getUsersPacks = (): void => {
    dispatch(setUserIdAC(userId as string));
  };
  const getAllPacks = (): void => {
    dispatch(setUserIdAC(''));
  };
  return (
    <div className={st.tableSidebar}>
      <div className={st.tableSidebarContainer}>
        <div className={st.center}>
          <div>Show packs</div>
          <div className={st.packsNavigation}>
            <CustomButton title="My" onClick={getUsersPacks} />
            <CustomButton title="All" onClick={getAllPacks} />
          </div>
        </div>
      </div>
    </div>
  );
});
