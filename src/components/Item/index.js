import React from 'react';
import './styles.scss';
import '../../assets/loading.scss';
import { URL_API } from '../../config';
import { useFetch } from '../../hooks/useFetch';

export const Item = ({ id }) => {
  const { data, loading, error } = useFetch(`${URL_API}/${id}`);

  if (id === undefined) {
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
    <section className='item'>
      {
        data.item !== undefined && (
          <>
            <div key={data.item.id} className='item-data'>
              <img src={data.item.picture} alt='foto del producto' className='item-img' />
              <div className='item-info'>
                <span className='item-condition'>
                  {data.item.condition === 'new' ? 'Nuevo' : 'Usado'}
                  {' - '}
                  {data.item.sold_quantity}
                  {' '}
                  vendidos
                </span>
                <div className='item-title'>{data.item.title}</div>
                <div className='item-price'>{data.item.price.amount}</div>
                <button type='button' className='item-button'>Comprar</button>
              </div>
            </div>

            <div key={data.item.id} className='item-description'>
              <div className='item-description-title'>Descripción del producto</div>
              <p className='item-description-text'>{data.item.description}</p>
            </div>
          </>
        )
      }
    </section>
  );
};
