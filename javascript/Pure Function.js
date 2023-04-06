// Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum,
// pastikan 3 konsep ini ada pada fungsi yang Anda buat.

// Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
// Hanya bergantung pada argumen yang diberikan.
// Tidak menimbulkan efek samping.
// Bila 3 konsep di atas terpenuhi, maka bisa dipastikan Anda membuat sebuah pure function.

// Impure Function

let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari);
};

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80

//contoh 2

// const createPersonWithAge = (age, person) => {
//   person.age = age;
//   return person;
// };

// const person = {
//   name: "Bobo",
// };

// const newPerson = createPersonWithAge(18, person);

// console.log({
//   person,
//   newPerson,
// });

/**
 * Output:
 *  {
      person: { name: 'Bobo', age: 18 },
      newPerson: { name: 'Bobo', age: 18 }
    }
*/

// Pure Function

const hitungLuasLingkaran2 = (jariJari) => {
  return 3.14 * (jariJari * jariJari);
};

console.log(hitungLuasLingkaran2(4)); // 50.24
console.log(hitungLuasLingkaran2(4)); // 50.24
console.log(hitungLuasLingkaran2(8)); // 200.96
console.log(hitungLuasLingkaran2(8)); // 200.96

// Lalu bagaimana cara membuat fungsi tersebut menjadi pure? Mudah,
// kita manfaatkan destructuring object daripada mengubah objek tersebut secara langsung.

const createPersonWithAge = (age, person) => {
  return { ...person, age };
};

const person = {
  name: "Bobo",
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson,
});

/**
 * Output:
 *  {
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 }
 *  }
 */
