require("dotenv").config();
const conf = new (require("conf"))();
const chalk = require("chalk");

/**
 * Returns all the keys in the dictionary
 * @return {Array}  The array all the keys in the dictionary
 *
 */
const keys = () => {
  // get key member dictionary
  const km = process.env.DICTIONARY;
  const keyMembers = conf.get(km);

  // get array of keys
  const keys = Object.keys(keyMembers);

  // if there are keys loop and console log them
  if (keys.length) {
    keys.forEach((key, i) => {
      console.log(chalk.greenBright(`${i + 1}) ${key}`));
    });

    return keys;
    // if no keys, console log an error message
  } else {
    console.log(chalk.red.bold("You don't have any KEYS yet."));
    return null;
  }
};

/**
 * Checks to see if key exists in dictionary
 * @param {String} key The key string
 * @return {Boolean}  Boolean
 *
 */
const keyExists = (key) => {
  // get key member dictionary
  const km = process.env.DICTIONARY;
  const keyMembers = conf.get(km);

  // if key exists, log true
  if (keyMembers[key]) {
    console.log(chalk.greenBright.bold("true"));
    return true;

    // if key does not exists, log false
  } else {
    console.log(chalk.yellow.bold("false"));
    return false;
  }
};

module.exports = { keys, keyExists };
