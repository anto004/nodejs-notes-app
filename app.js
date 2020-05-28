const validator = require("validator");
const getNotes = require("./notes");
const chalk = require("chalk");

console.log(validator.isEmail("anto_004@ymail.com"));

console.log(chalk`{bold Success!}`);
