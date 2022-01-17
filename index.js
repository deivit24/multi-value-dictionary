#! /usr/bin/env node

const { program } = require("commander");
const { keys, keyExists } = require("./commands/keys");
const add = require("./commands/add");
const items = require("./commands/items");
const clear = require("./commands/clear");
const { members, allMembers, memberExists } = require("./commands/members");
const { remove, removeAll } = require("./commands/remove");

program
  .command("KEYS")
  .description("Returns all the keys in the dictionary")
  .action(keys);

program
  .command("ADD <key> <member>")
  .description("Adds a member to a collection for a given key")
  .action(add);

program
  .command("REMOVE <key> <member>")
  .description("Removes a member from a key.")
  .action(remove);

program
  .command("REMOVEALL <key>")
  .description(
    "Removes all members for a key and removes the key from the dictionary."
  )
  .action(removeAll);

program
  .command("CLEAR")
  .description("Removes all keys and all members from the dictionary.")
  .action(clear);

program
  .command("MEMBERS <key>")
  .description("Returns the collection of strings for the given key.")
  .action(members);

program
  .command("MEMBEREXISTS <key> <member>")
  .description(
    "Returns whether a member exists within a key. Returns false if the key does not exist."
  )
  .action(memberExists);

program
  .command("ALLMEMBERS")
  .description("Returns all the members in the dictionary.")
  .action(allMembers);

program
  .command("KEYEXISTS <key>")
  .description(
    "Returns whether a member exists within a key. Returns false if the key does not exist."
  )
  .action(keyExists);

program
  .command("ITEMS")
  .description("Returns all keys in the dictionary and all of their members.")
  .action(items);

program.parse();
