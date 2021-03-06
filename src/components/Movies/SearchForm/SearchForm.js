import React from 'react';
import iconSearch from '../../../images/svg/icon-search.svg';

function SearchForm() {
  return (
    <div className='search-form'>
      <form className='search-form__search'>
        <input
          type='search'
          className='search-form__search-input'
          placeholder='Фильм'
          required
        />
        <button type='submit' className='search-form__search-button link_hover'>
          <img src={iconSearch} alt='Иконка поиска' />
        </button>
      </form>
      <label className='search-form__checkbox'>
        <input type='checkbox' className='search-form__checkbox-input' />
        <span className='search-form__checkbox-text'>Короткометражки</span>
      </label>
    </div>
  );
}

export default SearchForm;
