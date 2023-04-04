// Parameter dari fungsi dapat berupa tipe data apa pun,
// mulai dari string, number, object, bahkan fungsi lain.
// Jika parameter dari fungsi adalah sebuah object,
// kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya.
// Contohnya seperti berikut:
const user = {
  id: 24,
  displayName: "kren",
  fullName: "Kylo Ren",
};

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);

/* output
kren is Kylo Ren
*/

// Default Parameters
// Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun
// tipe argumen yang dimasukkan ke dalam parameter. Ini berarti kita
// bisa memasukkan argumen meskipun tidak sesuai dengan parameter yang telah didefinisikan.

function exponentsFormula(baseNumber, exponent = 2) {
  const result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

/* output
3^2 = 9
*/

function exponentsFormula2(baseNumber, exponent) {
  const result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula2(2);

/* output
2^undefined = NaN
*/

// REST paramater

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));
