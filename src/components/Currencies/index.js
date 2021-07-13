import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

import './style.scss';

export default function Currencies({ currencies }) {
  return (
    <div className="currencies">
      <p className="currencies__title">Currencies</p>
      <ul className="currencies__list">
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
        <Currency />
      </ul>
    </div>
  );
}

Currencies.propTypes = {
  // on ne sait pas ce que contient le tableau
  // currencies: PropTypes.array.isRequired,

  // on sait ce que contient le tableau
  // currencies: PropTypes.arrayOf(PropTypes.object).isRequired,

  // on sait que le tableau contient des objets et on connait la forme de ces objets
  currencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  })).isRequired,
};
