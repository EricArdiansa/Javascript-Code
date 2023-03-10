/*Variabel terdiri dari ekspression dan statement, 
ekspression merupakan bentuk dari nilai, sedangkan statement
digunakan sebagai bentuk dari aksi.
Ada beberapa aturan dalam menggunakan variabel, 
variable terdiri dari, let, var, dan const 
*/

/*
yang saya pelajari dari beberapa hal ini adalah sebagai berikut
salah satunya tentang apa itu variabel, sebuah kotak, sebuah statement, sebuah 
ekspression, tentang deklarasi yang menunjukkan tentang
*/

{
  console.log("Halo World");
}

{
  let LastName;
  LastName = "Walker";
  console.log(LastName);
}
{
  let BeMe = "Anti-Villain";
  console.log(BeMe);
}

{
  const Mata = "Melihat";
  console.log(Mata);
}

/*compiler adalah program yang menerjemahkan kode yang ditulis ke bahasa yang dimengerti oleh mesin 
Debugging adalah proses mengidentifikasi dan menghilangkan errror pada aplikasi
intepreter bertugas menerjemahkan setiap baris code dari bahasa pemrograman menjadi bahasa yang dimengerti oleh mesin secara langsung
tanpa proses kompilasi lagi. */

let MataKu;
let BehindMe;
MataKu = "Bisa melihat dalam Kegelapan";
BehindMe =
  " Hal ini bisa terjadi karena banyak hal luar biasa yang terjadi didalam mataku ini";

console.log(MataKu + BehindMe);

//kode diatas entah kenapa tidak bisa berjalan di browser tersebut.. entah apa yang salah dengan logic yang aku temukan
// Oh maaf, ternyata bukan logicnya yang salah, namun ada typo pada kode diatas, harusnya behindMe itu B-nya menggunakan
//Huruf yang besar, dan begitu juga pada bagian console loh yang saya temukan, harusnya nilai-nya ditu bukan Mataku namun MataKu..

let Mataku;
let ibuku;
ibuku = "kusayang";
Mataku = "ada 2";

console.log(Mataku + ibuku);

// sedangkan pada kode diatas hasil outputnya sesuai dengan yang kuinginkan, padahal sama-sama nilainya
//telah kudefinikasin, yang itu telah kuberi statement dan juga ekspression

//catatan penting ketika menulis code adalah memperhatikan uppercase dan lowercase setiap variabel yang dibuat,..
// baik pada saat pendefinisian maupun saat pemanggilannya.

// ini adalah contoh kode yang telah berhasil

//Anda juga bisa langsung menginisialisasi nilai variabel setelah mendeklarasikannya seperti berikut:

let lastName = "Skywalker";

console.log(lastName);

// dalam satu file tidak boleh ada baris kode yang sama ya, kalau ada baris kode yang sama, maka akan terjadi
// sebuah errror

let fullName = (LongMan = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
let shortName = "Luke" + "Pejalan Kaki"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.

console.log(fullName + shortName);

// nama Variabel tidak boleh sama, malah akan terjadi ambigu dan ditimpa dengan nilai lainnya

//Baiklah Kita akan Lanjut ke dalam Tipe data..

//undefined

//numbers dan memiliki operator
let xc = 10;
console.log(typeof xc);

/* output: number */

let yc = "hehehe";
console.log(typeof yc);

/* output: number */

// versi operator

let a = 12;
let sus = 9;

console.log(a + sus);
console.log(a - sus);
console.log(a * sus);
console.log(a / sus);
console.log(a % sus);

/* output:
21
3
108
1.3333333333333333
3
*/

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

/*Operator ini dapat dituliskan sebelum atau sesudah variabel, tetapi hal tersebut bukan berarti sama. Berikut ketentuannya:

Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya.
*/

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

//tipe data big numbers

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/

//khusus untuk pembagian hasilnya akan dibulatkan kebawah tanpa nilai desimal
let greet = "Hello";
console.log(typeof greet);

/* output: string */

const answer = '"I think it\'s awesome!" he answered confidently';

/*
Tentunya kode di atas akan menghasilkan eror. Solusinya, gunakan backslash(\) 
untuk mengurangi ambiguitas dalam tanda petik. Mekanisme ini juga dikenal dengan nama 
escape string. Sehingga kode di atas akan menjadi seperti berikut:
*/

console.log("Windows path: C:\\Program Files\\MyProject");

//String interpolation,  Sederhananya, kita
// bisa memasukkan variabel ke dalam sebuah string template.

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */

//Tipe data Boolean

let o = true;
let g = false;

console.log(typeof o);
console.log(typeof g);

/* output: 
boolean
boolean
*/

//assigment pada operator

let x = 10;
let y = 5;

xc += yc;

console.log(xc);

/* output
15
*/

//Logical pada operator
let p = 10;
let us = 12;

/* AND operator */
console.log(p < 15 && sus > 10); // (true && true) -> true
console.log(p > 15 && sus > 10); // (false && true) -> false

/* OR operator */
console.log(p < 15 || sus > 10); // (true || true) -> true
console.log(p > 15 || sus > 10); // (false || true) -> true

/* NOT operator */
console.log(!(p < 15)); // !(true) -> false
console.log(!(p < 15 && sus > 10)); // !(true && true) -> !(true) -> false

/* output
true
false
true
true
false
false
*/

const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
  console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");

/* output:
Persiapan sebelum berangkat kegiatan.
Hari ini hujan. Bawa payung.
Berangkat kegiatan.
 */

// Else statement pada if/else

let suu = 69;

if (suu >= 70) {
  console.log(suu);
} else {
  console.log("Nilai kurang dari 70");
}

/* output
Nilai kurang dari 70
*/

let language = "French";
let greeting = "Selamat Pagi";

if (language === "English") {
  greeting = "Good Morning!";
} else if (language === "French") {
  greeting = "Bonjour!";
} else if (language === "Japanese") {
  greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);

/* output
Bonjour!
*/

//elain if statement di atas, JavaScript juga mendukung ternary operator
//atau conditional expressions. Dengan ini, kita bisa menuliskan if-else statement
//hanya dalam satu baris.

// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);

/* output
Anda mendapatkan diskon sebesar 0%
 */

// truthy dan falsy
let namek = "";

if (namek) {
  console.log(`Halo, ${namek}`);
} else {
  console.log("Nama masih kosong");
}

/* output:
Nama masih kosong
 */

/*
 JavaScript juga mendukung switch statement untuk melakukan 
 pengecekan banyak kondisi dengan lebih mudah dan ringkas.
*/

let languages = "French";
let greetings = null;

switch (languages) {
  case "English":
    greeting = "Good Morning!";
    break;
  case "French":
    greeting = "Bonjour!";
    break;
  case "Japanese":
    greeting = "Ohayou Gozaimasu!";
    break;
  default:
    greeting = "Selamat Pagi!";
}

console.log(greeting);

/* output
Bonjour!
*/
