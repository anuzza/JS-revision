const products = [];
const product = products[0];

//Truthy: values that result to true in boolean context, objects,
//falsy: values that result to false in boolean context
//falsy values : false, 0, empty string, null, undefined
//
if (product) {
  console.log("product found");
} else {
  console.log("product not found");
}
