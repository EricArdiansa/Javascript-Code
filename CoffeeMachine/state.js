const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200,
};

module.exports = coffeeStock;
// console.log(module);

// jika Anda mencoba melihat nilai module yang ada pada berkas state.js
// dengan menambahkan kode console.log(module) di akhir berkas, maka kita
//  akan melihat object coffeeStock menjadi nilai dari properti exports.

const isCoffeeMachineReady = true;

// Kita tidak bisa melakukan export dari kedua nilai di atas dengan cara seperti di bawah ini
// module.exports = coffeeStock;
// module.exports = isCoffeeMachineReady;

// module.exports = { coffeeStock, isCoffeeMachineReady };

// ES6 Module
export default coffeeStock;
