import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFilter, selectActiveFilter } from '../redux/slices/filterSlice';

const Categories: React.FC = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const activeFilter = useSelector(selectActiveFilter);
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
