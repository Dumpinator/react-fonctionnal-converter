import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import './style.scss';

export default function Converter() {
  return (
    <div className="converter">
      {/* React.createElement(Header, { baseAmount: 1 }) */}
      <Header baseAmount={1} />
      <Currencies />
      <Amount />
    </div>
  );
}
