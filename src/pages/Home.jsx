import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/PizzaSkeleton';

import { sortingTypes } from '../variables';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { activeFilter, searchText, activeSort } = useSelector((state) => state.filter);

  useEffect(() => {
    setIsLoading(true);
    const sort = `?sortBy=${sortingTypes[activeSort].sortProperty}&order=asc`; //desc
    const filter = activeFilter && `&category=${activeFilter}`;
    const search = searchText && `&title=${searchText}`;

    fetch(`https://62815ab29fac04c65404537c.mockapi.io/pizzas${sort}${filter}${search}`)
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeSort, activeFilter, searchText]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />)
          : pizzas.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
    </>
  );
}

export default Home;
