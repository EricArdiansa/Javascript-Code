// Constructor Function

// Fitrahnya, object blueprint dapat dibuat dengan menggunakan
// constructor function yang tampak seperti ini.
function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function () {
  console.log(`${this.brand} ${this.color} is driving`);
};

Car.prototype.reverse = function () {
  console.log(`${this.brand} ${this.color} is reversing`);
};

Car.prototype.turn = function () {
  console.log(`${this.brand} ${this.color} is turning`);
};

// Membuat objek mobil dengan constructor function Car
// const car1 = new Car("Toyota", "Silver", 200, "to-1");
// const car2 = new Car("Honda", "Black", 180, "ho-1");
// const car3 = new Car("Suzuki", "Red", 220, "su-1");

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive();

/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
 
Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/

// Fungsi di atas bukanlah fungsi biasa, melainkan constructor function.
// Berikut beberapa perbedaan yang harus Anda perhatikan.

// Penamaan fungsi yang merupakan constructor function, secara konvensi
// harus ditulis dengan huruf kapital. Itulah alasan kami memberi nama
// fungsi tersebut Car, bukan car. Hal ini penting untuk Anda ikuti guna
// membedakan fungsi biasa dengan constructor function karena penggunaannya berbeda.
// Constructor function dapat memanfaatkan keywordthis yang bernilai objek (instance)
// dirinya sendiri. Keywordthis dapat dimanfaatkan untuk mengakses nilai properti atau
// method dari objek tersebut. Contoh, kami menggunakan keyword this untuk menetapkan
// nilai properti brand dari argumen fungsi. Selain itu, di dalam method drive, kami
// juga menggunakan this untuk mendapatkan nilai properti brand dan color.
// Constructor function memiliki internal property bernama prototype. Properti ini
// digunakan untuk mendefinisikan method-method yang akan dimiliki oleh objek yang
// dibuat. Alasan method perlu didefinisikan di dalam prototype agar mudah untuk
// diwarisi ketika melakukan pewarisan.
// Terakhir, agar fungsi mengembalikan sebuah objek, Anda harus memanggilnya dengan
// menambahkan keyword new. Contoh, pada kode di atas, perhatikan cara kami memanggil
// fungsi Car untuk membuat objek car1, car2, dan car3.

// Sintaks Class di ES6

class Car {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }

  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn() {
    console.log(`${this.brand} ${this.color} is turning`);
  }
}

// Membuat objek mobil dengan constructor function Car
const car1 = new Car("Toyota", "Silver", 200, "to-1");
const car2 = new Car("Honda", "Black", 180, "ho-1");
const car3 = new Car("Suzuki", "Red", 220, "su-1");

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive();

/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
 
Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/
