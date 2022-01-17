require("dotenv").config();
const conf = new (require("conf"))();
const chalk = require("chalk");

/**
 * clears all keys and members from dictionary
 * @return {Object}  Empty object
 *
 */
const clear = () => {
  // sets key-members to empty
  const km = process.env.DICTIONARY;
  conf.set(km, {});
  console.log(chalk.yellow.bold("Cleared"));
  return {};
};

module.exports = clear;
