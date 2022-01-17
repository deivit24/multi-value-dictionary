require("dotenv").config();
const conf = new (require("conf"))();
const chalk = require("chalk");

/**
 * All keys in the dictionary and all of their members.
 * @return {Object}  Object of every key and member pair
 *
 */
const items = () => {
  // get key member dictionary
  const km = process.env.DICTIONARY;
  const keyMembers = conf.get(km);

  // get array of keys
  const keys = Object.keys(keyMembers);

  // create a counter starting at 1
  let counter = 1;
  let items = {};
  // if there are keys, loop and merge array
  if (keys.length) {
    keys.forEach((key, index) => {
      keyMembers[key].forEach((m, i) => {
        console.log(chalk.greenBright(`${counter}) ${key}: ${m}`));

        items[counter] = `${key}: ${m}`;
        counter++;
      });
    });
    return items;
    // if no keys, console log an error message
  } else {
    console.log(chalk.red.bold("You don't have any KEYS yet."));
    return null;
  }
};

module.exports = items;
