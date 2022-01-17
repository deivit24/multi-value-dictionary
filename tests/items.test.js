require("dotenv").config();
const conf = new (require("conf"))();
const items = require("../commands/items");
const add = require("../commands/add");

describe("Testing km Items command", () => {
  beforeEach(() => {
    process.env.DICTIONARY = "test-members";
    const javascript = ["vue", "react"];
    const python = ["django", "flask"];
    for (const lang of javascript) {
      add("javascript", lang);
    }
    for (const lang of python) {
      add("python", lang);
    }
  });

  afterEach(() => {
    conf.set("test-members", {});
    process.env.DICTIONARY = "key-members";
  });
  test("ITEMS gets all items", () => {
    const expected = {
      1: "javascript: vue",
      2: "javascript: react",
      3: "python: django",
      4: "python: flask",
    };
    expect(items()).toEqual(expected);
  });
});
