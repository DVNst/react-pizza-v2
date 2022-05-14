import React, { useState } from 'react';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            onClick={() => setActiveIndex(i)}
            className={activeIndex === i ? 'active' : ''}
            key={i}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
