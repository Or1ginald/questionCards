import React, { memo } from 'react';

import st from './tableSidebar.module.scss';

import { CustomButton } from 'components';

export const TableSidebar = memo(() => {
  const a = 'Set cards in a packs';
  return (
    <div className={st.tableSidebar}>
      <div className={st.tableSidebarContainer}>
        <div className={st.center}>
          <div>Show packs</div>
          <div className={st.packsNavigation}>
            <CustomButton title="My" />
            <CustomButton title="All" />
          </div>
        </div>
        <div className={st.center}>
          <div>{a}</div>
          <input type="range" />
        </div>
      </div>
    </div>
  );
});
