import React, { memo } from 'react';

import { ARRAY_ZERO_ELEMENT } from '../../../constants/base';

import s from './Table.module.scss';

import { CardPackType } from 'api/types';
import { TableButtons } from 'components';
// import { ARRAY_FIRST_ELEMENT, ARRAY_ZERO_ELEMENT } from 'constants/base';
import { normalizeDate } from 'utils';

type TableHeaderType = {
  key: string;
  label: string;
};

type TablePropsType = {
  cardPacks: CardPackType[]; // tableHeaders: { [x: string]: string };
  tableHeaders: TableHeaderType[];
  // handleDeleteButtonClick: (id: string) => void;
  setId: (id: string) => void;
  openDeleteModal: () => void;
  openUpdateModal: () => void;
  handleOnSortClick: (param: string) => void;
  sort: string;
};

export const Table = memo((props: TablePropsType) => {
  const {
    cardPacks,
    tableHeaders,
    // handleDeleteButtonClick,
    setId,
    openDeleteModal,
    openUpdateModal,
    sort,
    handleOnSortClick,
  } = props;

  const arrow = sort[ARRAY_ZERO_ELEMENT] === '0' ? '⬇' : '⬆';

  // const [sortKey, setSortKey] = useState('');
  // const [sortOrder, setSortOrder] = useState('');

  // const dispatch = useDispatch();
  const one = 1;

  return (
    <table className={s.table}>
      <thead>
        <tr>
          {tableHeaders.map(({ key, label }) => {
            const onSortButtonClick = (): void => {
              handleOnSortClick(key);
            };
            const tableHeader =
              key === sort.split('').splice(one).join('') ? label + arrow : label;
            return (
              <th key={key} onClick={onSortButtonClick}>
                {tableHeader}
              </th>
            );
          })}
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
