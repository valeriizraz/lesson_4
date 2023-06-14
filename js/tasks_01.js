'use strict' 

const converter = (money) => {
  console.log('закинул денежку');

  const moneyChange = (eur) => {
    if (eur >= 1) {
      eur = 73 * 1.2 * eur;
      return 'Рубли';
    }
  };

  const change = moneyChange(money);
  return `${change}`;
}

const result = converter(15);
console.log(result);