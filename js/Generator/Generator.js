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
    return Math.floor(Math.random() * max) + 1;
  }

  generateFullName() {
    const randomIndex = this.getRandomIndex(this.fullNames.length);
    const fullNameElement = this.fullNames[randomIndex - 1];
    const elem = this.fullNames.find(fullName => fullName === fullNameElement);
    console.log(randomIndex);
    console.log(fullNameElement);
    console.log(elem);
  }
}
