import React, { memo, useState } from 'react';

import { useSelector } from 'react-redux';

import st from './UpdatePack.module.scss';

import { CustomButton, CustomTextInput } from 'components';
import { getIsLoading } from 'store/selectors';

type UpdatePackPropsType = {
  handleModalClose: () => void;
  handleUpdateButtonPress: (packName: string) => void;
};

export const UpdatePack = memo((props: UpdatePackPropsType) => {
  const { handleModalClose, handleUpdateButtonPress } = props;

  const [packName, setPackName] = useState('');

  const isLoading = useSelector(getIsLoading);

  const onCancelButtonClick = (): void => {
    setPackName('');
    handleModalClose();
  };

  const onUpdateButtonClick = (): void => {
    handleUpdateButtonPress(packName);
  };

  return (
    <div className={st.updatePack}>
      <h1>Change pack&apos;s name</h1>
      <CustomTextInput
        placeholder="Pack Name"
        type="text"
        onChange={setPackName}
        value={packName}
      />
      <div className={st.buttonsContainer}>
        <CustomButton title="Cancel" onClick={onCancelButtonClick} disabled={isLoading} />
        <CustomButton
          title="Change name"
          onClick={onUpdateButtonClick}
          disabled={isLoading}
        />
      </div>
    </div>
  );
});
