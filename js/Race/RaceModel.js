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
          text: `Balance ${user.balance}`,
          x: user.circles[0].x + 280,
          y: 110 + index * 150,
          color: 'yellow',
        })
      );
    });
  }

  addThirdPhaseCircles(user) {
    let previousY = user.circles[1].y - 50;
    let age = 'Age';
    let documents = 'Documents';
    let englishLevel = 'English Level';
    const text = [age, documents, englishLevel];
    for (let i = 0; i < 3; i++) {
      user.circles.push(
        new Circle({
          text: text[i],
          x: user.circles[1].x + 280,
          y: previousY,
          radius: 25,
          color: 'yellow',
        })
      );
      previousY += 50;
    }
  }

  validateBalance(user) {
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

  checkAge(user) {
    const timeoutDuration = this.generator.getRandomNumber(1000, 3000);

    const isValid = user.age >= 18 || user.age <= 60;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isValid) {
          user.circles[2].color = 'green';
          resolve();
        } else {
          user.circles[2].color = 'red';
          reject('age is too low');
        }
      }, timeoutDuration);
    });
  }

  checkDocuments(user) {
    const timeoutDuration = this.generator.getRandomNumber(10000, 20000);

    const isValid = user.documentsQuantity.length === 3;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isValid) {
          user.circles[3].color = 'green';
          resolve();
        } else {
          user.circles[3].color = 'red';
          reject('documents quantity is not enough');
        }
      }, timeoutDuration);
    });
  }

  checkEnglishLevel(user) {
    const timeoutDuration = this.generator.getRandomNumber(5000, 10000);

    const isValid = user.englishLevel === 'B1' || user.englishLevel === 'B2' || user.englishLevel === 'C1' || user.englishLevel === 'C2';
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isValid) {
          user.circles[4].color = 'green';
          resolve();
        } else {
          user.circles[4].color = 'red';
          reject('english level is not enough');
        }
      }, timeoutDuration);
    });
  }

  async validateUser(user) {
    await this.validateBalance(user);

    try {
      this.addThirdPhaseCircles(user);
      await Promise.all([this.checkAge(user), this.checkDocuments(user), this.checkEnglishLevel(user)]);

      if (!this.winnerUser) {
        this.winnerUser = user;
      }
      console.log(this.winnerUser);

      return user;
    } catch (err) {
      console.log(err);
    }
  }

  async startRace() {
    this.addBalanceCircles();
    this.winnerUser = undefined;

    return await Promise.race(
      this.users.map(user => {
        return this.validateUser(user);
      })
    );
  }
}
