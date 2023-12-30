import Generator from '../Generator/Generator';
import UsersModel from './UsersModel';
import UsersView from './UsersView';
import RaceModel from '../Race/RaceModel';
import RaceView from '../Race/RaceView';

export default class UsersController {
  constructor() {
    this.usersModel = new UsersModel();
    this.generator = new Generator();
    this.usersView = new UsersView();

    this.raceModel = new RaceModel();
    this.raceView = new RaceView();

    this.usersView.bindGeneratedFullName(this.handleGeneratedFullName);
    this.usersView.bindFullNameInput(this.handleFullNameInput);

    this.usersView.bindGeneratedBalance(this.handleGeneratedBalance);
    this.usersView.bindBalanceInput(this.handleBalanceInput);

    this.usersView.bindGeneratedAge(this.handleGeneratedAge);
    this.usersView.bindAgeInput(this.handleAgeInput);

    this.usersView.bindGeneratedDocuments(this.handleGeneratedDocuments);
    this.usersView.bindDocument(this.handleDocument);

    this.usersView.bindGeneratedEnglishLevel(this.handleGeneratedEnglishLevel);
    this.usersView.bindEnglishLevel(this.handleEnglishLevel);

    this.usersView.bindAddAllUsers(this.handleAddAllUsers);
    this.usersView.bindClearAllUsers(this.handleClearAllUsers);
    this.usersView.bindAddParticipant(this.handleAddParticipant);

    // Race

    this.usersView.bindInitRace(this.handleInitRace);
    this.raceView.bindResizeInnerWidth(this.handlerResizeWindowWidth);
    this.usersView.bindStartRace(this.handlerStartRace);
  }

  handleGeneratedFullName = () => {
    this.usersModel.addGeneratedFullName();
    this.usersView.renderFullName(this.usersModel.newUser.fullName);
  };

  handleFullNameInput = fullName => {
    this.usersModel.addFullNameInput(fullName);
  };

  handleGeneratedBalance = () => {
    this.usersModel.addGeneratedBalance();
    this.usersView.renderBalance(this.usersModel.newUser.balance);
  };

  handleBalanceInput = balance => {
    this.usersModel.addBalanceInput(balance);
  };

  handleGeneratedAge = () => {
    this.usersModel.addGeneratedAge();
    this.usersView.renderAge(this.usersModel.newUser.age);
  };

  handleAgeInput = age => {
    this.usersModel.addAgeInput(age);
  };

  handleGeneratedDocuments = () => {
    this.usersModel.addGeneratedDocuments();
    this.usersView.renderDocuments(this.usersModel.newUser.documents);
  };

  handleDocument = document => {
    this.usersModel.addToggleDocument(document);
  };

  handleGeneratedEnglishLevel = () => {
    this.usersModel.addGeneratedEnglishLevel();
    this.usersView.renderEnglishLevel(this.usersModel.newUser.englishLevel);
  };

  handleEnglishLevel = englishLevel => {
    this.usersModel.addEnglishLevel(englishLevel);
  };

  handleAddAllUsers = () => {
    this.usersModel.addAllUsers();
    this.usersView.renderParticipantsCounter(this.usersModel.participantCount);
  };

  handleClearAllUsers = () => {
    this.usersModel.clearAllUsers();
    this.usersView.renderParticipantsCounter(this.usersModel.participantCount);
    this.raceModel.users = [];
    this.raceView.clearAllCircles();
  };

  handleAddParticipant = () => {
    this.usersModel.addParticipant();
    this.usersView.renderParticipantsCounter(this.usersModel.participantCount);
  };

  // Race

  handleInitRace = () => {
    this.raceModel.addUsers(this.usersModel.users);
    this.raceView.updateCanvasSize();
    this.raceView.renderCircles(this.raceModel.users);
  };

  handlerResizeWindowWidth = () => {
    if (this.raceModel.users.length > 0) {
      this.raceView.updateCanvasSize();
    }
  };

  handlerStartRace = async () => {
    if (this.raceModel.users.length > 0) {
      this.raceView.renderRace(this.raceModel.users);
      const winner = await this.raceModel.startRace();
      console.log(winner);
    }
  };
}
