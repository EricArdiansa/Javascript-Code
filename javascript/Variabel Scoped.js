// global variable, dapat diakses pada parent() dan child()
const a = "a";

function parent() {
  // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
  const b = "b";

  function child() {
    // local variable, dapat diakses hanya pada fungsi child().
    const c = "c";
  }
}

/// Closure

function init() {
  const name = "Obi Wan"; // Variabel lokal di dalam scope fungsi init

  function greet() {
    // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikan di parent function
  }

  greet();
}

init();

/* output
Halo, Obi Wan
 */

function init2() {
  const name2 = "Obi Wan";

  function greet2() {
    console.log(`Halo, ${name2}`);
  }

  return greet2;
}

const myFunction = init2();
myFunction();

/* output
Kode di atas akan menghasilkan output yang sama. 
Perbedaannya adalah fungsi greet() dikembalikan (return) dari 
outer function-nya sebelum dieksekusi. Karena variabel name berada 
dalam scope init(), maka umumnya variabel tersebut akan hilang atau 
dihapus ketika fungsinya selesai dijalankan. Namun, pada kasus di atas 
fungsi greet() yang diakses melalui fungsi MyFunction() masih memiliki 
referensi atau akses ke variabel name. Variabel pada mekanisme di atas 
telah tertutup (close covered), yang berarti variabel tersebut berada 
di dalam closure.
 */

let counter = 0;

const add = () => {
  return ++counter;
};

console.log(add());
console.log(add());
counter = 23;
console.log(add());

/* output
1
2
24
 */
// Nilai counter akan bertambah ketika kita memanggil fungsi add().
// Namun, kita juga bisa mengubah nilai counter secara langsung dengan
// assignment operator. Pada contoh program yang lebih kompleks, sebaiknya
// hal ini dihindari karena perubahan langsung pada nilai counter bisa saja memunculkan bug.

const add2 = () => {
  let counter2 = 0;
  return () => {
    return ++counter2;
  };
};

const addCounter2 = add2();

console.log(addCounter2());
console.log(addCounter2());
console.log(addCounter2());

/* output
1
2
3
 */
