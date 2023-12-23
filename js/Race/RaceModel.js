export default class RaceModel {
  constructor() {
    this.users = [];
  }

  addUsers(users) {
    users.forEach(user => {
      if (this.users.length >= 5) return;
      this.users.push({
        username: user.fullName,
        circles: [user.balance, user.age, user.documentsQuantity, user.englishLevel],
      });
    });
  }

  get usernames() {
    const usernames = [];

    this.users.forEach(user => usernames.push(user.username));
    return usernames;
  }

  get balances() {
    const balances = [];
    this.users.forEach(user => balances.push(user.circles[0]));
    return balances;
  }
}
