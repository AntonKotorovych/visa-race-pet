import Generator from '../Generator/Generator';

export default class UsersModel {
  constructor(users = []) {
    this.users = users;
    this.generator = new Generator();
  }

  getIsFullNameUnique(users, generatedFullName) {
    return !users.some(user => user.fullName === generatedFullName);
  }

  addAllUsers() {
    for (let i = 0; i < 5; i++) {
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

  getUsers() {
    return this.users;
  }

  clearAllParticipants() {
    this.users = [];
  }
}
