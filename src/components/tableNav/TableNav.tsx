import React, { memo, useCallback, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setPackNameAC } from '../../store/reducers/packsReducer';

import st from './TableNav.module.scss';

import { AddPack, CustomButton, CustomTextInput, Modal } from 'components';
import { useTextInputDebounce } from 'hooks';
import { ReactComponent as AddIcon } from 'svg/add_black_18dp.svg';

export const TableNav = memo(() => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isActiveHandler = useCallback((): void => {
    setIsModalVisible(false);
  }, []);

  const delay = 250;
  const debouncedSearchValue = useTextInputDebounce(searchValue, delay);

  useEffect(() => {
    dispatch(setPackNameAC(debouncedSearchValue));
  }, [debouncedSearchValue]);
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
