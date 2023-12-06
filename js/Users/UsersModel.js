export default class UsersModel {
  constructor(users) {
    this.users = users;
  }

  addUser(user) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}
