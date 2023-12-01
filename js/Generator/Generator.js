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
    return percents >= succeedPercentage ? true : false;
  }

  generateFullName() {
    const randomIndex = this.getRandomIndex(this.fullNames.length);
    const fullNameValue = this.fullNames[randomIndex];
    return this.fullNames.find(fullName => fullName === fullNameValue);
  }

  generateBalance() {
    const isSucceedGeneration = this.getRandomizeChance(60);
    let currentBalance = 0;

    if (isSucceedGeneration) {
      currentBalance = 2000;
      currentBalance += this.getRandomIndex(8000);
    }
    currentBalance += this.getRandomIndex(1999);

    return currentBalance;
  }
}
