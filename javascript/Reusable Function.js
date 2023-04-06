// Array Filter

const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14].filter((item) =>
  Boolean(item)
);

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 *
 */

// // const students = [
//   {
//     name: "Harry",
//     score: 60,
//   },
//   {
//     name: "James",
//     score: 88,
//   },
//   {
//     name: "Ron",
//     score: 90,
//   },
//   {
//     name: "Bethy",
//     score: 75,
//   },
// ];

// const eligibleForScholarshipStudents = students.filter(
//   (student) => student.score > 85
// );

// console.log(eligibleForScholarshipStudents);

/**
 * output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 *
 */

// Array Reduce

// Sama seperti array.map(), array.reduce() adalah fungsi bawaan dari data yang bertipe array
// yang digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output
// satu nilai saja.

// arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
// // [...] adalah opsional parameter

// Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya pada
// accumulator. Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.

// Contoh penggunaannya misalkan ketika kita ingin menjumlahkan total nilai siswa:

const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

/**
 * output:
 * 313
 *
 */
