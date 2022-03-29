import uniqid from "uniqid";

export default class User {
  constructor(name = "", age = null) {
    this.id = uniqid();
    this.name = name;
    this.age = age;
  }

  get isValid() {
    return !!(this.name && this.age);
  }
}
