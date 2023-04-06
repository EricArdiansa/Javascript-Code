// etika menggunakan array.map(), alih-alih ia mengubah nilai dari array itu sendiri
//  malah ia membuat atau menghasilkan array baru.
const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
  names,
  newNamesWithExcMark,
});

/**
 * {
     names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
     newNamesWithExcMark: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
   }
 */

//    Lantas, bagaimana bila kita benar-benar perlu mengubah nilai dari sebuah objek? Contohnya seperti ini:

// const user = {
//     firstname: 'Harry',
//     lastName: 'Protter', // ups, typo!
// }

// const renameLastNameUser = (newLastName, user) => {
//     user.lastName = newLastName;
// }

// renameLastNameUser('Potter', user);

// console.log(user);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 *
 */

const user = {
  firstname: "Harry",
  lastName: "Protter", // ups, typo!
};

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};

const newUser = createUserWithNewLastName("Potter", user);

console.log(newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 *
 */

// Dengan teknik rekursif ini, kita sebenarnya bisa menggantikan operasi iterasi dengan rekursi.
// Namun tidak sebatas itu saja, dengan rekursi kita dapat membuat dan mengolah data
// structures seperti Tree dan Array.
const countDown = (start) => {
  console.log(start);
  if (start > 0) countDown(start - 1);
};

countDown(10);
