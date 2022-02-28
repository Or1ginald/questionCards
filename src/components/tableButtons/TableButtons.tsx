import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import { CustomButton } from '../common';

import { CardPackType } from 'api/types';
import { getIsLoading, getUserId } from 'store/selectors';
import { ReactComponent as DeleteIcon } from 'svg/delete_black_18dp.svg';
import { ReactComponent as UpdIcon } from 'svg/edit_black_18dp.svg';
import { ReactComponent as WatchIcon } from 'svg/visibility_black_18dp.svg';

type TableButtonsPropsType = {
  item: CardPackType;
  setId: () => void;
  openDeleteModal: () => void;
  openUpdateModal: () => void;
  onLearnClickHandler?: () => void;
};

export const TableButtons = memo((props: TableButtonsPropsType) => {
  const { item, setId, openDeleteModal, openUpdateModal, onLearnClickHandler } = props;

  const isLoading = useSelector(getIsLoading);
  const userProfileId = useSelector(getUserId);

  const onUpdateButtonClick = (): void => {
    setId();
    openUpdateModal();
  };
  const onDeleteButtonClick = (): void => {
    setId();
    openDeleteModal();
  };

  return (
    <
      // style={{
      //   display: 'flex',
      //   justifyContent: 'start',
      //   alignItems: 'start',
      //   width: '100%',
      //   gap: '.5em',
      // }}
    >
      {onLearnClickHandler && (
        <CustomButton title="Inspect" disabled={isLoading}>
          <WatchIcon />
        </CustomButton>
      )}
      {item.more_id === userProfileId && (
        <CustomButton title="Update" disabled={isLoading} onClick={onUpdateButtonClick}>
          <UpdIcon />
        </CustomButton>
      )}
      {item.more_id === userProfileId && (
        <CustomButton title="Delete" onClick={onDeleteButtonClick} disabled={isLoading}>
          <DeleteIcon />
        </CustomButton>
      )}
    </>
  );
});
