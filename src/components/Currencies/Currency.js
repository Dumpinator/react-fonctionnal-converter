import React from 'react';
import PropTypes from 'prop-types';

export default function Currency({ name, onClickCurrency }) {
  // on prépare un handler qui sera exécuté à chaque fois qu'on clique sur le li
  const handleOnClick = () => {
    onClickCurrency();
  };

  return (
    <li
      className="currency"
      onClick={handleOnClick}
    >
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  onClickCurrency: PropTypes.func.isRequired,
};
