console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");

const coffeeStock = require("./state");

console.log(coffeeStock);

// Dalam inisialisasi variabel coffeeStock (nama variabel bebas kita tentukan),
// kita gunakan method require() dengan memberikan parameter lokasi berkas state.js.
// Dengan begitu variabel coffeeStock akan memiliki nilai module.exports yang sama pada berkas state.js.
//  Setelah mendapatkan nilainya, kita bebas menggunakannya seperti variabel lokal pada umumnya.

const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
};

makeCoffee("robusta", 80);

/* output
Kopi berhasil dibuat!
*/
//  Jika kita menggunakan lokasi yang relatif (dapat berubah/dipindahkan), pastikan awali dengan menuliskan
//  ./. Contohnya, berkas index.js dan state.js berada pada folder yang sama, maka kita cukup menuliskannya
//  dengan ./state.js.

// Lalu bagaimana cara import kedua nilai tersebut? Masih ingat dengan materi destructuring object?
//  Pada berkas index.js kita gunakan teknik destructuring object untuk mendapatkan nilai yang di-import seperti ini:

const { coffeeStock, isCoffeeMachineReady } = require("./state");

console.log(coffeeStock);
console.log(isCoffeeMachineReady);

// ES6 Module

// import stock from "./state.js";

// const displayStock = (stock) => {
//   for (const type in stock) {
//     console.log(type);
//   }
// };

// displayStock(coffeeStock);
