const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number with constructor argument", () => {
  const testValue = 123;
  const e = new Manager("Foo", 1, "name@email.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "name@email.com", 123);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number with getOffice()", () => {
  const testValue = 123;
  const e = new Manager("Foo", 1, "name@email.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});