// const myAge = 9;
// const message = myAge >= 18 ? "you can vote" : "you cannot vote";

// console.log(message);

const myAge = 19;
const showPage = () => {
  console.log("showing the page");
};
const showErrorPage = () => {
  console.log("show error page");
};

const message = myAge >= 21 ? showPage() : showErrorPage();

const team = ["Tyler", "Porter"];
const msg =
  team.length <= 4
    ? `Team size: ${team.length}`
    : "Too many people on you team";
console.log(msg);
