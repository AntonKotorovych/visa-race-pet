import Circle from './Circle';
import Generator from '../Generator/Generator';

export default class RaceModel {
  constructor() {
    this.users = [];
    this.generator = new Generator();
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

  addBalanceCircles() {
    this.users.forEach((user, index) => {
      user.circles.push(
        new Circle({
          text: user.balance,
          x: user.circles[0].x + 280,
          y: 110 + index * 150,
          color: 'yellow',
        })
      );
    });
  }

  async validateBalance(user) {
    const timeoutDuration = this.generator.getRandomNumber(5000, 10000);

    let isValid = user.balance >= 2000;
    return new Promise(resolve => {
      setTimeout(() => {
        if (isValid) {
          user.circles[1].color = 'green';
          resolve(user);
        } else {
          user.circles[1].color = 'red';
        }
      }, timeoutDuration);
    });
  }

  async checkAge(user) {
    const timeoutDuration = this.generator.getRandomNumber(1000, 3000);

    const isValid = user.age >= 18 || user.age <= 60;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isValid) {
          resolve();
        } else {
          reject('age is too low');
        }
      }, timeoutDuration);
    });
  }

  async checkDocuments(user) {
    const timeoutDuration = this.generator.getRandomNumber(10000, 20000);

    const isValid = user.documentsQuantity.length === 3;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isValid) {
          resolve();
        } else {
          reject('documents quantity is not enough');
        }
      }, timeoutDuration);
    });
  }

  async checkEnglishLevel(user) {
    const timeoutDuration = this.generator.getRandomNumber(5000, 10000);

    const isValid = user.englishLevel === 'B!' || user.englishLevel === 'B2' || user.englishLevel === 'C1' || user.englishLevel === 'C2';
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isValid) {
          resolve();
        } else {
          reject('english level is not enough');
        }
      }, timeoutDuration);
    });
  }

  async validateUser(user) {
    await this.validateBalance(user);

    try {
      const all = await Promise.all([this.checkAge(user), this.checkDocuments(user), this.checkEnglishLevel(user)]);
      console.log(all);

      if (!this.winnerUser) this.winnerUser = user;

      return user;
    } catch (err) {
      console.log(err);
    }
  }

  async startRace() {
    this.addBalanceCircles();
    return Promise.race(this.users.map(user => this.validateUser(user)));
  }
}
