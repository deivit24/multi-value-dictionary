require("dotenv").config();
const conf = new (require("conf"))();
const chalk = require("chalk");

/**
 * Removes member from a key
 * @param  {String} key The key string
 * @param  {String} member The member string
 * @return {Object}  The key member dictionary
 *
 */
const remove = (key, member) => {
  // get key member dictionary
  const km = process.env.DICTIONARY;
  const keyMembers = conf.get(km);

  // if key does not exist, console log an error
  if (!keyMembers[key]) {
    console.log(chalk.red.bold(`ERROR, key: "${key}" does not exist`));
    // if member exists in key, remove
  } else if (keyMembers[key].includes(member)) {
    keyMembers[key] = keyMembers[key].filter((m) => m !== member);
    console.log(
      chalk.yellow.bold(
        `Member: "${member}" successfully removed from key: "${key}".`
      )
    );
    // if member does not exist in key, console log error message
  } else {
    console.log(
      chalk.red.bold(
        `ERROR, member: "${member}" does not exist on key: "${key}"`
      )
    );
  }

  // if there are zero members delete key
  if (keyMembers[key] && !keyMembers[key].length) {
    delete keyMembers[key];
  }

  conf.set(km, keyMembers);
  return keyMembers;
};

/**
 * Removes all members from given key
 * @param  {String} key The key string
 * @return {Object} The key member dictionary
 *
 */
const removeAll = (key) => {
  // get key member dictionary
  const km = process.env.DICTIONARY;
  const keyMembers = conf.get(km);
  // if key does not exist, console log an error
  if (!keyMembers[key]) {
    console.log(chalk.red.bold(`ERROR, key: "${key}" does not exist`));
    // if key exist, remove all members from keys
  } else {
    keyMembers[key] = [];
    delete keyMembers[key];
    console.log(chalk.yellow.bold(`All members from key: "${key}" removed.`));
    conf.set(km, keyMembers);
    return conf.get(km);
  }
};

module.exports = { remove, removeAll };
