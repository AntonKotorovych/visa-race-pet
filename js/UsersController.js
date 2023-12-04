import '../scss/styles.scss';
import Generator from './Generator/Generator.js';
// import UsersModel from './UsersModel';
// import UsersView from './UsersView.js';

class UsersController {
  constructor() {
    // this.usersModel = new UsersModel();
    this.generator = new Generator();
    // this.usersView = new this.usersView();
  }

  isFullNameUnique(users, generatedFullName) {
    for (let existingUser in users) {
      const currentUserFullName = users[existingUser]?.fullName;
      if (currentUserFullName === generatedFullName) {
        return false;
      }
    }
    return true;
  }

  generateAllParticipants() {
    const users = {};

    for (let i = 0; i <= 4; i++) {
      const currentUser = `user${i}`;

      let generatedFullName = this.generator.generateFullName();

      while (!this.isFullNameUnique(users, generatedFullName)) {
        generatedFullName = this.generator.generateFullName();
      }

      users[currentUser] = {
        fullName: generatedFullName,
        balance: this.generator.generateBalance(),
        age: this.generator.generateAge(),
        documentsQuantity: this.generator.generateDocumentsQuantity(),
        englishLevel: this.generator.generateEnglishLevel(),
      };
    }
    // const usersObject = new this.usersModel();
    console.log(users);
  }
}

const users = new UsersController();

users.generateAllParticipants();
