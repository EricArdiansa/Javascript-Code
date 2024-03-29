// Jika kita gambarkan skenario di atas dalam konsep OOP,
// Developer merupakan sebuah superclass; sedangkan Front-End Developer, Back-End Developer,
//  dan DevOps adalah subclass. Struktur dari pewarisan class akan tampak seperti kode di bawah ini.

class Developer {
  constructor(name) {
    this.name = name;
  }

  commitChanges() {
    console.log(`${this.name} is committing changes...`);
  }
}

class FrontEndDeveloper extends Developer {
  buildUI() {
    console.log(`${this.name} is building UI...`);
  }
}

class BackEndDeveloper extends Developer {
  buildAPI() {
    console.log(`${this.name} is building API...`);
  }
}

class DevOps extends Developer {
  deployApp() {
    console.log(`${this.name} is deploying app...`);
  }
}

// Agar lebih mudah dalam membuat objek, kita bisa membuat sebuah fungsi sebagai object creator
// dengan mengomposisikan kemampuan-kemampuan yang dibutuhkan.
// Di JavaScript, kita bisa secara mudah mengomposisikan objek dengan menggunakan method Object.assign().

function createFrontEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canDeployApp(developer));
}
function createFullStackDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(
    developer,
    canBuildUI(developer),
    canBuildAPI(developer),
    canDeployApp(developer)
  );
}

// Berikut implementasi utuh dari contoh kode di atas.

class Developer {
  constructor(name) {
    this.name = name;
  }

  commitChanges() {
    console.log(`${this.name} is committing changes...`);
  }
}

function canBuildUI(developer) {
  return {
    buildUI: () => {
      console.log(`${developer.name} is building UI...`);
    },
  };
}

function canBuildAPI(developer) {
  return {
    buildAPI: () => {
      console.log(`${developer.name} is building API...`);
    },
  };
}

function canDeployApp(developer) {
  return {
    deployApp: () => {
      console.log(`${developer.name} is deploying app...`);
    },
  };
}

function createFrontEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(
    developer,
    canBuildUI(developer),
    canBuildAPI(developer),
    canDeployApp(developer)
  );
}

const frontEndDeveloper = createFrontEndDeveloper("Fulan");
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(
  `is ${frontEndDeveloper.name} developer? `,
  frontEndDeveloper instanceof Developer
);

const backEndDeveloper = createBackEndDeveloper("Fulana");
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI();
console.log(
  `is ${backEndDeveloper.name} developer? `,
  backEndDeveloper instanceof Developer
);

const devOpsDeveloper = createDevOps("Fulani");
devOpsDeveloper.commitChanges();
devOpsDeveloper.deployApp();
console.log(
  `is ${devOpsDeveloper.name} developer? `,
  devOpsDeveloper instanceof Developer
);

const fullStackDeveloper = createFullStackDeveloper("Fulanah");
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployApp();
console.log(
  `is ${fullStackDeveloper.name} developer? `,
  fullStackDeveloper instanceof Developer
);

/**
 * Output:
 * Fulan is committing changes...
 * Fulan is building UI...
 * is Fulan developer?  true
 * Fulana is committing changes...
 * Fulana is building API...
 * is Fulana developer?  true
 * Fulani is committing changes...
 * Fulani is deploying app...
 * is Fulani developer?  true
 * Fulanah is building UI...
 * Fulanah is building API...
 * Fulanah is deploying app...
 * is Fulanah developer?  true
 */
