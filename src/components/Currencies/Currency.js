import React from 'react';
import PropTypes from 'prop-types';
export default function Currency({ name, rate, onToggleClick }) {
  const result = Math.round((rate * 1) * 100) / 100;
  return (
    <li className="currency" value={result} onClick={() => onToggleClick(name, result)}>{name}</li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};
