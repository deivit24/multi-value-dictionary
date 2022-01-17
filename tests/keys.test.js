require("dotenv").config();
const conf = new (require("conf"))();
const { keys, keyExists } = require("../commands/keys");
const add = require("../commands/add");
const clear = require("../commands/clear");

describe("Testing km KEYS command", () => {
  beforeEach(() => {
    process.env.DICTIONARY = "test-members";
  });

  afterEach(() => {
    process.env.DICTIONARY = "key-members";
    conf.set("test-members", {});
  });

  test("KEYS, dict does not exist", () => {
    expect(keys()).toBe(null);
  });

  test("ADD foo bar, there is 1 key", () => {
    add("foo", "bar");
    add("foo", "bar");
    expect(keys()).toEqual(["foo"]);
  });

  test("ADD multiple keys, check key 'vue' exists", () => {
    add("vue", "javascript");
    add("react", "javascript");
    expect(keyExists("vue")).toBe(true);
  });

  test("ADD multiple keys, check key 'ember' does not exist", () => {
    add("vue", "javascript");
    add("react", "javascript");
    expect(keyExists("ember")).toBe(false);
  });
});
