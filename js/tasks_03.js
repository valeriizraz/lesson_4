'use strict'

const calculate = (totalPrice, quantityOfGoods, promoCode) => {

  const quantity = (quant) => {
    if (quant >= 10) {
      price *= 0.03;
      return 'Общая цена';
    }
    console.log(totalPrice);
  };

  const quantityRes = quantity();

  const totPrice = (price) => {
    if (price >= 30000) {
      totalPrice = price * 0.15;
      return 'Общая цена';
    }
  };

  const TPrice = totPrice();
  console.log(totalPrice);

  // const promoCd = () 







    return `${totalPrice}`;
}

// const result = calculate(5000, 13, 'ndfk');
// console.log(result); 
