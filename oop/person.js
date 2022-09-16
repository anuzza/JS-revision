//Prototypal Inheritance
//myPerson->Person.prototype->Object.prototype->null

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;
    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });
    return bio;
  }
  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}`;
  }
  getYrsLeft() {
    return 65 - this.age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, grade) {
    super(firstName, lastName);
    this.grade = grade;
  }
  updateGrade(amt) {
    this.grade = this.grade + amt;
  }

  getBio() {
    this.status = this.grade >= 70 ? "passing" : "failing";

    return `${this.firstName} ${this.lastName} is ${this.status}`;
  }
}

const me = new Employee("Anuja", "Sharma", "19", "developer", [
  "Travelling",
  "music",
]);
//console.log(me);
me.fullName = "Claner khad";
console.log(me.getBio());

console.log(me.getYrsLeft());

const person2 = new Student("Susan", "Subedi", 24);
console.log(person2.getBio());
person2.updateGrade(50);
console.log(person2.getBio());
