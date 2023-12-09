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
    this.usersView.bindAddAllUsers(this.handleAddAllUsers);
    this.usersView.bindClearAllUsers(this.handleClearAllUsers);
    this.usersView.bindAddParticipant(this.handleAddParticipant);
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

  handleAddAllUsers = () => {
    this.usersModel.addAllUsers();
  };

  handleClearAllUsers = () => {
    this.usersModel.clearAllUsers();
  };

  handleAddParticipant = () => {
    this.usersModel.addParticipant();
  };
}
