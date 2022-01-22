import React, { memo, useState } from 'react';

import { useDispatch } from 'react-redux';

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

  const onAddButtonClick = (): void => {
    dispatch(addPackTC(packName, handleModalClose));
    setPackName('');
  };

  const onCancelButtonClick = (): void => {
    setPackName('');
    handleModalClose();
  };

  return (
    <div className={st.addPack}>
      <h1>Create new Pack</h1>
      <CustomTextInput
        placeholder="Pack Name"
        type="text"
        onChange={setPackName}
        value={packName}
      />
      <div className={st.buttonsContainer}>
        <CustomButton title="Cancel" onClick={onCancelButtonClick} />
        <CustomButton title="Add" onClick={onAddButtonClick} />
      </div>
    </div>
  );
});
