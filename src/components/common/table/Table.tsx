import React, { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { deletePackTC } from '../../../store/reducers/packsReducer';
import { CustomButton } from '../customButton';

import s from './Table.module.scss';

import { CardPackType } from 'api/types';
import { getUserId } from 'store/selectors';
import { ReactComponent as DeleteIcon } from 'svg/delete_black_18dp.svg';
import { ReactComponent as UpdIcon } from 'svg/edit_black_18dp.svg';
import { ReactComponent as WatchIcon } from 'svg/visibility_black_18dp.svg';

type TablePropsType = {
  cardPacks: CardPackType[];
};

export const Table = memo((props: TablePropsType) => {
  const { cardPacks } = props;

  const dispatch = useDispatch();

  const userProfileId = useSelector(getUserId);

  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Cards</th>
          <th>Updated</th>
          <th>Creator</th>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <th />
        </tr>
      </thead>
      <tbody>
        {cardPacks.map(
          ({ name, cardsCount, updated, user_name, _id, more_id }: CardPackType) => {
            const onDeleteButtonClick = (): void => {
              dispatch(deletePackTC(_id));
            };
            // const onUpdateButtonClick = () => {};
            return (
              <tr key={_id}>
                <td>{name}</td>
                <td>{cardsCount}</td>
                <td>{updated}</td>
                <td>{user_name}</td>
                <td className={s.flexCell}>
                  <CustomButton title="Inspect">
                    <WatchIcon />
                  </CustomButton>
                  {more_id === userProfileId && (
                    <CustomButton title="Update">
                      <UpdIcon />
                    </CustomButton>
                  )}
                  {more_id === userProfileId && (
                    <CustomButton title="Delete" onClick={onDeleteButtonClick}>
                      <DeleteIcon />
                    </CustomButton>
                  )}
                </td>
              </tr>
            );
          },
        )}
      </tbody>
    </table>
  );
});
