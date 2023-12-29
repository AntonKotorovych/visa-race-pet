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
    console.log(user);
    return new Promise(resolve => {
      setTimeout(() => {
        if (isValid) {
          user.circles[1].color = 'green';
          resolve(user.circles[1].color);
        } else {
          user.circles[1].color = 'red';
          resolve(user.circles[1].color);
        }
      }, timeoutDuration);
    });
  }

  async validateUser(user) {
    const result = await this.validateBalance(user);
    console.log(user.circles);
  }

  async startRace() {
    this.addBalanceCircles();
    return Promise.race(this.users.map(user => this.validateUser(user)));
  }
}
