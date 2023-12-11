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

  addDocuments(documents) {
    this.newUser.documents = documents;
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
    for (let i = 0; i < 5; i++) {
      if (this.users.length === 5) return;

      let generatedFullName = this.generator.generateFullName();

      while (!this.getIsFullNameUnique(this.getUsers(), generatedFullName)) {
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
  }

  clearAllUsers() {
    this.users = [];
  }

  addParticipant(documents) {
    if (this.users.length === 5) return;
    this.newUser.documents = documents;
    this.users.push(this.newUser);
    this.newUser = {};
  }

  getUsers() {
    return this.users;
  }
}
