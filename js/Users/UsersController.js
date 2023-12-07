import Generator from '../Generator/Generator';
import UsersModel from './UsersModel';
import UsersView from './UsersView';

export default class UsersController {
  constructor() {
    this.usersModel = new UsersModel();
    this.generator = new Generator();
    this.usersView = new UsersView();

    this.usersView.bindEvents(this);
  }

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
