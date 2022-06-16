import React, { MouseEventHandler, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeSort, selectActiveSort } from '../redux/slices/filterSlice';

import { sortingTypes } from '../variables';

type SortMenuProps = { setOpenSortMenu: (value: boolean) => void; };

const SortMenu: React.FC<SortMenuProps> = ({ setOpenSortMenu }) => {
  const activeSort = useSelector(selectActiveSort);
  const dispatch = useDispatch();

  const sortMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlingMouseClick = (evt: MouseEvent) => {
      if (sortMenuRef.current && !evt.composedPath().includes(sortMenuRef.current)) {
        setOpenSortMenu(false);
      }
    };

    window.addEventListener('mousedown', handlingMouseClick);

    return () => window.removeEventListener('mousedown', handlingMouseClick);
  }, []);

  const onClickSortItem = (i: number) => {
    dispatch(changeSort(i));
    setOpenSortMenu(false);
  };

  return (
    <div className="sort__popup" ref={sortMenuRef}>
      <ul>
        {sortingTypes.map((sortingType, i) => (
          <li
            onClick={() => onClickSortItem(i)}
            className={activeSort === i ? 'active' : ''}
            key={i}>
            {sortingType.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortMenu;
