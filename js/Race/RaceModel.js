import Circle from './Circle';
import Generator from '../Generator/Generator';

export default class RaceModel {
  constructor() {
    this.users = [];
    this.generator = new Generator();
    this.winner = {};
  }

  resetWinner() {
    if (this.winner.user) this.winner = {};
  }

  addUsers(users) {
    users.forEach((user, index) => {
      if (this.users.length >= 5) return;
      this.users.push({
        ...user,
        circles: [
          new Circle({
            text: user.fullName,
            x: 150,
            y: 110 + index * 150,
          }),
        ],
      });
    });
  }

  addBalanceCircle(user, endAngleStep) {
    user.circles.push(
      new Circle({
        text: `Balance ${user.balance}`,
        x: user.circles[0].x + 280,
        y: user.circles[0].y,
        color: 'yellow',
        endAngle: 0,
        endAngleStep,
      })
    );
  }

  validateBalance(user) {
    const timeoutDuration = this.generator.getRandomNumber(5000, 10000);

    const balanceEndAngleStep = this.generator.generateEndAngleCircleStep(timeoutDuration);
    this.addBalanceCircle(user, balanceEndAngleStep);

    let isValid = user.balance >= 2000;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isValid) {
          user.circles[1].color = 'green';
          resolve(user);
        } else {
          user.circles[1].color = 'red';
          reject(`User ${user.fullName} balance is not valid`);
        }
      }, timeoutDuration);
    });
  }

  addAgeCircle(user, endAngleStep) {
    user.circles.push(
      new Circle({
        text: 'Age',
        x: user.circles[1].x + 280,
        y: user.circles[1].y - 40,
        radius: 20,
        endAngle: 0,
        endAngleStep,
        color: 'yellow',
      })
    );
  }

  checkAge(user) {
    const timeoutDuration = this.generator.getRandomNumber(1000, 3000);

    const ageEndAngleStep = this.generator.generateEndAngleCircleStep(timeoutDuration);

    this.addAgeCircle(user, ageEndAngleStep);

    const isValid = user.age >= 18 && user.age <= 60 ? true : false;

    console.log(isValid, user.age, user.fullName);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isValid) {
          user.circles[2].color = 'green';
          resolve();
        } else {
          user.circles[2].color = 'red';
          reject(`${user.fullName}'s age is too low`);
        }
      }, timeoutDuration);
    });
  }

  addDocumentsCircle(user, endAngleStep) {
    user.circles.push(
      new Circle({
        text: 'Documents',
        x: user.circles[1].x + 280,
        y: user.circles[1].y,
        radius: 20,
        endAngle: 0,
        endAngleStep,
        color: 'yellow',
      })
    );
  }

  checkDocuments(user) {
    const timeoutDuration = this.generator.getRandomNumber(10000, 20000);

    const documentsEndAngleStep = this.generator.generateEndAngleCircleStep(timeoutDuration);
    this.addDocumentsCircle(user, documentsEndAngleStep);

    const validDocuments = this.generator.documents;
    const isValid = validDocuments.every(document => user.documents.includes(document));

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isValid) {
          user.circles[3].color = 'green';
          resolve();
        } else {
          user.circles[3].color = 'red';
          reject(`${user.fullName}'s documents quantity is not enough`);
        }
      }, timeoutDuration);
    });
  }

  addEnglishLevelCircle(user, endAngleStep) {
    user.circles.push(
      new Circle({
        text: 'English Level',
        x: user.circles[1].x + 280,
        y: user.circles[1].y + 40,
        radius: 20,
        endAngle: 0,
        endAngleStep,
        color: 'yellow',
      })
    );
  }

  checkEnglishLevel(user) {
    const timeoutDuration = this.generator.getRandomNumber(5000, 10000);

    const englishLevelEndAngleStep = this.generator.generateEndAngleCircleStep(timeoutDuration);
    this.addEnglishLevelCircle(user, englishLevelEndAngleStep);

    const isValid = this.generator.englishLevels.includes(user.englishLevel, 2);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isValid) {
          user.circles[4].color = 'green';
          resolve();
        } else {
          user.circles[4].color = 'red';
          reject(`${user.fullName}'s english level is not enough`);
        }
      }, timeoutDuration);
    });
  }

  async validateUser(user) {
    try {
      await this.validateBalance(user);
      await Promise.all([this.checkAge(user), this.checkDocuments(user), this.checkEnglishLevel(user)]);

      if (!Object.keys(this.winner).length) {
        this.winner.user = user;
      }

      return user;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async startRace() {
    return await Promise.race(
      this.users.map(user => {
        return this.validateUser(user);
      })
    );
  }
}
