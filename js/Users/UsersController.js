import Generator from '../Generator/Generator';
import UsersModel from './UsersModel';
import UsersView from './UsersView';

export default class UsersController {
  constructor() {
    this.usersModel = new UsersModel();
    this.generator = new Generator();
    this.usersView = new UsersView();

    this.usersView.bindFullNameInput(this.handleFullName);
    this.usersView.bindBalanceInput(this.handleBalance);
    this.usersView.bindAgeInput(this.handleAge);
    this.usersView.bindDocumentsInput(this.handleDocuments);
    this.usersView.bindEnglishLevelInput(this.handleEnglishLevel);
  }

  handleFullName = fullName => {
    this.usersModel.addFullName(fullName);
  };

  handleBalance = balance => {
    this.usersModel.addBalance(balance);
  };

  handleAge = age => {
    this.usersModel.addAge(age);
  };

  handleDocuments = documents => {
    this.usersModel.addDocuments(documents);
  };

  handleEnglishLevel = englishLevel => {
    this.usersModel.addEnglishLevel(englishLevel);
  };

  generateAllParticipants() {
    if (this.usersModel.users.length > 0) this.clearAllParticipants();
    this.usersModel.addAllUsers();
    console.log(this.usersModel.users);
  }

  generateFullName() {
    return this.generator.generateFullName();
  }

  generateBalance() {
    return this.generator.generateBalance();
  }

  generateAge() {
    return this.generator.generateAge();
  }

  generateDocuments() {
    return this.generator.generateDocuments();
  }

  generateEnglishLevel() {
    return this.generator.generateEnglishLevel();
  }

  clearAllParticipants() {
    this.usersModel.clearAllParticipants();
  }
}
