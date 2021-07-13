import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import './style.scss';

export default function Converter() {
  return (
    <div className="converter">
      <Header />
      <Currencies />
      <Amount />
    </div>
  );
}
