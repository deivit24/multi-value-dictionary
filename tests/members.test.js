require("dotenv").config();
const conf = new (require("conf"))();
const { members, memberExists, allMembers } = require("../commands/members");
const add = require("../commands/add");

describe("Testing km MEMBERS command", () => {
  beforeEach(() => {
    process.env.DICTIONARY = "test-members";
    const languages = ["vue", "react", "angular"];
    for (const lang of languages) {
      add("javascript", lang);
    }
  });

  afterEach(() => {
    conf.set("test-members", {});
    process.env.DICTIONARY = "key-members";
  });

  test("MEMBER javascript vue does exist", () => {
    expect(memberExists("javascript", "vue")).toBe(true);
  });

  test("MEMBER for bar does not exist", () => {
    expect(memberExists("javascript", "ember")).toBe(false);
  });

  test("Returns array of members", () => {
    expect(members("javascript").length).toBe(3);
  });

  test("ALLMEMBERS returns all members", () => {
    const languages = ["vue", "react", "angular"];
    add("python", "flask");
    expect(allMembers().length).toBe(4);
  });
});
