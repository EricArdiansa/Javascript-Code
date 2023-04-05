// Implementasinya, kita tampung seluruh sifat yang “sama” pada sebuah class induk (superclass)
// dan sifat tersebut nantinya diwarisi kepada class di bawahnya (subclass).
// Kemudian pada subclass, kita bisa menambahkan kemampuan lain yang lebih spesifik.
//  kita warisi sifat dari MailService ke subclass WhatsAppService dan EmailService
//  dengan menggunakan keyword extends seperti ini.
// Superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}
// Subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

// Subclass
class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

// const whatsapp = new WhatsAppService("+6281234567890");
// const email = new EmailService("dimas@dicoding.com");

whatsapp.sendMessage("Hello", "+6289876543210");
whatsapp.sendBroadcastMessage("Hello", ["+6289876543210", "+6282234567890"]);
// whatsapp.sendDelayedMessage(); // Error

email.sendMessage("Hello", "john@doe.com");
email.sendDelayedMessage("Hello", "john@doe.com", 3000);
// email.sendBroadcastMessage(); // Error

// Pewarisan tanpa ES6 Class dengan teknik prototype inheritance

function MailService(sender) {
  this.sender = sender;
}

MailService.prototype.sendMessage = function (message, receiver) {
  console.log(`${this.sender} sent ${message} to ${receiver}`);
};

function WhatsAppService(sender) {
  MailService.call(this, sender);
}

// Prototype inheritance
WhatsAppService.prototype = Object.create(MailService.prototype);
WhatsAppService.prototype.constructor = WhatsAppService;

WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
  for (const receiver of receivers) {
    this.sendMessage(message, receiver);
  }
};

function EmailService(sender) {
  MailService.call(this, sender);
}

// Prototype inheritance
EmailService.prototype = Object.create(MailService.prototype);
EmailService.prototype.constructor = EmailService;

EmailService.prototype.sendDelayedMessage = function (
  message,
  receiver,
  delay
) {
  setTimeout(() => {
    this.sendMessage(message, receiver);
  }, delay);
};

// const whatsapp = new WhatsAppService("+6281234567890");
const email = new EmailService("dimas@dicoding.com");
whatsapp.sendMessage("Hello", "+6289876543210");
whatsapp.sendBroadcastMessage("Hello", ["+6289876543210", "+6282234567890"]);
email.sendMessage("Hello", "john@doe.com");
email.sendDelayedMessage("Hello", "john@doe.com", 3000);

// Operator instanceof
// Ketika menulis kode, kita seringkali kita perlu mengecek jenis dari objek tersebut.
// Salah satu cara mengetahui jenis objek adalah dengan mengecek rantai prototype-nya.
// Nah, untuk mengetes sebuah objek berdasarkan prototype dari constructor function atau class tertentu,
// kita bisa menggunakan operator instanceof.

// operand1 instanceof operand2

// Penjelasannya:

// operand1: merupakan objek yang ingin dites prototype-nya.
// operand2: merupakan constructor function atau class.
// Berikut contoh penggunaan dari operator instanceof dalam mengecek objek whatsapp yang merupakan instance dari
// class WhatsAppService.

const whatsapp = new WhatsAppService("+6281234567890");

console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false

// Operator instanceof mengembalikan boolean. Operasinya akan menghasilkan nilai true jika objek yang dites
//  (operand pertama) memiliki prototype yang merupakan operand kedua. Jika prototype operand pertama bukanlah
//  operand kedua, operasinya akan menghasilkan nilai false.

// Operator instanceof juga akan mengecek prototype secara berantai.
// Artinya, instanceof juga mengecek hingga prototype yang diwarisi oleh objek tersebut.
