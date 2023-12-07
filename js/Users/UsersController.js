import Generator from '../Generator/Generator';
import UsersModel from './UsersModel';
import UsersView from './UsersView';

class UsersController {
  constructor() {
    this.usersModel = new UsersModel();
    this.generator = new Generator();
    this.usersView = new UsersView();

    this.usersView.bindFullNameGenerateButton(this);
  }

  generateAllParticipants() {
    if (this.usersModel.users.length > 0) this.clearAllParticipants();

    this.usersModel.addAllUsers();
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

export * from './UsersController';
