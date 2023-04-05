class Car {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
}

// const car1 = new Car("BMW", "red", 200, "b-1");
// const car2 = new Car("Audi", "blue", 220, "a-1");
// const car3 = new Car("BMW", "black", 250, "b-2");

console.log(car1);
console.log(car2);
console.log(car3);

/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'b-1' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'a-1' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'b-2' }
*/
// Nilai dari properti biasanya diambil dari dari argumen constructor
// agar nilainya dapat bervariasi setiap kali membuat instance.

// Namun, adakalanya nilai properti juga bisa didefinisikan di dalam class itu sendiri.
// Contohnya, kita tidak ingin pengguna menentukan nomor rangka mobil secara mandiri,
// maka kita bisa memberi nilai properti chassisNumber langsung di dalam fungsi constructor.

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // Set a random chassis number
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}

const car1 = new Car("BMW", "red", 200);
const car2 = new Car("Audi", "blue", 220);
const car3 = new Car("BMW", "black", 250);

console.log(car1);
console.log(car2);
console.log(car3);

/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-558' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'Audi-215' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'BMW-799' }
*/

// Lalu, bagaimana cara memproteksi agar nilai dari properti chassisNumber tidak dapat diubah?
// Nah, ketika kita berhadapan dengan kasus seperti ini, kita bisa memanfaatkan properti getter dan setter.

// Sebelum memecahkan masalah di atas, ketahuilah bahwa ada dua tipe properti, yaitu data property
// dan accessor property.

// Data property merupakan properti yang sejauh ini kita lihat, properti yang langsung menampung
// sebuah nilai di dalam sebuah objek.

// Sedangkan accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter.
// Nilai yang didapatkan dari properti tersebut dikontrol oleh method get dan cara menetapkan
// nilai tersebut dikontrol oleh method set.

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Nilai yang didapatkan dari properti tersebut dikontrol oleh method get

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // cara menetapkan nilai tersebut dikontrol oleh method set.

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("John", "Doe");
console.log(user);
console.log(user.fullName);

user.fullName = "Fulan Fulanah";
console.log(user);
console.log(user.fullName);

/* Output:
User { firstName: 'John', lastName: 'Doe' }
John Doe
User { firstName: 'Fulan', lastName: 'Fulanah' }
Fulan Fulanah
*/

// Method
// Method adalah sebuah fungsi yang berada di dalam sebuah class
// dan dapat diakses melalui instance Class tersebut.
// Method biasanya mengindikasikan hal yang dapat dilakukan oleh sebuah class.

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
}

class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }

  // Methods
  send() {
    console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
  }

  sendLater(delay) {
    console.log(`Sending after ${delay} ms`);

    setTimeout(() => {
      this.send();
    }, delay);
  }

  saveAsDraft() {
    console.log("Saving mail as draft");
  }
}

// Sama seperti fungsi JavaScript, method bisa menerima sebuah argumen. Contohnya pada method turn() di
// class Car dan sendLater di class Mail, kami memanfaatkan argumen direction dan delay untuk menetapkan
// arah dan waktu delay dalam menjalankan method-nya.

// Selain argumen, method juga dapat memiliki akses ke nilai properti atau method lainnya melalui keyword this.

// Method di dalam class hanya bisa dijalankan melalui instance dari class tersebut.

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber();
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

  _generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

// Member Visibility
// Member visibility bisa disebut juga sebagai hak akses pada sebuah properti dan method di dalam class.
//  Secara default, seluruh properti dan method yang dibuat di dalam class bersifat public,
//  alias dapat diakses di luar dari kode class via instance. Selain public,
//  kita juga bisa membuat properti dan method bersifat private,
//  terutama ketika kita ingin properti atau method tersebut hanya digunakan dalam cakupan kode di dalam class saja
//  (penggunaan internal).

// Untuk menyelesaikan masalah ini, JavaScript versi ES2022 secara resmi mengenalkan
// cara dalam menetapkan hak akses private pada properti dan method objek,
// yakni dengan menambahkan tanda # di awal penamaan properti atau method.

class Car {
  #chassisNumber = null; // enclosing class

  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
  }

  get chassisNumber() {
    return this.#chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

  #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
