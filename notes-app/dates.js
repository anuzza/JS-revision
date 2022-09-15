// Unix Epoch - January 1st 1970 00:00:00

const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

// 1. Create two dates in the past (use string for Date)
// 2. Get timestamps for both
// 3. Figure out which is first and print its time (use toString)

const dateOne = new Date("March 1 2017 12:00:00");
const dateTwo = new Date();
const dateOneTimestamp = dateOne.getTime();
const dateTwoTimestamp = dateTwo.getTime();

if (dateOneTimestamp < dateTwoTimestamp) {
  console.log(dateOne.toString());
} else if (dateTwoTimestamp < dateOneTimestamp) {
  console.log(dateTwo.toString());
}

// const now = moment();
// console.log(now.toString());
// now.subtract(1, "week").subtract(20, "days");
// now.minute(1);
// console.log(now.toString());
// //November 3rd, 2003
// console.log(now.format("MMMM Do, YYYY"));
// console.log(now.fromNow());
// const nowTimeStamp = now.valueof();

// console.log(nowTimeStamp);
// console.log(moment(nowTimeStamp).toString);

//1. create a new moment
//2. Set the month, day, and year to your birthday
//3. use format to print it in the following way: Jan 6, 1991
const birthday = moment();
birthday.year(2002).month(10).date(29);
console.log(birthday.format("MMM Do, YYYY"));
