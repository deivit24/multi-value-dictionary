require("dotenv").config();
const conf = new (require("conf"))();
const chalk = require("chalk");

/**
 * Adds member to a key
 * @param  {String} key The key string
 * @param  {String} member The member string
 * @return {Array}  The array of members of given key
 *
 */
const add = (key, member) => {
  // get key member dictionary
  const km = process.env.DICTIONARY;
  let keyMembers = conf.get(km);

  // if no keyMembers init empty object
  if (!keyMembers) {
    keyMembers = {};
  }

  // if key doesn't exist, create key and add member
  if (!keyMembers[key]) {
    keyMembers[key] = [member];
    console.log(chalk.green.bold("Successfully Added!"));
    // else if member in key, log an error
  } else if (keyMembers[key].includes(member)) {
    console.log(
      chalk.red.bold(
        `ERROR, member: "${member}"  already exists on key: "${key}"`
      )
    );
    return null;
    // else add member to key
  } else {
    keyMembers[key].push(member);
    console.log(chalk.green.bold("Successfully Added!"));
  }

  //set key-members in conf
  conf.set(km, keyMembers);
  return keyMembers[key];
};

module.exports = add;
