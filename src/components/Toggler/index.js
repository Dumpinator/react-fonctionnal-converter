import React from 'react';
import PropTypes from 'prop-types';

export default function Toggler({ onClickButton }) {
  // je prépare un handler qui sera exécuté
  // à chaque fois que je clique sur le bouton
  const handleOnClick = () => {
    console.log('je clique sur le bouton');
    onClickButton();
  };

  return (
    <button
      type="button"
      onClick={handleOnClick}
    >
      Toggle List
    </button>
  );
}

Toggler.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};
