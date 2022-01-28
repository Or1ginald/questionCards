import React, { memo } from 'react';

import s from './Table.module.scss';

import { CardPackType } from 'api/types';
import { TableButtons } from 'components';
import { ARRAY_FIRST_ELEMENT, ARRAY_ZERO_ELEMENT } from 'constants/base';
import { normalizeDate } from 'utils';

type TablePropsType = {
  cardPacks: CardPackType[];
  tableHeaders: { [x: string]: string };
  // handleDeleteButtonClick: (id: string) => void;
  setId: (id: string) => void;
  openDeleteModal: () => void;
  openUpdateModal: () => void;
};

export const Table = memo((props: TablePropsType) => {
  const {
    cardPacks,
    tableHeaders,
    // handleDeleteButtonClick,
    setId,
    openDeleteModal,
    openUpdateModal,
  } = props;

  // const dispatch = useDispatch();

  return (
    <table className={s.table}>
      <thead>
        <tr>
          {Object.entries(tableHeaders).map(tableHeader => (
            <th key={tableHeader[ARRAY_ZERO_ELEMENT]}>
              {tableHeader[ARRAY_FIRST_ELEMENT]}
            </th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cardPacks.map((el: CardPackType) => (
          // const onDeleteButtonClick = (): void => {
          //   dispatch(deletePackTC(el._id));
          // };
          // const onUpdateButtonClick = (): void => {
          //   updatePackTC(_id, name, setIsModalShown);
          // };
          <tr key={el._id}>
            <td>{el.name}</td>
            <td>{el.cardsCount}</td>
            <td>{normalizeDate(el.updated as string)}</td>
            <td>{el.user_name}</td>
            <td className={s.flexCell}>
              <TableButtons
                // handleDeleteButtonClick={handleDeleteButtonClick}
                item={el}
                setId={() => setId(el._id)}
                openDeleteModal={openDeleteModal}
                openUpdateModal={openUpdateModal}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});
