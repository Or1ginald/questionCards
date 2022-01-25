import React, { memo, useState, KeyboardEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getIsLoading } from '../../../store';
import { addPackTC } from '../../../store/reducers/packsReducer';

import st from './addPack.module.scss';

import { CustomButton, CustomTextInput } from 'components';

type AddPackPropsType = {
  handleModalClose: () => void;
};

export const AddPack = memo((props: AddPackPropsType) => {
  const { handleModalClose } = props;
  const dispatch = useDispatch();

  const [packName, setPackName] = useState('');

  const isLoading = useSelector(getIsLoading);

  const onAddButtonClick = (): void => {
    dispatch(addPackTC(packName, handleModalClose));
    setPackName('');
  };

  const onCancelButtonClick = (): void => {
    setPackName('');
    handleModalClose();
  };

  const onEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      onAddButtonClick();
    }
  };

  return (
    <div className={st.addPack}>
      <h1>Create new Pack</h1>
      <CustomTextInput
        placeholder="Pack Name"
        type="text"
        onChange={setPackName}
        value={packName}
        onKeyPress={onEnterKeyPress}
      />
      <div className={st.buttonsContainer}>
        <CustomButton title="Cancel" onClick={onCancelButtonClick} disabled={isLoading} />
        <CustomButton title="Add" onClick={onAddButtonClick} disabled={isLoading} />
      </div>
    </div>
  );
});
