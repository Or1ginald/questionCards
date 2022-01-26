import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import st from './deletePack.module.scss';

import { CustomButton } from 'components';
import { getIsLoading } from 'store/selectors';

type DeletePackPropsType = {
  handleModalClose: () => void;
  onDeleteButtonClick: () => void;
};

export const DeletePack = memo((props: DeletePackPropsType) => {
  const { handleModalClose, onDeleteButtonClick } = props;

  const isLoading = useSelector(getIsLoading);

  // const onDeleteButtonClick = (): void => {};

  const onCancelButtonClick = (): void => {
    handleModalClose();
  };

  return (
    <div className={st.deletePack}>
      <h1>Are you sure?</h1>
      <div className={st.buttonsContainer}>
        <CustomButton title="Cancel" onClick={onCancelButtonClick} disabled={isLoading} />
        <CustomButton title="Delete" onClick={onDeleteButtonClick} disabled={isLoading} />
      </div>
    </div>
  );
});
