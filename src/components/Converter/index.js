import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

// import des données
import currenciesData from 'src/data/currencies';

import './style.scss';

// pour pouvoir avoir des données qui varient dans le temps
// on va devoir passer par un state
// il faut pour cela transformer notre composant fonction
// en composant class
export default class Converter extends React.Component {
  // pour pouvoir créer un state, on doit passer par le constructor
  constructor(props) {
    super(props);
    // le state est un objet où on va pouvoir stocker des données internes
    // au composant
    this.state = {
      open: true,
    };
  }

  // dans un composant class, il faut passer par la méthode render
  // pour retourner le JSX
  // à chaque fois que le state change on réexécute la fonction render
  render() {
    const { open } = this.state;

    return (
      <div className="converter">
        {/* React.createElement(Header, { baseAmount: 1 }) */}
        <Header baseAmount={1} />
        {/* en JSX on peut faire de l'affichage conditionnel */}
        {open && <Currencies currencies={currenciesData} /> }
        <Amount value={1.09} currency="United States Dollar" />
      </div>
    );
  }
}
