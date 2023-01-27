const Intern = require("../lib/Intern");

test("Can set school with constructor", () => {
  const testValue = "UofM";
  const e = new Intern("Foo", 1, "name@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "name@email.com", "UofM");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school with getSchool()", () => {
  const testValue = "UofM";
  const e = new Intern("Foo", 1, "name@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});