//Prototypal Inheritance

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
  setName() {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const me = new Person("Anuja", "Sharma", "19", ["Travelling", "music"]);
console.log(me.getBio());

const person2 = new Person("Susan", "Subedi", 24, ["coding", "music", "cubes"]);
console.log(person2.getBio());
