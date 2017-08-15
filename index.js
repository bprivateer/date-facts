const moment = require('moment');
moment().format();

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));


console.log("It is the " +
chalk.blue.bold(moment().format("dddd, MMMM Do YYYY, h:mm:ss a" + ".")));

console.log("It is the " +
chalk.magenta.bold(moment().format("DDD")) + " day of the year.");

let now = moment().unix();
let midNight = [moment(0, "H").unix()];
let ans = midNight - now;

console.log( "It is " + chalk.cyan.bold(ans) + " seconds into the day!");


if (moment([2017, 8, 15]).isDST() === true){
  console.log("It " + chalk.green.bold("is ") + "daylight savings time.")
} else {
  console.log("It " + chalk.green.bold( "is not ") + "daylight savings time.");
};

if (moment([2017]).isLeapYear() === false){
  console.log("It " + chalk.red.bold("is not") + " a leap year.")
} else {
  console.log("It " + chalk.red.bold("is") + " a leap year.");
}



// if ( moment().isLeapYear === false){
// console.log( "It " + moment().isLeapYear + "not a leap year.");
// }
