'use strict' 

const converter = (money) => {
  console.log('закинул денежку');

  const moneyChange = (eur) => {
    if (eur >= 1) {
      return 73 * 1.2 * eur;
    }
  };

  const change = moneyChange(money);
  return `${change}`;
}

const result = converter(5);
console.log(result);