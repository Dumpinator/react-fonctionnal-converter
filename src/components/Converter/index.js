import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import Toggler from 'src/components/Toggler';

// import des données
import currenciesData from 'src/data/currencies';

import './style.scss';

// pour pouvoir avoir des données qui varient dans le temps
// on va devoir passer par un state
// il faut pour cela transformer notre composant fonction
// en composant class
export default class Converter extends React.Component {
  // /!\ CODE LEGACY
  // pour pouvoir créer un state, on doit passer par le constructor
  // constructor(props) {
  //   super(props);
  //   // le state est un objet où on va pouvoir stocker des données internes
  //   // au composant
  //   this.state = {
  //     open: true,
  //   };

  //   // on va donner le contexte d'exécution de la class à la méthode handleOnClickToggle
  //   this.handleOnClickToggle = this.handleOnClickToggle.bind(this);
  // }

  // handleOnClickToggle() {
  //   console.log('click');
  //   // quand on a des méthodes de class, on se retrouve avec des fonctions
  //   // et les fonction ES5 ont leur propre contexte d'exécution. Ici le this n'est pas le
  //   // même que celui de la class, donc "state" n'existe pas sur le contexte de la fonction
  //   this.state = false;
  // }

  // NOUVEAU CODE
  // grâce au plugin babel-class-properties on peut déclarer
  // des propriétés de class. Le state se déclare donc comme ceci
  state = {
    open: true,
    baseAmount: 1,
    currency: 'United States Dollar',
    search: '',
  }

  // cette fonction est en charge de changer la valeur "open" du state
  setOpen = () => {
    const { open } = this.state;

    // ici on utilise une des propriété des fonctions flêchée. Ces dernières
    // ne redéfinissent pas de contexte. Le this est donc le même que le contexte parent
    // on peut donc placer dans une propriété de class, une fonction flêchée
    // => pas de bind

    // On ne doit pas changer les valeur du state directement
    // React ne sera pas notifier => il ne fera pas de nouveau render
    // INTERDIT this.state = false;
    // il faut utiliser la méthode setState
    this.setState({
      open: !open,
    });
    // console.log(this.state);
  }

  // fonction en charge de modifier la valeur "currency" du state
  setCurrency = (value) => {
    // INTERDIT => React n'est pas notifié
    // this.state.currency = 'Australian Dollar';
    this.setState({
      currency: value,
    });
    // on a à disposition un callback
    // qui sera exécuté une fois que le state
    // sera changé
    // ,() => console.log(this.state)

    // attention setState est asynchrone
    // si on demande le state juste après
    // il sera égale au state d'avant
    // console.log(this.state);
  }

  // fonction en charge de modifier la valeur de search du state
  setSearch = (value) => {
    this.setState({
      search: value,
    });
  }

  makeConversion = () => {
    const { baseAmount, currency } = this.state;

    // ici on va chercher dans le tableau de currenciesData
    // l'objet qui aura la propriété "name" égale à "currency" du state
    // eslint-disable-next-line arrow-body-style
    const foundCurrency = currenciesData.find((money) => {
      // console.log(money.name === currency);
      return money.name === currency;
    });

    // return parseFloat((foundCurrency.rate * baseAmount).toFixed(2));
    return Math.round((foundCurrency.rate * baseAmount) * 100) / 100;
  }

  // dans un composant class, il faut passer par la méthode render
  // pour retourner le JSX
  // à chaque fois que le state change on réexécute la fonction render
  render() {
    const {
      open,
      baseAmount,
      currency,
      search,
    } = this.state;

    // on exécute la conversion et on stocke le résultat
    const value = this.makeConversion();

    return (
      <div className="converter">
        {/* React.createElement(Header, { baseAmount: 1 }) */}
        <Header baseAmount={baseAmount} />
        <Toggler onClickButton={this.setOpen} />
        {/*
          en JSX on peut faire de l'affichage conditionnel
          pour cela on utilise l'operateur conditionnel &&
          quand la valeur à gauche de l'opérateur vaut "true"
          alors on traite la valeur de droite
          sinon on s'arrête
        */}
        {open && (
          <Currencies
            currencies={currenciesData}
            changeCurrency={this.setCurrency}
            inputValue={search}
            onChangeInputValue={this.setSearch}
          />
        )}
        <Amount value={value} currency={currency} />
      </div>
    );
  }
}
