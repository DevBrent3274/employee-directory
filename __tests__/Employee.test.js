// Test to see if data can be collected from user 
// input correctly 
const Employee = require("../lib/Employee");

test("Can Instantiate Employee Instance",() =>{
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name with constructor arguments",() =>{
  const name = "Gary";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id with constuctor arguments",() =>{
  const testValue = 123;
  const e = new Employee("Foo", testValue); 
  expect(e.id).toBe(testValue);
});

test("Can set email with constuctor arguments",() =>{
  const testValue = "name@email.com";
  const e = new Employee("Foo", 1, testValue); 
  expect(e.email).toBe(testValue);
});

// Test to see if functions work properly
test("Can get name with getName()",() =>{
  const testValue = "Gary";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id with getId()",() =>{
  const testValue = "123";
  const e = new Employee("Foo",testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email with getEmail()",() =>{
  const testValue = "name@email.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Emplyoee\"",() =>{
  const testValue = "Employee";
  const e = new Employee("Gary", 1, "name@email.com"); 
  expect(e.getRole()).toBe(testValue);
});