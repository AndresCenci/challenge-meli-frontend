import React from 'react';
import PropTypes, { string } from 'prop-types';
import './styles.scss';

export const Categories = ({ categories }) => {

  return (
    <section className='categories'>
      {
        categories !== undefined &&
        categories.length > 0 &&
        categories.map((element, i) => {
          return (
            categories.length === i + 1 ?
              <span className='categories-item-bold' key={element}>{element}</span> : (
                <span className='categories-item' key={element}>
                  {element}
                  &nbsp;&nbsp;&gt;&nbsp;&nbsp;
                </span>
              )
          );
        })
      }
    </section>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(string),
};
