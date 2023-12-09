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

    this.documents = ['passport', 'insurance', 'photo'];
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomizeChance(succeedPercentage) {
    const percents = Math.floor(Math.random() * 100) + 1;
    return percents <= succeedPercentage;
  }

  generateFullName() {
    const fullName = this.fullNames[this.getRandomNumber(0, this.fullNames.length - 1)];
    return fullName;
  }

  generateBalance() {
    const isSucceedGeneration = this.getRandomizeChance(60);

    if (isSucceedGeneration) {
      return this.getRandomNumber(2000, 10000);
    } else {
      return this.getRandomNumber(0, 1999);
    }
  }

  generateAge() {
    const isSucceedGeneration = this.getRandomizeChance(70);

    if (isSucceedGeneration) {
      return this.getRandomNumber(18, 60);
    } else {
      return this.getRandomNumber(1, 17);
    }
  }

  generateDocuments() {
    const isSucceedGeneration = this.getRandomizeChance(80);

    if (isSucceedGeneration) {
      return this.documents;
    } else {
      return this.documents.slice(0, this.getRandomNumber(1, 2));
    }
  }

  generateEnglishLevel() {
    const isSucceedGeneration = this.getRandomizeChance(30);
    const validEnglishLevels = this.englishLevels.slice(2);
    const notValidEnglishLevels = this.englishLevels.slice(0, 2);

    if (isSucceedGeneration) return validEnglishLevels[this.getRandomNumber(0, validEnglishLevels.length - 1)];

    return notValidEnglishLevels[this.getRandomNumber(0, notValidEnglishLevels.length - 1)];
  }
}
