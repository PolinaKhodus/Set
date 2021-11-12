export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже сущуствует!');
    } else {
      this.members.add(character);
    }
  }

  addAll(...all) {
    for (const key of all) {
      this.members.add(key);
    }
  }

  toArray() {
    const array = [];
    this.members.forEach((elem) => { array.push(elem); });
    return array;
  }
}
