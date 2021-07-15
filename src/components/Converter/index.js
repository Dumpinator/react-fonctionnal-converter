import React, { useState, useEffect } from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

// import des données
import currenciesData from 'src/data/currencies';

import './style.scss';

export default function Converter() {

  const [data, ] = useState(currenciesData);
  const [currency, setCurrency] = useState('Select your devise');
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('component chargé');
    return () => {}
  }, [currency, value])

  const onToggleClick = (name, rate) => {
    setCurrency(name);
    setValue(rate);
  }

  return (
    <div className="converter">
      <Header baseAmount={1}/>
      <Currencies currencies={data} onToggleClick={onToggleClick} />
      <Amount value={value} currency={currency} />
    </div>
  );
}