const people = [
  {
    name: "Anuja",
    age: 19,
  },
  {
    name: "Andrew",
    age: 22,
  },
  {
    name: "Susan",
    age: 31,
  },
];

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const p2 = people.find((person) => person.age === 22);
console.log(p2.name);
