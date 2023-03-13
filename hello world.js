console.log("Hello, world!");

const car = { colors: "red", brand: "BMW", model: "X3", year: "2013" };
console.log(car);

console.log(car.colors);
console.log(car.brand);
console.log(car.model);
console.log(car.year);

//delete car.colors;

//assigment operator pada aritmatika

let a = 5;
a += 5;
console.log(a);

a -= 2;
console.log(a);

a *= 2;
console.log(a);

1 > 5; //false
5 > 5; //false
5 >= 5; //true

5 == 5; //true
5 == "5"; // true

5 != 5; //false
5 === "5"; //false
5 !== "5"; //true

//testing sebuah kode didalam ingatan saya
let fullname = (lastname = "skywalker");
console.log(fullname);
//kemudian bagaimana dengan kode yang dibawah ini.
let fullscreen = "luke" + " " + "Skywalker";
console.log(fullscreen);

//test menggunakan increment dan decrement
let postfix = 5;
console.log(postfix++);
console.log(postfix--);

let prefix = 6;
console.log(++prefix);
console.log(--prefix);

//menggunakan bigInt
const bigNumber = 1234567891234567812345678n;
console.log(bigNumber);

const normalNumber = 12345678912345677812354567;
console.log(normalNumber);

const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer);

//menggunakan sebuah string interpolation
const myName = "Eric";
console.log(`Hello, my name is ${myName}`);
//jangan lupa menggunakan backlit yang terletak dibawah tombol escape,
//dengan tujuan agar kode ini bisa berjalan, khusus fiturm string interpolation

//boolean
let c = true;
let d = false;
console.log(typeof c);
console.log(typeof d);

// menggunakan operator komparasi pada boolean
const f = 10;
const b = 20;
let lebihBesar = f > b;
let lebihKecil = f < b;

console.log(lebihKecil);
console.log(lebihBesar);

//menggunakan symbol yang unik walaupun memiliki nama yang sama

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);

/*
const isRaining = true;
console.log("Ya begitulah");
if (isRaining = true) {
  console.log("Bawa Payung");
} else
console.log("enggak");
*/

//ada yang salah pada logic pada kode diatas, mungkin aku akan kembali lagi
//ketika sudah lebih paham

let x = 50;
if (x > 70) {
  console / log(x);
} else {
  console.log("Nilai kamu kurang dari 70");
}

// bagaimana dengan yang satu ini..

let bahasa = "prancis";
let sapaan = "Selamat Pagi";
if (bahasa === "inggris") {
  sapaan = "Morning";
} else if (bahasa === "prancis") {
  sapaan = "mantab tenann";
} else if (bahasa === "indonesia") {
  sapaan = "Selamat Pagi";
}
