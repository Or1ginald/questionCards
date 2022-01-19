import React, { memo } from 'react';

import { CustomButton } from '../customButton';

import s from './Table.module.scss';

import { CardPackType } from 'api/types';

type TablePropsType = {
  cardPacks: CardPackType[];
};

export const Table = memo((props: TablePropsType) => {
  const { cardPacks } = props;
  const a = 'Title';
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>{a}</th>
          <th>Cards</th>
          <th>Updated</th>
          <th>Creator</th>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <th />
        </tr>
      </thead>
      <tbody>
        {cardPacks.map(({ name, cardsCount, updated, user_name, _id }: CardPackType) => (
          <tr key={_id}>
            <td>{name}</td>
            <td>{cardsCount}</td>
            <td>{updated}</td>
            <td>{user_name}</td>
            <td>
              <CustomButton title="Dig in" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});
