//Pirmitive value: string, number, boolean, null, undefined

//Object: product-->Object.prototype->null
//Array: myArray-->Array.prototype-->Object.prototype-->null
//Function: myFunc-->Function.prototype-->Object.prototype-->null
//String: myString->String.prototype-->Object.prototype-->null
//Number: myNumber-->NUmber.prototype-->Object.prototype-->null
//Boolean: myBoolean-->Boolean.prototype-->Object.prototype-->null

const product = "computer";
console.log(product.split(""));

const otherProduct = new String("Phone");
console.log(otherProduct);
