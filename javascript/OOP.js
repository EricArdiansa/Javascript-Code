// Pengantar Object-Oriented Programming di JavaScript
// Object-oriented programming atau disingkat OOP merupakan paradigma pemrograman yang banyak diterapkan
// ketika membangun aplikasi. Paradigma OOP kental dengan konsep objek yang mengandung dua hal,
// yaitu atribut dan method. Selain itu, OOP juga kental dengan konsep object blueprint yang akrab
// dikenal dengan sebutan class.

// Meskipun JavaScript bukan bahasa pemrograman yang berbasis class seperti Java,
//  tetapi di JavaScript kita juga bisa menerapkan paradigma OOP.

// Di modul ini kita akan membahas beberapa hal terkait OOP, seperti:

// Pengertian paradigma Object-Oriented Programming.
// Constructor function dan sintaks class di JavaScript.
// Properti dan Method di dalam class.
// Pewarisan.
// Constructor dan method overriding.
// Object composition.
// Built-in class.

// Object-Oriented Programming
// Object-Oriented Programming (OOP) adalah salah satu paradigma dalam pemrograman yang
// berfokus pada pembuatan sebuah objek dan interaksi dengan objek-objek tersebut.
// Di OOP, objek merupakan sebuah entitas yang terdiri dari dua hal, yakni properties dan methods.

// Properti merupakan nilai di dalam objek yang menyimpan informasi tentang objek tersebut.
// Method merupakan fungsi yang menggambarkan aksi yang dapat dilakukan oleh objek tersebut.
// Paradigma OOP kerap digambarkan dengan kehidupan dunia nyata. Objek di dalam OOP,
// bisa kita anggap seperti objek yang ada di dunia nyata. Kita ambil contoh, mobil.
// Dalam OOP, sebuah mobil dapat dilihat sebagai objek yang memiliki beberapa properti
// seperti merek, warna, kecepatan maksimal, dan nomor rangka.
// Objek tersebut memiliki kemampuan atau method seperti maju, mundur, dan belok.

const car = {
  // properties
  brand: "Ford",
  color: "red",
  maxSpeed: 200,
  chassisNumber: "f-1",
  // methods
  drive: () => {
    console.log("driving");
  },
  reverse: () => {
    console.log("reversing");
  },
  turn: () => {
    console.log("turning");
  },
};

console.log(car.brand); // Ford
console.log(car.color); // red
console.log(car.maxSpeed); // 200
console.log(car.chassisNumber); // f-1
car.drive(); // driving
car.reverse(); // reversing
car.turn(); // turning

// Kode di atas merupakan contoh objek mobil atau car di JavaScript.
// Seperti yang Anda lihat, objek car memiliki properti brand, color,
// maxSpeed, dan chassisNumber; dan juga method drive, reverse, dan turn.
// Kita bisa akses nilai properti dan panggil method yang ada di dalam objek tersebut.

// Constructor Function
// object blueprint dapat dibuat dengan menggunakan constructor function yang tampak seperti ini.

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
