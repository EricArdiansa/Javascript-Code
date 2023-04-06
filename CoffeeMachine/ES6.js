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

// Namun, jika kita tetap ingin mengubah penamaan variabel dari named import,
// kita bisa melakukannya dengan menambahkan keyword as setelah penamaan variabelnya.

// import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";

// console.log(stock);
// console.log(isCoffeeMachineReady);
