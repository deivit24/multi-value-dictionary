require("dotenv").config();
const conf = new (require("conf"))();
const { remove, removeAll } = require("../commands/remove");
const add = require("../commands/add");
const { keys } = require("../commands/keys");
const { memberExists, members } = require("../commands/members");

describe("Testing km REMOVE commands", () => {
  beforeEach(() => {
    process.env.DICTIONARY = "test-members";
    const languages = ["vue", "react", "angular"];
    for (const lang of languages) {
      add("javascript", lang);
    }
  });

  afterEach(async () => {
    conf.set("test-members", {});
    process.env.DICTIONARY = "key-members";
  });
  test("REMOVE javascript vue removes members", () => {
    expect(memberExists("javascript", "vue")).toBe(true);
    remove("javascript", "vue");
    expect(memberExists("javascript", "vue")).toBe(false);
  });

  test("REMOVE ALL javascript removes all members", () => {
    expect(members("javascript")).toEqual(["vue", "react", "angular"]);
    removeAll("javascript");
    expect(members("javascript")).toBe(null);
  });
});
