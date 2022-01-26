import React, { KeyboardEvent, memo, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import style from './PacksList.module.scss';

import { TableSidebar, Table, TableNav, Modal, DeletePack, UpdatePack } from 'components';
import { PATH } from 'enum';
import { deletePackTC, setPacksTC, updatePackTC } from 'store/middlewares';
import { getCardPacks, getIsAuth } from 'store/selectors';

export const PacksList = memo(() => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const cardPacks = useSelector(getCardPacks);

  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isUpdateModalShown, setIsUpdateModalShown] = useState(false);

  const [packId, setPackId] = useState('');

  const tableHeaders = {
    name: 'Title',
    cardsCount: 'Cards',
    updated: 'Update',
    user_name: 'Creator',
  };

  useEffect(() => {
    dispatch(setPacksTC());
  }, []);

  const onEscapePress = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Escape') {
      setIsUpdateModalShown(false);
    }
  };

  const onDeleteButtonClick = (): void => {
    dispatch(deletePackTC(packId, () => setIsDeleteModalShown(false)));
  };
  const onUpdateButtonClick = (packName: string): void => {
    dispatch(updatePackTC(packId, packName, () => setIsUpdateModalShown(false)));
  };

  if (!isAuth) {
    return <Navigate to={PATH.LOGIN} />;
  }

  // if (isLoading) {
  //   return <Spinner />;
  // }
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-tabindex */}
      <div className={style.packsList} onKeyPress={onEscapePress} tabIndex={0}>
        <TableSidebar />
        <TableNav />
        <Table
          cardPacks={cardPacks}
          tableHeaders={tableHeaders}
          // handleDeleteButtonClick={(id: string) => onDeleteButtonClick(id)}
          setId={setPackId}
          openDeleteModal={() => setIsDeleteModalShown(true)}
          openUpdateModal={() => setIsUpdateModalShown(true)}
        />
      </div>
      <Modal isActive={isDeleteModalShown} setIsActive={setIsDeleteModalShown}>
        <DeletePack
          handleModalClose={() => setIsDeleteModalShown(false)}
          onDeleteButtonClick={onDeleteButtonClick}
        />
      </Modal>
      <Modal isActive={isUpdateModalShown} setIsActive={setIsUpdateModalShown}>
        <UpdatePack
          handleModalClose={() => setIsUpdateModalShown(false)}
          handleUpdateButtonPress={onUpdateButtonClick}
        />
      </Modal>
    </>
  );
});
