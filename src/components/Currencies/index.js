import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

import './style.scss';

export default function Currencies({ currencies }) {
  // ici on veut passer d'un tableau d'objet à un tableau d'élément JSX
  // return React.createElement(Currency, { key: currency.name, ...currency });
  // avec le spread operator on vient déverser les propriétés d'un objet dans un autre
  // en gros un c/c de propriétés
  const currencyList = currencies.map((currency) => <Currency key={currency.name} {...currency} />);

  return (
    <div className="currencies">
      <p className="currencies__title">Currencies</p>
      <ul className="currencies__list">
        {currencyList}
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
  })).isRequired,
};
