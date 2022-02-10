import React, { memo, useCallback, useState } from 'react';

import st from './TableNav.module.scss';

import { AddPack, CustomButton, CustomTextInput, Modal } from 'components';
import { ReactComponent as AddIcon } from 'svg/add_black_18dp.svg';

export const TableNav = memo(() => {
  const [searchValue, setSearchValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isActiveHandler = useCallback((): void => {
    setIsModalVisible(false);
  }, []);
  return (
    <div className={st.tableNav}>
      <CustomTextInput
        placeholder="Search"
        type="text"
        onChange={setSearchValue}
        value={searchValue}
      />
      <CustomButton title="Add Pack" onClick={() => setIsModalVisible(true)}>
        <AddIcon />
      </CustomButton>
      <Modal isActive={isModalVisible} setIsActive={setIsModalVisible}>
        <AddPack handleModalClose={isActiveHandler} />
      </Modal>
    </div>
  );
});
