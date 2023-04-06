import coffeeStock from "./state.js";

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(coffeeStock);

//  mengimport banyak nilai dalam satu berkas JavaScript menggunakan ES6.

// import { coffeeStock, isCoffeeMachineReady } from "./state.js";

// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);
