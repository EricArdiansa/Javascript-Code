class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
const person1 = new Person("John", 30);
console.log(person1.getInfo()); // Output: Name: John, Age: 30

class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  // ... method lain disembunyikan
}
// Di dalam constructor, biasanya kita mendefinisikan properti dan menetapkan nilainya.
// Contoh, pada superclass MailService, kita mendefinisikan properti sender yang nilainya
// diambil dari argumen method constructor.

// const mailService = new MailService("someReceiver");
// console.log(mailService);

/* Output:
MailService { sender: 'someReceiver' }

*/
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }

  // Overriding method
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
  }
}

const mailService = new MailService("someSender");
const whatsappService = new WhatsAppService("+6281234567890", true);

mailService.sendMessage("Hai, apa kabar?", "someReceiver");
whatsappService.sendMessage("Hai, apa kabar?", "+6289876543210");

/**
 * Output:
 * someSender sent Hai, apa kabar? to someReceiver
 * +6281234567890 sent Hai, apa kabar? to +6289876543210 via WhatsApp
 */

// Jika dibutuhkan, kita juga bisa memanggil method sendMessage()
// dari superclass melalui keyword super.sendMessage().

class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }

  // Overriding method
  sendMessage(message, receiver) {
    // memanggil method sendMessage pada superclass
    super.sendMessage(message, receiver);

    console.log("message sent via WhatsApp");
  }
}

// const mailService = new MailService('someSender');
// const whatsappService = new WhatsAppService('+6281234567890', true);

mailService.sendMessage("Hai, apa kabar?", "someReceiver");
whatsappService.sendMessage("Hai, apa kabar?", "+6289876543210");

/**
 * Output:
 * someSender sent Hai, apa kabar? to someReceiver
 * +6281234567890 sent Hai, apa kabar? to +6289876543210
 * message sent via WhatsApp
 */
