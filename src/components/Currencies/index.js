import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

import './style.scss';

export default function Currencies({
  currencies,
  changeCurrency,
  inputValue,
  onChangeInputValue,
}) {
  // ici on veut passer d'un tableau d'objet à un tableau d'élément JSX
  // return React.createElement(Currency, { key: currency.name, ...currency });
  // avec le spread operator on vient déverser les propriétés d'un objet dans un autre
  // en gros un c/c de propriétés
  const currencyList = currencies.map((currency) => (
    <Currency
      key={currency.name}
      onClickCurrency={changeCurrency}
      {...currency}
    />
  ));

  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  return (
    <div className="currencies">
      <input
        type="text"
        placeholder="Rechercher une devise"
        className="currencies__input"
        value={inputValue}
        onChange={handleOnChange}
      />
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
  changeCurrency: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};
