// Untuk menambahkan parameter pada fungsi, tambahkan variabel di dalam tanda kurung fungsi.
// Namun, variabel tersebut tidak memerlukan keyword var, let, ataupun const. Kita juga bisa
// menambahkan lebih dari satu parameter dengan memberikan tanda koma antar variabel parameternya.
// Contohnya fungsi greeting akan kita
// tambahkan parameter name dan language seperti ini:
function greeting(name, language) {
  if (language === "English") {
    console.log(`Good Morning ${name}!`);
  } else if (language === "French") {
    console.log(`Bonjour ${name}!`);
  } else {
    console.log(`Selamat Pagi ${name}!`);
  }
}

greeting("Harry", "English");
console.log(typeof greeting);

/* output
Sehingga dalam memanggilnya pun kita perlu mengirimkan dua buah nilainya sebagai argumen:
*/
// Satu hal lagi, function dapat menghasilkan output atau mengembalikan sebuah nilai.
// Dengan nilai kembalian, kita dapat membuat function yang berfungsi untuk melakukan perhitungan
// matematika dan hasilnya dapat kita masukkan ke dalam sebuah variabel. Contohnya seperti ini:
function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2);
console.log(result);
console.log(typeof result);
/* output
20
*/

// Agar fungsi bisa mengembalikan nilai, gunakan keyword return
// diikuti dengan nilai yang akan dikembalikan. Nilai kembalian tidak hanya number,
// bisa juga berupa string, boolean, object, array, atau tipe yang lain.
// Seperti inilah fungsi greeting() jika kita ubah agar mengembalikan nilai string:

function greeting(name, language) {
  if (language === "English") {
    return `Good Morning ${name}!`;
  } else if (language === "French") {
    return `Bonjour ${name}!`;
  } else {
    return `Selamat Pagi ${name}!`;
  }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);
console.log(typeof greetingMessage);

// Yang perlu kita perhatikan lagi, ketika statement return tereksekusi,
// maka fungsi akan langsung terhenti dan mengembalikan nilai.
// expression adalah kode atau instruksi yang mengembalikan nilai,
// sehingga expression function bisa disimpan dalam sebuah variabel.
// Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya.
// Fungsi yang tidak bernama juga dikenal dengan anonymous function.
// Berikut ini merupakan contoh penulisan expression function:

const greeting2 = function (name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
};

console.log(greeting2("Ron", "English"));

/* output
Good Morning Ron!
 */
