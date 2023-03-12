//ubah bagian ekspression nilai bawah ini untuk
//mendapatkan perbedaan hasil outputnya

const jam = 7;

if (jam <= 6 && jam >= 1) {
  console.log("masih pagi bang, masih sempat makan");
  isLate = false;
} else if (jam > 6 && jam <= 8) {
  console.log("udah telat cokk, buruannn");
  isLate = true;
}

//const isLate = true;
const DailyRout = "sarapan pagi";
console.log(DailyRout);

if (isLate) {
  console.log("mending masukin ke dalam tas");
} else {
  console.log("makan aja dirumah");
}
console.log("Berangkat kerja lagi");

//bagian selanjutnya merupakan bagian yang berbeda..

const weather = "rain";

if (weather === "rain") {
  console.log("masukkan payung");
} else if (weather === "cold") {
  console.log("masukkan jaket kedalam tas");
}

//lanjut menggunakan switch
let cuaca = "dingin";

switch (cuaca) {
  case "hujan":
    console.log("waduhh hujan nih, siapa jas hujan cuy");
    break;

  case "dingin":
    console.log("waduh dingin nih cuyy, bawa jaket yuk");
    break;
}

//How to use some good tools who provided by goverment

let answer;
answer = true;

switch (answer) {
  case true:
    console.log("Lu begitu? astaga...");
    break;
  case false:
    console.log("oh syukurlah kamu ternyata baik-baik saja");
    break;
}
