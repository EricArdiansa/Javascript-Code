// Try and caches (finally)
try {
  console.log("Awal blok try"); // (1)
  errorCode; // (2)
  console.log("Akhir blok try"); // (3)
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

// /* output
// Awal blok try
// ReferenceError
// errorCode is not defined
// ReferenceError: errorCode is not defined
//     at file:///home/dicoding/Playground/javascript/CoffeeMachine/error.js:3:5
//     at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
//     at async Loader.import (internal/modules/esm/loader.js:166:24)
//     at async Object.loadESM (internal/process/esm_loader.js:68:5)

try {
  console.log("Awal blok try");
  console.log("Akhir blok try");
} catch (error) {
  console.log("Baris ini diabaikan");
} finally {
  console.log("Akan tetap dieksekusi");
}

/* output
Awal blok try
Akhir blok try
Akan tetap dieksekusi
*/

// Throwing Errors
// Sekarang kita lihat implementasi try-catch pada kasus yang lebih umum. Perhatikan kode berikut:

// const json = '{ "name": "Yoda", "age": 20 }';

// try {
//   const user = JSON.parse(json);

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// Pada kode di atas, fungsi JSON.parse akan melakukan parsing atau konversi dari
// variabel json (String) menjadi sebuah object. Skenario seperti di atas akan banyak kita
// temui ketika melakukan request ke API.

// Secara sintaksis, kode di atas tidak menimbulkan eror, sehingga blok catch akan diabaikan.
// Namun, tidak adanya properti name pada json sebenarnya sama saja dengan eror karena akan berdampak
// pada jalannya program kita.

// Untuk mengatasinya, kita bisa menggunakan throw. Operator ini akan “melemparkan” eror pada program,
// sehingga eksekusi kode akan masuk pada blok catch. Berikut ini adalah contoh mengimplementasikan throw
// untuk menimbulkan eror kita sendiri:

// const json = '{ "age": 20 }';

// try {
//   const user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }

//   console.log(user.name); // undefined
//   console.log(user.age); // 20
// } catch (error) {
//   console.log(`JSON Error: ${error.message}`);
// }

/* output
JSON Error: 'name' is required.
*/

// bagaimana kita bisa menampilkan pesan eror sesuai eror yang muncul?
// Jawabannya adalah dengan if statement.

// const json = '{ "name": "Yoda", "age": 20 }';

// try {
//   const user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }

//   errorCode;

//   console.log(user.name); // Yoda
//   console.log(user.age); // 20
// } catch (error) {
//   if (error instanceof SyntaxError) {
//     console.log(`JSON Error: ${error.message}`);
//   } else if (error instanceof ReferenceError) {
//     console.log(error.message);
//   } else {
//     console.log(error.stack);
//   }
// }

// Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi.
// Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.

// Untuk itu kita bisa membuat kelas Error kita sendiri dengan nama dan pesan yang lebih sesuai.
// Kelas ini merupakan turunan dari kelas Error yang sudah ada. Sebagai contoh, untuk mengecek validasi data dari json,
//  kita bisa membuat kelas Error seperti ini:

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const json = '{ "age": 30 }';

try {
  const user = JSON.parse(json);

  if (!user.name) {
    throw new ValidationError("'name' is required.");
  }
  if (!user.age) {
    throw new ValidationError("'age' is required.");
  }

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Syntax Error: ${error.message}`);
  } else if (error instanceof ValidationError) {
    console.log(`Invalid data: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}

// output
// // Invalid data: 'name' is required
