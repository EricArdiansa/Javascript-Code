// Deklaratif vs Imperatif

// Imperatif ( How to Solve)
const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

/* output:
   [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/

// Deklaratif (What to solve)
const names2 = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark2 = names2.map((name) => `${name}!`);

console.log(newNamesWithExcMark2);

/* output:
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 */
