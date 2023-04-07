// kasus menonton film di bioskop secara asynchronous.
function watchMovie() {
  withDrawMoney(10)
    .then((money) => buyCinemaTicket(money))
    .then((ticket) => goInsideCinema(ticket))
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
}
watchMovie();

// memanfaatkan async dan await dalam menangani proses asynchronous
async function watchMovie() {
  try {
    const money = await withDrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

watchMovie();

// Ketahuilah bahwa setiap fungsi yang didefinisikan dengan kata async akan selalu mengembalikan sebuah Promise.
// Contoh pada kode di atas, kita bisa menggunakan fungsi .then() setelah pemanggilan fungsi watchMovie()
// seperti ini.

async function watchMovie() {
  try {
    const money = await withDrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

watchMovie().then(() => console.log("done"));

/** output */
// enjoy the movie
// done

// Jika fungsi yang diberikan kata “async” mengembalikan Promise, bagaimana caranya mengontrol status Promise
// tersebut agar bernilai fulfilled atau rejected? Kata async secara implisit menggunakan return
// untuk mengubah status Promise menjadi fulfilled dan menggunakan throw untuk mengubah status Promise menjadi
// rejected. Mari kita buktikan dengan mengubah fungsi watchMovie() dengan mengembalikan nilai dan men-throw error.

//Module util.js

function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error("Not enough money to withdraw"));
      }

      resolve(amount);
    }, 1000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 10) {
        reject(new Error("not enough money to buy ticket"));
      }

      resolve("ticket-1");
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error("no ticket"));
      }

      resolve("enjoy the movie");
    }, 1000);
  });
}

module.exports = { withDrawMoney, buyCinemaTicket, goInsideCinema };

//Index.js

const { withDrawMoney, buyCinemaTicket, goInsideCinema } = require("./utils");

async function watchMovie(amount) {
  try {
    const money = await withDrawMoney(amount);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    return result;
  } catch (error) {
    throw error;
  }
}

watchMovie(10)
  .then((result) => console.log(result)) // enjoy the movie
  .catch((error) => console.log(error.message));

watchMovie(5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message)); // not enough money to buy ticket
