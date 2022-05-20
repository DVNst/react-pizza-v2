import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { changeSearch } from '../redux/slices/searchSlice';

function Header() {
  const searchText = useSelector((state) => state.search.searchText);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width={38} src="./img/pizza-logo.svg" alt="Pizza logo" />
            <div>
              <h1>React Pizza V2</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className="header__search">
          <svg
            className="header__search-icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 487.95 487.95"
            version="1.1"
            viewBox="0 0 487.95 487.95"
            xmlSpace="preserve">
            <path d="M481.8 453l-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z"></path>
          </svg>
          <input
            className="header__search-input"
            type="text"
            placeholder="Найти пиццу"
            value={searchText}
            onChange={(e) => dispatch(changeSearch(e.target.value))}
          />
          <button className="header__search-delete" onClick={(e) => dispatch(changeSearch(''))}>
            <svg
              className="header__delete-icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              enableBackground="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve">
              <path d="M286.17 256L505.752 36.418c8.331-8.331 8.331-21.839 0-30.17-8.331-8.331-21.839-8.331-30.17 0L256 225.83 36.418 6.248c-8.331-8.331-21.839-8.331-30.17 0-8.331 8.331-8.331 21.839 0 30.17L225.83 256 6.248 475.582c-8.331 8.331-8.331 21.839 0 30.17 8.331 8.331 21.839 8.331 30.17 0L256 286.17l219.582 219.582c8.331 8.331 21.839 8.331 30.17 0 8.331-8.331 8.331-21.839 0-30.17L286.17 256z"></path>
            </svg>
          </button>
        </div>
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter" />
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
