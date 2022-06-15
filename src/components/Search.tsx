import React, { useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { changeSearch } from '../redux/slices/filterSlice';

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const inputSearch = useRef<HTMLInputElement>(null);

  const updateSearchTextValue = useCallback(
    debounce((value) => {
      dispatch(changeSearch(value));
    }, 250),
    [],
  );

  const changeSearchInput = (e: any) => {
    setInputValue(e.target.value);
    updateSearchTextValue(e.target.value);
  };

  const clickSearchDelete = () => {
    setInputValue('');
    updateSearchTextValue('');
    inputSearch.current?.focus();
  };

  const clickPressKey = (e: any) => {
    if (e.keyCode === 27) {
      clickSearchDelete();
    }
  };

  return (
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
        ref={inputSearch}
        value={inputValue}
        onChange={changeSearchInput}
        onKeyDown={clickPressKey}
        type="text"
        placeholder="Найти пиццу"
      />
      {inputValue && (
        <button className="header__search-delete" onClick={clickSearchDelete}>
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
      )}
    </div>
  );
}

export default Search;
