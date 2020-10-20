import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import '../../assets/loading.scss';
import { Categories } from '../Categories';
import { useFetch } from '../../hooks/useFetch';
import { URL_API } from '../../config';
import FreeShippingImage from '../../assets/static/ic_shipping@2x.png.png.png';

export const ItemList = ({ search }) => {
  const { data, loading, error } = useFetch(`${URL_API}?q=${search}`);
  const history = useHistory();

  const handleClick = (e, id) => {
    e.preventDefault;
    history.push(`/items/${id}`);
  };

  if (search === undefined) {
    return (null);
  }

  if (error !== '') {
    return (
      <h1 className='loading'>No se encontraron datos</h1>
    );
  }

  if (loading) {
    return (
      <h1 className='loading'>Cargando...</h1>
    );
  }

  return (
    <ul className='card-list'>
      <Categories categories={data.categories} />
      {
        data.items !== undefined &&
        data.items.length > 0 &&
        data.items.map((item) => {
          return (
            <li key={item.id} className='card-item'>
              <img src={item.picture} alt='foto del producto' className='card-image' onClick={(e) => { handleClick(e, item.id); }} />
              <div className='card-info' alt='información del producto'>
                <span className='card-price' role='generic' onClick={(e) => { handleClick(e, item.id); }}>
                  {item.price.amount}
                  {
                    item.free_shipping &&
                    <img src={FreeShippingImage} alt='Envío gratis' className='card-free' />
                  }
                </span>
                <div className='card-title'>{item.title}</div>
                <div className='card-condition'>{item.condition === 'new' ? 'Nuevo' : 'Usado'}</div>
              </div>
              <span className='card-sold'>
                {item.sold_quantity}
                {' '}
                vendidos
              </span>
            </li>
          );
        })
      }
    </ul>
  );
};

ItemList.propTypes = {
  search: PropTypes.string,
};
