const Employee = require("../library/Employee.js");

test("Can create Employee object", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
})

test("Can set name via constructor arguments", () => {
    const name = "Tony";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})

test("Can set ID via constructor arguments", () => {
    const id = "123";
    const e = new Employee("Name", id);
    expect(e.id).toBe(id);
})

test("Can set email via constructor arguments", () => {
    const email = "tony123@gmail.com";
    const e = new Employee("Name", "ID", email);
    expect(e.email).toBe(email);
})

test("Can get name via getName()", () => {
    const testName = "Tony";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
})

test("Can get id via getID()", () => {
    const testID = "123";
    const e = new Employee("Tony", testID);
    expect(e.getID()).toBe(testID);
})

test("Can get email via getEmail()", () => {
    const testEmail = "tony123@gmail.com";
    const e = new Employee("Tony", "123", testEmail);
    expect(e.getEmail()).toBe(testEmail);
})

test("getRole() should return 'Employee'", () => {
    const testRole = "Employee";
    const e = new Employee("Tony", "123", "tony123@gmail.com");
    expect(e.getRole()).toBe(testRole);
})