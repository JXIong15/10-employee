const Intern = require("../library/Intern.js");

test("Can create Intern object", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
})

test("Can set name via constructor arguments", () => {
    const name = "Tony";
    const e = new Intern(name);
    expect(e.name).toBe(name);
})

test("Can set ID via constructor arguments", () => {
    const id = "123";
    const e = new Intern("Name", id);
    expect(e.id).toBe(id);
})

test("Can set email via constructor arguments", () => {
    const email = "tony123@gmail.com";
    const e = new Intern("Name", "ID", email);
    expect(e.email).toBe(email);
})

test("Can set school via constructor arguments", () => {
    const school = "01";
    const e = new Intern("Name", "ID", "email", school);
    expect(e.school).toBe(school);
})

test("Can get name via getName()", () => {
    const testName = "Tony";
    const e = new Intern(testName);
    expect(e.getName()).toBe(testName);
})

test("Can get id via getID()", () => {
    const testID = "123";
    const e = new Intern("Tony", testID);
    expect(e.getID()).toBe(testID);
})

test("Can get email via getEmail()", () => {
    const testEmail = "tony123@gmail.com";
    const e = new Intern("Tony", "123", testEmail);
    expect(e.getEmail()).toBe(testEmail);
})

test("Can get school via getSchool()", () => {
    const testSchool = "01";
    const e = new Intern("Tony", "123", "tony123@gmail.com", testSchool);
    expect(e.getSchool()).toBe(testSchool);
})

test("getRole() should return 'Intern'", () => {
    const testRole = "Intern";
    const e = new Intern("Tony", "123", "tony123@gmail.com", "San Jose State University");
    expect(e.getRole()).toBe(testRole);
})