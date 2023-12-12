import Generator from '../Generator/Generator';

export default class UsersModel {
  constructor(users = []) {
    this.users = users;
    this.newUser = {
      fullName: '',
      balance: '',
      age: '',
      documents: [],
      englishLevel: '',
    };
    this.generator = new Generator();
  }

  addGeneratedFullName() {
    this.newUser.fullName = this.generator.generateFullName();
  }

  addFullNameInput(fullName) {
    this.newUser.fullName = fullName;
  }

  addGeneratedBalance() {
    this.newUser.balance = this.generator.generateBalance();
  }

  addBalanceInput(balance) {
    this.newUser.balance = balance;
  }

  addGeneratedAge() {
    this.newUser.age = this.generator.generateAge();
  }

  addAgeInput(age) {
    this.newUser.age = age;
  }

  addGeneratedDocuments() {
    this.newUser.documents = this.generator.generateDocuments();
  }

  addToggleDocument(newDocument) {
    const documentsArray = this.newUser.documents.filter(document => document !== newDocument);

    if (documentsArray.length === this.newUser.documents.length) documentsArray.push(newDocument);

    this.newUser.documents = documentsArray;
  }

  addGeneratedEnglishLevel() {
    this.newUser.englishLevel = this.generator.generateEnglishLevel();
  }

  addEnglishLevel(englishLevel) {
    this.newUser.englishLevel = englishLevel;
  }

  getIsFullNameUnique(users, generatedFullName) {
    return !users.some(user => user.fullName === generatedFullName);
  }

  addAllUsers() {
    console.log(this);
    for (let i = 0; i < 5; i++) {
      if (this.users.length === 5) return;

      let generatedFullName = this.generator.generateFullName();

      while (!this.getIsFullNameUnique(this.users, generatedFullName)) {
        generatedFullName = this.generator.generateFullName();
      }

      const newUser = {
        fullName: generatedFullName,
        balance: this.generator.generateBalance(),
        age: this.generator.generateAge(),
        documentsQuantity: this.generator.generateDocuments(),
        englishLevel: this.generator.generateEnglishLevel(),
      };

      this.users.push(newUser);
    }
    alert('Maximum participants have been added, happy racing!');
  }

  clearAllUsers() {
    this.users = [];
    alert('All participants have been removed');
  }

  addParticipant() {
    if (this.users.length === 5) {
      alert('You cannot add more than five participants');
      return;
    }

    this.users.push(this.newUser);
    this.newUser = {
      fullName: '',
      balance: '',
      age: '',
      documents: [],
      englishLevel: '',
    };
  }

  get participantCount() {
    return `${this.users.length} / 5 participants added`;
  }
}
