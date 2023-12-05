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
  }

  clearAllParticipants() {
    this.usersModel.users = [];
  }
}

// Handling user's actions

const generateFullNameButton = document.getElementById('generateFullName');
const generateBalanceButton = document.getElementById('generateBalance');
const generateAgeButton = document.getElementById('generateAge');
const generateDocumentsButton = document.getElementById('generateDocuments');
const generateEnglishLevelButton = document.getElementById('generateEnglishLevel');

const generateAllButton = document.getElementById('generateAll');

const users = new UsersController();

// preventDefault listener
document.addEventListener('click', event => {
  if (event.target.type === 'checkbox') return;
  event.preventDefault();
});

generateAllButton.addEventListener('click', () => {
  users.generateAllParticipants();
});

generateFullNameButton.addEventListener('click', () => {
  const fullName = users.generator.generateFullName();
  users.usersView.renderFullNameInput(fullName);
});

generateBalanceButton.addEventListener('click', () => {
  const balance = users.generator.generateBalance();
  users.usersView.renderBalanceInput(balance);
});

generateAgeButton.addEventListener('click', () => {
  const age = users.generator.generateAge();
  users.usersView.renderAgeInput(age);
});

generateDocumentsButton.addEventListener('click', () => {
  const documentsQuantity = users.generator.generateDocumentsQuantity();
  users.usersView.renderDocumentsInput(documentsQuantity);
});

generateEnglishLevelButton.addEventListener('click', () => {
  const englishLevel = users.generator.generateEnglishLevel();
  users.usersView.renderEnglishLevelInput(englishLevel);
});
