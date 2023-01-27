const Employee = require("../lib/Employee");

test("Can Insatntiate Employee Instance",() =>{
  const e = new Employee();
  expect(typeof(e)).tobe("object");
});

test("Can set name with constuctor arguments",() =>{
  const name = new "Gary";
  const e = new Employee(name);
  expect(e.name).tobe(name);
});

test("Can set id with constuctor arguments",() =>{
  const testValue = 123;
  const e = new Employee("Foo", testValue); 
  expect(e.id).tobe(testValue);
});

test("Can set email with constuctor arguments",() =>{
  const testValue = "name@email.com";
  const e = new Employee("Foo", 1, testValue); 
  expect(e.eamil).tobe(testValue);
});

test("Can get name with getName()",() =>{
  const testValue = "Gary";
  const e = new Employee(testValue);
  expect(e.getName()).tobe(testValue);
});

test("Can get id with getId()",() =>{
  const testValue = "123";
  const e = new Employee("Foo",testValue);
  expect(e.getId()).tobe(testValue);
});

test("Can get email with getEmail()",() =>{
  const testValue = "name@email.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).tobe(testValue);
});

test("getRole() should return \"Emplyoee\"",() =>{
  const testValue = "Employee";
  const e = new Employee("Gary", 1, "name@email.com"); 
  expect(e.getRole()).tobe(testValue);
});