import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeSort } from "../redux/slices/filterSlice";

import { sortingTypes } from "../variables";

function SortMenu({ setOpenSortMenu }) {
  const activeSort = useSelector((state) => state.filter.activeSort);
  const dispatch = useDispatch();

 const sortMenuRef = useRef();

  useEffect(() => {
    const handlingMouseClick = (evt) => {
      if (!evt.path.includes(sortMenuRef.current)) {
        setOpenSortMenu(false);
      }
    };

    window.addEventListener('mousedown', handlingMouseClick);

    return () => window.removeEventListener('mousedown', handlingMouseClick);
  }, []);

  const onClickSortItem = (i) => {
    dispatch(changeSort(i));
    setOpenSortMenu(false);
  };


  return (
    <div className="sort__popup" ref={sortMenuRef}>
      <ul>
        {sortingTypes.map((sortingType, i) => (
          <li
            onClick={() => onClickSortItem(i)}
            className={activeSort === i ? "active" : ""}
            key={i}
          >
            {sortingType.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortMenu;
