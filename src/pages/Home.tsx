import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/PizzaSkeleton';
import ErrorBlock from '../components/ErrorBlock';

import { fetchPizzasByFiltrs, selectorPizzas } from '../redux/slices/pizzasSlice';
import { selectFilters } from '../redux/slices/filterSlice';

type PizzaItem = { id: string; imageUrl: string; title: string; types: number[]; sizes: number[]; price: number };

const Home: React.FC = () => {
  const { activeSort, activeFilter, searchText } = useSelector(selectFilters);
  const { items, status } = useSelector(selectorPizzas);

  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
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
        {status === 'success' && items.map((pizza: PizzaItem) => <PizzaBlock {...pizza} key={pizza.id} />)}
        {status === 'error' && <ErrorBlock />}
      </div>
    </>
  );
}

export default Home;
