console.log("what is object");

let x = "object";
let y = "learn";

let learn = x + y;
console.log(learn);

//menetapkan
//objek pada sebuah variabel kita gunakan tanda kurung kurawal
const user = {};

//contoh
const character = {
  name: "Eric Ardiansa",
  age: 17,
  species: "Human",
  "Hair Color": "Black",
};

/*Tanda koma pada properti terakhir bersifat opsional. 
namun, jika tanda koma tersebut ditulis akan lebih memudahkan 
ketika kita ingin memindah, mengubah, atau menghapus properti.*/

const user2 = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
};

const user4 = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
};

/*Kemudian untuk mengakses nilai dari properti object,
 kita dapat memanggil nama object lalu tanda titik dan diikuti 
 nama propertinya*/

const user3 = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
};

console.log(`Halo, nama saya ${user3.firstName} ${user3.lastName}`);
console.log(`Umur saya ${user3.age} tahun`);

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
*/

/* Untuk mengakses key yang memiliki spasi atau 
karakter khusus lainnya maka kita perlu menggunakan 
bracket seperti di atas. */

const user5 = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Tattooine",
};

console.log(`Halo, nama saya ${user5.firstName} ${user5.lastName}`);
console.log(`Umur saya ${user5.age} tahun`);
console.log(`Saya berasal dari ${user5["home world"]}`);

/* memodifikasi sebuah object. Untuk mengubah nilai properti 
di dalam object kita gunakan assignment operator (=). */

const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);

/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red'
}
 */
/* Tunggu dulu. Object spaceship dideklarasikan sebagai const, 
tetapi kenapa kita bisa mengubah nilainya?

Yang perlu diperhatikan adalah mengubah nilai berbeda dengan 
menginisialisasi ulang nilai. Ketika membuat sebuah object, kita tidak 
terikat dengan properti di dalamnya sehingga kita masih bisa 
memodifikasi nilainya. Berbeda jika kita menginisialisasi ulang 
variabel dari object.*/

const spaceship2 = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

spaceship2 = { name: "New Millenium Falcon" }; // Error

/*jika property dengan nama key yang ditentukan tidak ditemukan, 
maka property baru akan ditambahkan ke object.*/

const spaceship3 = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

spaceship3.color = "Glossy red";
spaceship3["maxSpeed"] = 1300;
spaceship3.class = "Light freighter";

console.log(spaceship3);

/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
*/

const spaceship4 = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

spaceship4.color = "Glossy red";
spaceship4["maxSpeed"] = 1300;

delete spaceship4.manufacturer;

console.log(spaceship4);

/* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
 */
