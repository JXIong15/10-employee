const Manager = require("../library/Manager.js");

test("Can create Manager object", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
})

test("Can set name via constructor arguments", () => {
    const name = "Tony";
    const e = new Manager(name);
    expect(e.name).toBe(name);
})

test("Can set ID via constructor arguments", () => {
    const id = "123";
    const e = new Manager("Name", id);
    expect(e.id).toBe(id);
})

test("Can set email via constructor arguments", () => {
    const email = "tony123@gmail.com";
    const e = new Manager("Name", "ID", email);
    expect(e.email).toBe(email);
})

test("Can set office number via constructor arguments", () => {
    const number = "01";
    const e = new Manager("Name", "ID", "email", number);
    expect(e.number).toBe(number);
})

test("Can get name via getName()", () => {
    const testName = "Tony";
    const e = new Manager(testName);
    expect(e.getName()).toBe(testName);
})

test("Can get id via getID()", () => {
    const testID = "123";
    const e = new Manager("Tony", testID);
    expect(e.getID()).toBe(testID);
})

test("Can get email via getEmail()", () => {
    const testEmail = "tony123@gmail.com";
    const e = new Manager("Tony", "123", testEmail);
    expect(e.getEmail()).toBe(testEmail);
})

test("Can get office number via getNumber()", () => {
    const testNumber = "01";
    const e = new Manager("Tony", "123", "tony123@gmail.com", testNumber);
    expect(e.getNumber()).toBe(testNumber);
})

test("getRole() should return 'Manager'", () => {
    const testRole = "Manager";
    const e = new Manager("Tony", "123", "tony123@gmail.com", "01");
    expect(e.getRole()).toBe(testRole);
})