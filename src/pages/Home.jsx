import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/PizzaSkeleton';
import ErrorBlock from '../components/ErrorBlock';

import { fetchPizzasByFiltrs } from '../redux/slices/pizzasSlice';

function Home() {
  const { activeSort, activeFilter, searchText } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.pizzas);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzasByFiltrs({ activeSort, activeFilter, searchText }));
  }, [dispatch, activeSort, activeFilter, searchText]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === 'loading' && [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />)}
        {status === 'success' && items.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
        {status === 'error' && <ErrorBlock />}
      </div>
    </>
  );
}

export default Home;
