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
}
