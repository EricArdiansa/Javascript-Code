// Promise memiliki beberapa static method yang dapat digunakan untuk mempermudah penggunaan dalam berbagai kasus.
// Pada materi ini, kami akan membahas empat static method dari class Promise yang umum digunakan,
// yaitu Promise.all, Promise.race, Promise.allSettled, dan Promise.any.

// Promise.all
// Promise.all() digunakan untuk mengeksekusi banyak Promise secara paralel.
// Method ini menerima sebuah array yang berisi beberapa Promise sebagai argumen.
// Fungsi ini akan mengembalikan sebuah Promise baru dan membawa nilai yang di-resolve dalam
// masing-masing Promise yang diletakkan pada array argumen.

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
); // [1, 2, 3] setelah 3 detik

// Jika terdapat rejection pada salah satu Promise, Promise.all() akan langsung menghasilkan rejected
// tanpa mengembalikan nilai Promise lain yang statusnya fulfilled. Berikut contohnya.

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("ups")), 2000)
);
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message)); // ups

// Promise.race
// Promise.race() digunakan untuk mengeksekusi beberapa Promise secara paralel seperti Promise.all().
// Namun, ia hanya mengembalikan nilai Promise yang paling cepat menyelesaikan eksekusinya.
