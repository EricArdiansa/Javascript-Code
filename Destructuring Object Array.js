const ArrObj = [
  {
    id: 14,
    title: "Belajar Fundamental Aplikasi Android",
    author: "Google ATP",
  },
  {
    id: 51,
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    author: "Google ATP",
  },
  {
    id: 123,
    title: "Belajar Dasar Pemrograman Web",
    author: "Dicoding Indonesia",
  },
  {
    id: 163,
    title: "Belajar Fundamental Front-End Web Development",
    author: "Dicoding Indonesia",
  },
];

console.log(ArrObj[1]);

//Format diatas merupakan format yang digunakan dalam Dokumen Json.
//Struktur tersebut dibangun dari Array dan Object.

//Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan
// nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.

const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const firstName = profile.firstName;
const lastName = profile.lastName;
const age = profile.age;

console.log(firstName, lastName, age);

/* output:
John Doe 18
*/

const MyArray = ["javascript", 448, true, false, "berbagai nama"];
console.log(MyArray[2]);
MyArray.push(true); //menambahkan array dibagian belakang
MyArray.pop(); //mengeluarkan data/elemen terakhir
MyArray.shift(); //mengeluarkan elemen pertama
MyArray.unshift("Dicoding"); // menambahkan element diawal
MyArray.splice(1, 1, "Dicoding"); //menghapus data sekaligus element
MyArray.reverse(); // belum diketahui.. kemungkinan bisa membalikkan urutan dari array

console.log(...MyArray);

const MyArray2 = ["Bola", "Batu", "Berputar", "Bersamaan"];
const NewArray = [...MyArray, ...MyArray2];

const Object = {
  name: "Eric Ardiansa",
  firstName: "Eric",
  lastName: "Ardiansa",
  age: 17,
  class: 11,
};

const Object1 = {
  name: "Lobo",
  target: "Gato",
  age: 18,
};

const wolfAge = Object1.age;
const humanAge = Object.age;

console.log(wolfAge, humanAge);
