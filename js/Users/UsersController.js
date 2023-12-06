import Generator from '../Generator/Generator';
import UsersModel from './UsersModel';
import UsersView from './UsersView';

class UsersController {
  constructor() {
    this.usersModel = new UsersModel();
    this.generator = new Generator();
    this.usersView = new UsersView();
  }

  generateAllParticipants() {
    if (this.usersModel.users.length > 0) this.clearAllParticipants();

    this.usersModel.addAllUsers();
    console.log(this.usersModel.getUsers());
  }

  clearAllParticipants() {
    this.usersModel.clearAllParticipants();
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
  const documents = users.generator.generateDocuments();
  users.usersView.renderDocumentsInput(documents);
});

generateEnglishLevelButton.addEventListener('click', () => {
  const englishLevel = users.generator.generateEnglishLevel();
  users.usersView.renderEnglishLevelInput(englishLevel);
});

export * from './UsersController';
