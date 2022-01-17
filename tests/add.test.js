require("dotenv").config();
const conf = new (require("conf"))();
const add = require("../commands/add");

describe("Testing km ADD command", () => {
  beforeEach(() => {
    process.env.DICTIONARY = "test-members";
  });

  afterEach(() => {
    process.env.DICTIONARY = "key-members";
    conf.set("test-members", {});
  });
  test("ADD foo bar key foo exits", () => {
    expect(add("foo", "bar")).toEqual(["bar"]);
  });

  test("ADD foo bar twice, foo to equal null ", () => {
    add("foo", "bar");
    expect(add("foo", "bar")).toBe(null);
  });

  test("ADD foo bar twice, foo to equal ['bar', 'baz'] ", () => {
    add("foo", "bar");
    expect(add("foo", "baz")).toEqual(["bar", "baz"]);
  });
});
