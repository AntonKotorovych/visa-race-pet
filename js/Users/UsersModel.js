import Generator from '../Generator/Generator';

export default class UsersModel {
  constructor(users = []) {
    this.users = users;
    this.newUser = {};
    this.generator = new Generator();
  }

  addFullName(fullName) {
    this.newUser.fullName = fullName;
  }

  addBalance(balance) {
    this.newUser.balance = balance;
  }

  addAge(age) {
    this.newUser.age = age;
  }

  addDocument(document) {
    this.newUser.documents.push(document);
  }

  addDocuments(documents) {
    this.newUser.documents = documents;
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

  addParticipant() {
    if (this.users.length === 5) return;
    this.users.push(this.newUser);
    this.newUser = {};
  }

  getUsers() {
    return this.users;
  }
}
