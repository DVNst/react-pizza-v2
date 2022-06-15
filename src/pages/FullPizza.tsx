import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { addPizza, selectCartCountPizzas } from '../redux/slices/cardSlice';
import { fetchPizzaByID, selectorPizzas } from '../redux/slices/pizzasSlice';

import { typesPizza } from '../variables';
const temp = { imageUrl: '', title: '', types: [], sizes: [], price: 0 };

type TypeItem = number;
type SizeItem = number;
// type PizzaItem = { id: string; imageUrl: string; title: string; types: TypeItem[]; sizes: SizeItem[]; price: number };

const FullPizza: React.FC = () => {
  const { items, status } = useSelector(selectorPizzas);

  const [activeTypePizza, setActiveTypePizza] = useState(0);
  const [activeSizePizza, setActiveSizePizza] = useState(0);

  const { imageUrl, title, types, sizes, price } = items[0] ? items[0] : temp;

  console.log('title', title);

  const { id } = useParams();
  const count = useSelector(selectCartCountPizzas(id));

  const navigate = useNavigate();

  const dispatch = useDispatch();

  if (status === 'error') {
    setTimeout(() => navigate('/', { replace: false }), 2500);
  }

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchPizzaByID({ id }));
  }, []);

  const clickAddPizza = () => {
    dispatch(
      addPizza({ id, imageUrl, title, type: activeTypePizza, size: sizes[activeSizePizza], price }),
    );
  };

  return (
    <div className="container">
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>

      {status === 'loading' && <h2>Загрузка...</h2>}
      {status === 'error' && <h2>ОШИБКА Загрузки!</h2>}
      {status === 'success' && items &&
        <>
          <h2 className="content__title">{title}</h2>
          <img className="" src={imageUrl} alt="Pizza" />
          <div className="pizza-block__selector">
            <ul>
              {types.map((type: TypeItem, i: number) => (
                <li
                  onClick={() => setActiveTypePizza(i)}
                  className={activeTypePizza === i ? 'active' : ''}
                  key={i}>
                  {typesPizza[type]}
                </li>
              ))}
            </ul>
            <ul>
              {sizes.map((size: SizeItem, i: number) => (
                <li
                  onClick={() => setActiveSizePizza(i)}
                  className={activeSizePizza === i ? 'active' : ''}
                  key={i}>
                  {size} см.
                </li>
              ))}
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {price} ₽</div>
            <div className="button button--outline button--add" onClick={clickAddPizza}>
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>{count}</i>
            </div>
          </div>
        </>}
    </div >
  );
}

export default FullPizza;
