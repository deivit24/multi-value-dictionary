require("dotenv").config();
const conf = new (require("conf"))();
const clear = require("../commands/clear");
const add = require("../commands/add");

describe("Testing km CLEAR command", () => {
  beforeEach(() => {
    process.env.DICTIONARY = "test-members";
  });

  afterEach(() => {
    process.env.DICTIONARY = "key-members";
    conf.set("test-members", {});
  });
  test("CLEAR delete dict", async () => {
    add("javascript", "vue");
    add("javascript", "react");
    expect(clear()).toEqual({});
  });
});
