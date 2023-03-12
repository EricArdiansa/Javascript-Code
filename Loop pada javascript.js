//menggunakan for

const maxLoop = 10;
for (
  let counter = 1;
  counter <= maxLoop;
  counter++ /* jangan lupa pakai ini agar tidak terjadi infinity loop*/
) {
  if (counter === 5) {
    console.log(counter + ".dev Coaching");
  } else {
    console.log(counter + ".Hello, World");
  }
}

//mengkombinasikan antara Loop dengan If/else statement

//menggunakan  while
const maxload = 10;

let tahan = 1;

while (tahan <= maxload) {
  if (tahan === 5) {
    console.log(tahan + ". dev coaching");
  } else {
    console.log(tahan + ".hellow guys");
  }
  tahan++; // jangan lupa pakai ini agar tidak terjadi infinity loop
}

console.log(tahan);
