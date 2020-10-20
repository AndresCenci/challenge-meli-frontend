import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import logo from '../../assets/static/Logo_ML.png';
import ICSearch from '../../assets/static/ic_Search.png';

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = (e) => {
    if (searchTerm !== search && searchTerm !== '') {
      setSearch(searchTerm);
      history.push(`/items?search=${searchTerm}`);
    };
  };

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      handleClick(e);
    }
  };

  const handleHome = (e) => {
    history.push('/');
  };

  return (
    <header className='header'>
      <img src={logo} className='header-logo' alt='Mercado Libre' onClick={(e) => { handleHome(e); }} />
      <input
        type='text'
        className='header-search'
        placeholder='Nunca dejes de buscar'
        onKeyPress={(e) => { handleKeypress(e); }}
        onChange={(e) => { handleChange(e); }}
      />
      <button
        type='submit'
        className='button-search'
        alt='Buscar'
        onClick={(e) => { handleClick(e); }}
      >
        <img src={ICSearch} alt='Botón de buscar' />
      </button>
    </header>
  );
};
