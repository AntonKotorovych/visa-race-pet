export default class Generator {
  constructor() {
    this.fullNames = [
      'George Fisher',
      'John Bonham',
      'James Hetfield',
      'Stevie T',
      'Tim Henson',
      'Peter Parker',
      'Eva Elfie',
      'Scott Henderson',
      'Scott Le Page',
      'Robert Plant',
      'John Smith',
    ];

    this.englishLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    this.documents = [document.getElementById('passport'), document.getElementById('insurance'), document.getElementById('photo')];
  }

  getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

  getRandomizeChance(succeedPercentage) {
    const percents = Math.floor(Math.random() * 100) + 1;
    return percents <= succeedPercentage ? true : false;
  }

  generateFullName() {
    const randomIndex = this.getRandomIndex(this.fullNames.length);
    const fullNameValue = this.fullNames[randomIndex];
    return this.fullNames.find(fullName => fullName === fullNameValue);
  }

  generateBalance() {
    const isSucceedGeneration = this.getRandomizeChance(60);
    let balance = 0;

    if (isSucceedGeneration) {
      balance = 2000;
      balance += this.getRandomIndex(8000);
    }
    balance += this.getRandomIndex(1999);

    return balance;
  }

  generateAge() {
    const isSucceedGeneration = this.getRandomizeChance(70);
    let age = 0;

    if (isSucceedGeneration) {
      age = 18;
      age += this.getRandomIndex(42);
    }
    age += this.getRandomIndex(18);

    return age;
  }

  generateDocumentsQuantity() {
    const isSucceedGeneration = this.getRandomizeChance(80);
    let documentsQuantity = 0;

    if (isSucceedGeneration) {
      return (documentsQuantity = 3);
    }

    return (documentsQuantity += this.getRandomIndex(3));
  }

  generateEnglishLevel() {
    const isSucceedGeneration = this.getRandomizeChance(30);
    const isValidEnglishLevels = this.englishLevels.slice(2);
    const isNotValidEnglishLevels = this.englishLevels.slice(0, 2);

    if (isSucceedGeneration) return isValidEnglishLevels[this.getRandomIndex(isValidEnglishLevels.length)];

    return isNotValidEnglishLevels[this.getRandomIndex(isNotValidEnglishLevels.length)];
  }

  generateAllParticipants() {
    const participants = {};

    for (let i = 0; i <= 4; i++) {
      const currentId = `id${i}`;
      participants[currentId] = {
        fullName: this.generateFullName(),
        balance: this.generateBalance(),
        age: this.generateAge(),
        documents: this.generateDocumentsQuantity(),
        englishLevel: this.generateEnglishLevel(),
      };
    }

    return participants;
  }
}
