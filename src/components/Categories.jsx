import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/slices/filterSlice';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const activeFilter = useSelector((state) => state.filter.activeFilter);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            onClick={() => dispatch(changeFilter(i))}
            className={activeFilter === i ? 'active' : ''}
            key={i}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
