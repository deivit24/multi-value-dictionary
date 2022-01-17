require("dotenv").config();
const conf = new (require("conf"))();
const chalk = require("chalk");

/**
 * Gets all members from given key
 * @param  {String} key The key string
 * @return {Array} All members from key
 *
 */
const members = (key) => {
  // get key member dictionary
  const km = process.env.DICTIONARY;
  const keyMembers = conf.get(km);

  // if key exists, return collection of strings
  if (keyMembers[key]) {
    keyMembers[key].forEach((m, i) => {
      console.log(chalk.greenBright(`${i + 1}) ${m}`));
    });
    return keyMembers[key];
    // if key does not exist, show error message
  } else {
    console.log(chalk.red.bold(`ERROR, key: "${key}" does not exist.`));
    return null;
  }
};

/**
 * Checks if member in key exists
 * @param  {String} key The key string
 * @param  {String} member The member string
 * @return {Boolean} Boolean
 *
 */
const memberExists = (key, member) => {
  // get key member dictionary
  const km = process.env.DICTIONARY;
  const keyMembers = conf.get(km);

  // if member exists in key console log true
  if (keyMembers[key].includes(member)) {
    console.log(chalk.greenBright(true));
    return true;
    // if member does not exists in key console log false
  } else {
    console.log(chalk.yellow(false));
    return false;
  }
};

/**
 * Returns all the members in the dictionary.
 * @param  {String} key The key string
 * @param  {String} member The member string
 * @return {Array} Array of every member from every key
 *
 */
const allMembers = () => {
  // get key member dictionary
  const km = process.env.DICTIONARY;
  const keyMembers = conf.get(km);

  // get array of keys
  const keys = Object.keys(keyMembers);

  // create empty array
  let allMembers = [];

  // if there are keys, loop and merge array
  if (keys.length) {
    keys.forEach((key) => {
      allMembers = [...allMembers, ...keyMembers[key]];
    });
    // if no keys, console log an error message
  } else {
    console.log(chalk.red.bold("You don't have any KEYS yet."));
  }
  // if allMembers has length console log all members
  if (allMembers.length) {
    allMembers.forEach((m, i) => {
      console.log(chalk.greenBright(`${i + 1}) ${m}`));
    });
  }
  return allMembers;
};

module.exports = { members, allMembers, memberExists };
