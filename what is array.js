let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
// Bentuk dasar dari Array, dibuat menggunakan tanda tutup
//berbentuk siku-siku

let myArray2 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray2[1]);
//Cara mengindex array, menggunakan urutan, btw index array dimulai
// dari 0

let myArray3 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray3[0]);
console.log(myArray3[1]);
console.log(myArray3[2]);
console.log(myArray3[3]);
console.log(myArray3[4]);
console.log(myArray3[5]);
console.log("Panjang nilai myArray adalah " + myArray3.length + ".");
//Jika kita mengakses nilai array lebih dari index-nya,
//maka hasilnya akan undefined. Index terakhir array selalu jumlah nilai array - 1.

/* output:
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

const myArray6 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray6.push("JavaScript");
console.log(myArray6);
//untuk menambahkan data ke dalam array, kita bisa menggunakan metode push().
//Fungsi push ini akan menambahkan data di akhir array.
/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

const myArray7 = ["Cokelat", 42.5, 22, true, "Programming"];
myArray7.pop();
console.log(myArray7);
//Sedangkan untuk mengeluarkan data atau elemen terakhir dari array,
//kita bisa gunakan metode pop()
/* output
[ Cokelat, 42.5, 22, true ]
*/

const myArray8 = ["Cokelat", 42.5, 22, true, "Programming"];
myArray8.shift();
myArray8.unshift("Apple");
console.log(myArray8);
//Metode lain yang bisa kita gunakan untuk memanipulasi data pada array
//adalah shift() dan unshift(). Metode shift() digunakan untuk mengeluarkan elemen pertama dari array,
// sementara unshift() digunakan untuk menambahkan elemen di awal array.
/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

const myArray9 = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray9[1];
console.log(myArray);

/* output
[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]
*/
//Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index yang
//ditentukan lalu membiarkan posisi tersebut kosong. Untuk menghapus elemen, gunakan metode splice() seperti ini:
const myArray0 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray0.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray0);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/

//SPREAD OPERATOR
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(favorites);
//hasil yang keluar masih dalam kurung

const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites2);

/* output
Seafood Salad Nugget Soup
*/

const favorites3 = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites3, ...others];

console.log(allFavorites);
//MENGGABUNGKAN 2 BUAH ARAYY

//Selain array, spread operator juga bisa digunakan untuk object literals.
//Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas.

const obj1 = { firstName: "Obi-Wan", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/
