import '../scss/styles.scss';
import Generator from './Generator/Generator.js';
import UsersModel from './UsersModel';
import UsersView from './UsersView.js';

class UsersController {
  constructor() {
    this.usersModel = new UsersModel([]);
    this.generator = new Generator();
    this.usersView = new UsersView();
  }

  isFullNameUnique(users, generatedFullName) {
    return !users.some(user => user.fullName === generatedFullName);
  }

  generateAllParticipants() {
    if (this.usersModel.users.length > 0) this.clearAllParticipants();

    for (let i = 0; i < 5; i++) {
      let generatedFullName = this.generator.generateFullName();

      while (!this.isFullNameUnique(this.usersModel.getUsers(), generatedFullName)) {
        generatedFullName = this.generator.generateFullName();
      }

      const newUser = {
        fullName: generatedFullName,
        balance: this.generator.generateBalance(),
        age: this.generator.generateAge(),
        documentsQuantity: this.generator.generateDocumentsQuantity(),
        englishLevel: this.generator.generateEnglishLevel(),
      };

      this.usersModel.addUser(newUser);
    }

    const users = this.usersModel.getUsers();
    console.log(users);
  }

  clearAllParticipants() {
    this.usersModel.users = [];
  }
}

const fullName = document.getElementById('fullName');

const generateFullName = document.getElementById('generateFullName');
const generateBalance = document.getElementById('generateBalance');
const generateAge = document.getElementById('generateAge');
const generateDocuments = document.getElementById('generateDocuments');
const generateEnglishLevel = document.getElementById('generateEnglishLevel');

const generateAll = document.getElementById('generateAll');

const users = new UsersController();

document.addEventListener('click', event => {
  event.preventDefault();
  if (event.target === generateAll) {
    users.generateAllParticipants();
  }

  if (event.target === generateFullName) {
    fullName.value = users.generator.generateFullName();
    // console.log(generateFullName);
  }
});
