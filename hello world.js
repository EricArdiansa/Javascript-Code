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
