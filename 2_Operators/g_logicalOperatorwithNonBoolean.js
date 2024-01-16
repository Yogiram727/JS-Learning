// Falsy (false)
//undefined
//null
//0
//fasle
//''
//NaN

//if we use any of these value js will treat them as falsy

//Anyting that is not falsy -> Truthy

console.log(false || true);
console.log('Ram' || false);
console.log(false || 1);
console.log(false || 1 || 2); //short circuit

let userColor =undefined;
let defaultColor='blue';
let currentColor= userColor || defaultColor;

console.log(currentColor);