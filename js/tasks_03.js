'use strict'

const myShop = (price, quantity, prom) => {
  if (quantity >= 10) {
    return price * 0.97;
  }
  if (price >= 30000) {
    return price * 0.85;
  }
  if (prom === 'METHED') {
    return price * 0.9;
  }
  if (prom === 'G3H2Z1' && price >= 2000) {
    return price - 500; 
  }  
}  

const shop = myShop(500, 2, 'METHED');
console.log(shop);
