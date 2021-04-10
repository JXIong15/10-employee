const Engineer = require("../library/Engineer.js");

test("Can create Engineer object", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
})

test("Can set name via constructor arguments", () => {
    const name = "Tony";
    const e = new Engineer(name);
    expect(e.name).toBe(name);
})

test("Can set ID via constructor arguments", () => {
    const id = "123";
    const e = new Engineer("Name", id);
    expect(e.id).toBe(id);
})

test("Can set email via constructor arguments", () => {
    const email = "tony123@gmail.com";
    const e = new Engineer("Name", "ID", email);
    expect(e.email).toBe(email);
})

test("Can set Github username via constructor arguments", () => {
    const username = "tony123";
    const e = new Engineer("Name", "ID", "email", username);
    expect(e.username).toBe(username);
})

test("Can get name via getName()", () => {
    const testName = "Tony";
    const e = new Engineer(testName);
    expect(e.getName()).toBe(testName);
})

test("Can get id via getID()", () => {
    const testID = "123";
    const e = new Engineer("Tony", testID);
    expect(e.getID()).toBe(testID);
})

test("Can get email via getEmail()", () => {
    const testEmail = "tony123@gmail.com";
    const e = new Engineer("Tony", "123", testEmail);
    expect(e.getEmail()).toBe(testEmail);
})

test("Can get office number via getUsername()", () => {
    const testUsername = "tony123";
    const e = new Engineer("Tony", "123", "tony123@gmail.com", testUsername);
    expect(e.getUsername()).toBe(testUsername);
})

test("getRole() should return 'Engineer'", () => {
    const testRole = "Engineer";
    const e = new Engineer("Tony", "123", "tony123@gmail.com", "tony123");
    expect(e.getRole()).toBe(testRole);
})