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

  addBalanceCircle(user) {
    user.circles.push(
      new Circle({
        text: `Balance ${user.balance}`,
        x: user.circles[0].x + 280,
        y: user.circles[0].y,
        color: 'yellow',
      })
    );
  }

  addThirdPhaseCircles(user) {
    const thirdPhaseCirclesData = [
      { text: 'Age', relativePosition: -40 },
      { text: 'Documents', relativePosition: 0 },
      { text: 'EnglishLevel', relativePosition: 40 },
    ];

    thirdPhaseCirclesData.forEach(item => {
      user.circles.push(
        new Circle({
          text: item.text,
          x: user.circles[1].x + 280,
          y: user.circles[1].y + item.relativePosition,
          radius: 20,
          color: 'yellow',
        })
      );
    });
  }

  validateBalance(user) {
    this.addBalanceCircle(user);
    const timeoutDuration = this.generator.getRandomNumber(5000, 10000);

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
          reject(`${user.fullName}'s age is too low`);
        }
      }, timeoutDuration);
    });
  }

  checkDocuments(user) {
    const timeoutDuration = this.generator.getRandomNumber(10000, 20000);
    const validDocuments = this.generator.documents;
    const isValid = validDocuments.every((document, index) => document === user.documents[index]);

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

  checkEnglishLevel(user) {
    const timeoutDuration = this.generator.getRandomNumber(5000, 10000);

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
    this.winnerUser = undefined;

    return await Promise.race(
      this.users.map(user => {
        return this.validateUser(user);
      })
    );
  }
}
